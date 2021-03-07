import pandas as pd
import pdb

FILENAME = "poc_emi.csv"

df = pd.read_csv(FILENAME)

pub_name_list = df.poc_desc.unique()

publishers_dict = {}
publishers_anonym_dict = {}

for pub_index, pub_name in enumerate(pub_name_list):
    print(f"{pub_index} : {pub_name}")
    emittenti_list = df[df['poc_desc'] == pub_name].emittente.unique()

    channels_dict = {}
    channels_anonym_dict = {}

    for index_list, emit_code in enumerate(emittenti_list):
        try:
            emit_name = df[df['poc_desc'] == pub_name][df['emittente'] == emit_code].iloc[0]['emi_desc'].strip()
        except:
            pdb.set_trace()
        channels_dict[emit_name] = emit_code
        channels_anonym_dict[ f"Channel {index_list}"] = emit_code

    publishers_dict[pub_name] = channels_dict
    publishers_anonym_dict[f"Publisher {pub_index}"] = channels_anonym_dict


print("canali dictionary:")
print(publishers_dict)

print("canali anonymized dictionary:")
print(publishers_anonym_dict)

