(function (nbviz) {
    'use strict';

    /*
    var canali = { "Publisher1": {"Channel A"         : "6038",
                                 "Channel B"          : "6115",
                                 "Channel C"          : "6119",
                                 "Channel D"          : "6120",
                                 "Channel E"          : "6278",
                                 "Channel F"          : "6305",
                                 "Channel G"          : "6368",
                                 "Channel H"          : "6433",
                                 "Channel I"          : "6513",
                                 "Channel J"          : "6659",
                                 "Channel K"          : "7739",
                                 "Channel L"          : "8285",
                                 "Channel M"          : "8465"
                                },
                    "Publisher2": {"Channel 1"        : "0013"
                                }
                    };
    */

    var canali_in_chiaro = {'RAI': {'RAI 1': '0001', 'RAI 2': '0002', 'RAI 3': '0003', 'Rai Premium': '3021', 'Rai Sport piu HD': '3022', 'tgr': '3023', 'Rai Radio 2': '3024', 'rai digital': '3025', 'RAI MOVIE': '6055', 'RAI PREMIUM': '6058', 'RAI NEWS': '6095', 'RAI SPORT': '6367', 'RAI SCUOLA': '6131', 'RAI STORIA': '6132', 'RAI GULP': '6134', 'RAI YOYO': '6169', 'RAI 4': '6824', 'RAI 5': '7936', 'Not Informed': 'NotI'}, 'Discovery': {'DISCOVERY CHANNEL/HD': '6038', 'EUROSPORT/HD': '6083', 'EUROSPORT 2': '6096', 'DISCOVERY SCIENCE': '6115', 'DISCOVERY TRAVEL & LIVING': '6117', 'REAL TIME': '6119', 'ANIMAL PLANET': '6120', 'Home and garden TV': '6278', 'DISCOVERY CHANNEL +1': '6287', 'K2': '6305', 'FRISBEE': '6368', 'REAL TIME +1': '6388', 'DMAX': '6433', 'DEEJAY TV': '6513', 'FOOD NETWORK': '6659', 'GIALLO': '7739', 'DEEJAY TV +1': '7807', 'ID - INVESTIGATION DISCOVERY': '8285', 'FOCUS': '8465', 'HGTV - HOME & GARDEN': '9650', 'DMAX +1': '9742', 'Not Informed': 'NotI'}, 'La7': {'LA7': '0013', 'LA7D': '6773', 'Not Informed': 'NotI'}, 'Sky Italia': {'7 GOLD TELECITY LIGURIA': '0023', '7 GOLD': '0024', 'MUSIC': '0027', 'Fox +1': '0029', 'Sky Cinema Comedy HD': '0030', 'VIDEOGRUPPO': '0031', 'FoxCrime Criminal': '0033', 'ANTENNATRE': '0034', 'Sky Sport24 HD': '0040', 'ESPANSIONE TV': '0038', 'TELELOMBARDIA': '0047', 'History Misteri': '0057', 'NationalGeo +1': '0058', 'Sky Arte HD': '0075', 'Sky Cinema Uno': '0101', 'Fox News': '0103', 'Sky Cinema Family': '0105', 'Sky Cinema Uno +24': '0107', 'Sky News': '0108', 'RTV 38': '0110', 'Sky Cinema Action': '0115', 'GINX Esports TV': '0116', 'Discovery HD': '0117', 'cielo HD': '0120', 'Sky Cinema Romance': '0123', 'Sky Cinema Due': '0137', 'Eurosport 2 HD': '0150', 'Sky Cinema Suspense': '0151', 'Classica HD': '0170', 'TELEDUE': '0180', 'Sky Cinema Uno HD': '0202', 'Sky Cinema HD': '0204', 'Sky Cinema Action HD': '0206', 'Sky Sport Serie A HD': '0230', 'TGS TELEGIORNALE SICILIA': '0211', 'Sky Sport': '0615', 'Sky Cinema Uno +24 HD': '0224', 'Sky Atlantic HD': '0226', 'NOVE HD': '0227', 'Gambero Rosso HD': '0229', 'Sky Cinema Romance HD': '0231', 'Sky Sport HD': '0951', 'NationalGeo HD': '0236', 'Fox HD': '0237', 'Fox Crime HD': '0238', 'CNBC HD': '0245', 'Sky Sport Football HD': '0248', 'Crime + Inv. HD': '0249', 'Sky Cinema Family HD': '0255', 'Cartoon Network HD': '0258', 'TV8 HD': '0260', 'Milan TV': '0261', 'Roma TV': '0264', 'Sky Uno +1 HD': '0266', 'Cartoon Network': '0308', 'Baby TV': '0310', 'DeAJunior': '0313', 'Nickelodeon': '0320', 'Sky Meteo24': '0321', 'Discovery +1': '0322', 'TG24PrimoPiano': '0328', 'Torino Channel': '0331', 'Boomerang +1': '0343', 'CACCIA e Pesca': '0344', 'NatGeo Wild +1': '0348', 'Cartoon +1': '0355', 'Sky Tg24': '0362', 'Boomerang': '0367', 'MAN-GA': '0394', 'Comedy Central': '0404', 'La7': '0407', 'Sky Atlantic': '0412', '-frisbee-': '0418', 'Super!': '0421', 'TELECAMPIONE': '0424', 'MTV Music': '0429', 'Class CNBC': '0433', 'MS MOTORTV': '0445', 'DeAKids': '0460', 'K2': '0466', 'Real Time +1': '0469', 'Sky Uno HD': '0479', 'Sky Sport F1 HD': '0478', 'Sky Sport MotoGP HD': '0483', 'Real Time HD': '0507', 'Fox Life HD': '0512', 'History HD': '0513', 'NatGeo Wild HD': '0515', 'Sky TG24 HD': '0521', 'Sky Atlantic +1 HD': '0520', 'Nickelodeon +1': '0532', 'Comedy +1': '0533', 'Blaze HD': '0543', 'Fox Business': '0544', 'Sky Cinema Due HD': '0564', 'Sky Sport F1': '0610', 'Sky Sport NBA': '0611', 'Premium Cinema HD': '0681', 'Premium Cinema1 +24 HD': '0682', 'Premium Cinema2 HD': '0683', 'Premium Comedy HD': '0684', 'Premium Cinema3 HD': '0685', 'Premium Stories HD': '0687', 'Premium Action HD': '0688', 'Premium Crime HD': '0689', 'Eurosport': '0705', 'Sky Sport Football': '0712', 'Sky Uno': '0718', 'Food Network HD': '0722', 'Sky Cinema Hits': '0724', 'Sky Cinema Comedy': '0725', 'Sky Cinema Drama': '0727', 'Sky Sport Collection': '0730', 'Sky Cinema Due +24': '0732', 'Wine TV': '0755', 'MTV HD': '0763', 'Sky Sport NBA HD': '0764', 'Sky Sport Collection HD': '0768', 'Sky Cinema Drama HD': '0769', 'DAZN1': '0777', 'Canale di servizio': '0778', 'Sky Cinema Due +24 HD': '0779', 'Euronews': '0801', 'RAI Sport': '0807', 'Fashion TV': '0810', 'ClassTvModa': '0811', 'Telepace HD': '0818', 'Senato Italiano': '0825', 'Camera dei Deputati': '0826', 'People TV-Rete7': '0846', 'Napoli Mia': '0871', 'BBC World News': '0891', 'RAI News': '0895', 'Rai 3': '0897', 'Rai 2': '0898', 'Rai 1': '0899', 'Sky Uno +1': '0903', 'Sky Sport Uno': '0920', 'Sky Sport Arena': '0921', 'Sky Sport Serie A': '0922', 'Sky Sport24': '0929', 'NOVE': '0974', 'Kiss Kiss Tv HD': '0976', 'Paramount Network HD': '1324', 'CIAO': '1731', 'Eurosport HD': '3073', 'GIALLO HD': '3655', 'Motor Trend HD': '3659', 'DMAX+1': '3664', 'Radio Radio TV': '4081', 'Al Jazeera HD': '5114', 'France 24 Francais HD': '5119', 'Venus Tv': '5182', 'TVP Polonia': '5190', 'TVR Intl.': '5192', 'CCTV-4': '5202', 'Deutsche Welle HD': '5203', 'Bloomberg': '5256', 'Horse TV HD': '5290', 'France 24 English HD': '5296', 'LaF': '5306', 'TG NORBA 24': '5312', 'Spike': '5318', 'teleSUR': '5322', 'TgCom24': '5411', 'Emilia Romagna 24': '5412', 'DMAX HD': '5414', 'Italian Fishing Tv': '5418', 'tv8': '5423', 'Antichita Chiossone': '5425', 'RADIONORBA TV': '5430', 'Euronews English HD': '5432', 'TRT World HD': '5434', 'Canale 5 HD': '5435', 'Iris': '5436', 'La 5': '5437', 'Mediaset Extra': '5443', 'Mediaset Italia Due': '5444', 'TOPcrime': '5445', 'Focus': '5447', 'Radio Italia TV HD': '5454', 'Canale 20 HD': '5458', 'Italia 1 HD': '5459', 'Rete 4 HD': '5464', 'QVC HD': '5466', 'HSE24 HD': '5470', 'RDS Social TV': '5480', 'Cine34': '5481', 'Record TV Europa': '5488', 'Videolina': '5489', 'MTV': '6011', 'SKY CINEMA +1': '6017', 'CINEMA FAMILY': '6018', 'SKY CINEMA PASSION': '6019', 'SKY CINEMA MAX/HD': '6020', 'SKY CINEMA HITS/HD': '6021', 'SKY SPORT 2': '6022', 'SKY TG24': '6023', 'SKY SPORT 3': '6052', 'SKY SPORT SERIE A': '6053', 'SKY METEO 24': '6054', 'SKY CINEMA CLASSIC': '6060', 'SKY UNO': '6061', 'SKY CALCIO 1': '6062', 'SKY CALCIO 2': '6063', 'SKY CALCIO 3': '6064', 'SKY CALCIO 4': '6065', 'SKY CALCIO 5': '6066', 'SKY CALCIO 6': '6067', 'SKY CALCIO 7': '6068', 'SKY CALCIO 8': '6069', 'SKY CALCIO 9': '6070', 'SKY CALCIO 10': '6071', 'SKY CALCIO 11': '6072', 'SKY CALCIO 12': '6073', 'SKY CALCIO 13': '6074', 'SKY MOSAICO INTERATTIVO': '6097', 'SKY TG24 PRIMO PIANO': '6107', 'SKY SPORT ACTIVE': '6108', 'SKY TG24 RASSEGNE': '6109', 'SKY TG24 ACTIVE': '6112', 'SKY TG24 EVENTI': '6142', 'SKY UNO +1': '6173', 'SKY MOSAICO INTERATTIVO 2': '6227', 'SKY SPORT 24': '6273', 'SKY CINEMA MAX +1': '6289', 'SKY CINEMA +24': '6290', 'SKY CINEMA COMEDY': '6310', 'CIELO': '6335', 'SKY ON DEMAND 1 HD': '6363', 'SKY ON DEMAND 1 SD': '6364', 'SKY SPORT F1': '6488', 'SKY SPORT RACE CONTROL (F1 E MOTOGP)': '6489', 'SKY MOSAICO MOTORI': '6490', 'ON BOARD SKY(F1)/FLY VIEW(MOTO GP)': '6491', 'ON BOARD LEADER(F1)': '6492', 'ON BOARD MIX(F1 E MOTO GP)': '6493', 'LIVE TIMING(F1 E MOTO GP)': '6495', 'RACE CONTROL(F1 E MOTO GP)': '6496', 'SKY TG24 (50)': '8254', 'SKY SPORT UNO DTT': '9042', 'SKY ATLANTIC': '9735', 'SKY SPORT MOTO GP': '9736', 'SKY ATLANTIC +1': '9737', 'SKY MOSAICO CINEMA': '9775', 'SS24 MOSAICO': '9787', 'SS24 HIGHLIGHTS': '9788', 'SS24 IL FATTO DEL GIORNO': '9789', 'SKY SPORT MIX': '9790', 'SKY SPORT UNO': '9816', 'SKY SPORT FOOTBALL': '9817', 'SKY SPORT ARENA': '9818', 'SKY SPORT GOLF': '9819', 'SKY SPORT NBA': '9820', 'SKY CINEMA DUE': '9833', 'SKY CINEMA COLLECTION': '9834', 'SKY CINEMA ACTION': '9835', 'SKY CINEMA ROMANCE': '9837', 'SKY CINEMA DRAMA': '9838', 'SKY CINEMA DUE +24': '9839', 'SKY SPORT COLLECTION': '9886', 'Not Informed': 'NotI'}, 'Mediaset': {'CANALE 5': '0004', 'ITALIA 1': '0005', 'RETE 4': '0006', 'Radio 105': '0785', 'Mediaset Digital': '3014', 'Canale 5': '3001', 'Rete 4': '3002', 'Italia 1': '3003', '20': '9028', 'Iris': '3005', 'Top Crime': '3006', 'La5': '3007', 'TGCom 24': '3009', 'Focus': '3010', 'Italia 2 Mediaset': '3011', 'Cartoonito': '3012', 'PREMIUM CALCIO 1': '6522', 'PREMIUM CALCIO 2': '6523', 'PREMIUM CALCIO 3': '6524', 'PREMIUM CALCIO 4': '6525', 'BOING': '6526', 'PREMIUM CALCIO 5': '6550', 'PREMIUM CALCIO 6': '6582', 'PREMIUM CALCIO 7': '6680', 'IRIS': '6734', 'PREMIUM JOI': '6782', 'PREMIUM STORIES': '6783', 'PREMIUM ACTION': '6784', 'PREMIUM CALCIO/HD': '6830', 'PREMIUM CINEMA': '7147', 'PREMIUM SPORT/HD': '7213', 'PREMIUM CINEMA 3': '7351', 'PREMIUM CINEMA 2': '7355', 'LA5': '7373', 'CARTOONITO': '7742', 'MEDIASET EXTRA': '7972', 'ITALIA 2 MEDIASET': '7978', 'Virgin Radio': '7998', 'TGCOM 24': '7999', 'PREMIUM CRIME': '8122', 'PREMIUM CINEMA COMEDY': '8247', 'FOCUS': '9029', 'TOP CRIME': '9458', 'r101tv': '9467', 'BOING PLUS': '9489', 'CINE 34': '9653', 'Radio Monte Carlo': '9772', 'PREMIUM CINEMA 1 +24': '9810', 'MEDIASET EXTRA 2': '9972', 'Not Informed': 'NotI'}};

    var canali_anonym = {'Publisher 0': {'Channel 0': '0001', 'Channel 1': '0002', 'Channel 2': '0003', 'Channel 3': '3021', 'Channel 4': '3022', 'Channel 5': '3023', 'Channel 6': '3024', 'Channel 7': '3025', 'Channel 8': '6055', 'Channel 9': '6058', 'Channel 10': '6095', 'Channel 11': '6130', 'Channel 12': '6131', 'Channel 13': '6132', 'Channel 14': '6134', 'Channel 15': '6169', 'Channel 16': '6367', 'Channel 17': '6824', 'Channel 18': '7936', 'Channel 19': 'NotI'}, 'Publisher 1': {'Channel 0': '6038', 'Channel 1': '6083', 'Channel 2': '6096', 'Channel 3': '6115', 'Channel 4': '6117', 'Channel 5': '6119', 'Channel 6': '6120', 'Channel 7': '6278', 'Channel 8': '6287', 'Channel 9': '6305', 'Channel 10': '6368', 'Channel 11': '6388', 'Channel 12': '6433', 'Channel 13': '6513', 'Channel 14': '6659', 'Channel 15': '7739', 'Channel 16': '7807', 'Channel 17': '8285', 'Channel 18': '8465', 'Channel 19': '9650', 'Channel 20': '9742', 'Channel 21': 'NotI'}, 'Publisher 2': {'Channel 0': '0013', 'Channel 1': '6773', 'Channel 2': 'NotI'}, 'Publisher 3': {'Channel 0': '0023', 'Channel 1': '0024', 'Channel 2': '0027', 'Channel 3': '0029', 'Channel 4': '0030', 'Channel 5': '0031', 'Channel 6': '0033', 'Channel 7': '0034', 'Channel 8': '0035', 'Channel 9': '0037', 'Channel 10': '0038', 'Channel 11': '0040', 'Channel 12': '0047', 'Channel 13': '0057', 'Channel 14': '0058', 'Channel 15': '0074', 'Channel 16': '0075', 'Channel 17': '0101', 'Channel 18': '0103', 'Channel 19': '0105', 'Channel 20': '0107', 'Channel 21': '0108', 'Channel 22': '0110', 'Channel 23': '0115', 'Channel 24': '0116', 'Channel 25': '0117', 'Channel 26': '0120', 'Channel 27': '0123', 'Channel 28': '0137', 'Channel 29': '0150', 'Channel 30': '0151', 'Channel 31': '0170', 'Channel 32': '0180', 'Channel 33': '0202', 'Channel 34': '0204', 'Channel 35': '0206', 'Channel 36': '0209', 'Channel 37': '0211', 'Channel 38': '0215', 'Channel 39': '0224', 'Channel 40': '0226', 'Channel 41': '0227', 'Channel 42': '0228', 'Channel 43': '0229', 'Channel 44': '0230', 'Channel 45': '0231', 'Channel 46': '0233', 'Channel 47': '0234', 'Channel 48': '0236', 'Channel 49': '0237', 'Channel 50': '0238', 'Channel 51': '0245', 'Channel 52': '0248', 'Channel 53': '0249', 'Channel 54': '0255', 'Channel 55': '0258', 'Channel 56': '0260', 'Channel 57': '0261', 'Channel 58': '0264', 'Channel 59': '0266', 'Channel 60': '0308', 'Channel 61': '0310', 'Channel 62': '0313', 'Channel 63': '0320', 'Channel 64': '0321', 'Channel 65': '0322', 'Channel 66': '0328', 'Channel 67': '0331', 'Channel 68': '0343', 'Channel 69': '0344', 'Channel 70': '0348', 'Channel 71': '0355', 'Channel 72': '0362', 'Channel 73': '0367', 'Channel 74': '0394', 'Channel 75': '0404', 'Channel 76': '0407', 'Channel 77': '0412', 'Channel 78': '0418', 'Channel 79': '0421', 'Channel 80': '0424', 'Channel 81': '0428', 'Channel 82': '0429', 'Channel 83': '0433', 'Channel 84': '0445', 'Channel 85': '0460', 'Channel 86': '0466', 'Channel 87': '0469', 'Channel 88': '0477', 'Channel 89': '0478', 'Channel 90': '0479', 'Channel 91': '0483', 'Channel 92': '0507', 'Channel 93': '0512', 'Channel 94': '0513', 'Channel 95': '0515', 'Channel 96': '0519', 'Channel 97': '0520', 'Channel 98': '0521', 'Channel 99': '0532', 'Channel 100': '0533', 'Channel 101': '0543', 'Channel 102': '0544', 'Channel 103': '0564', 'Channel 104': '0610', 'Channel 105': '0611', 'Channel 106': '0613', 'Channel 107': '0615', 'Channel 108': '0681', 'Channel 109': '0682', 'Channel 110': '0683', 'Channel 111': '0684', 'Channel 112': '0685', 'Channel 113': '0687', 'Channel 114': '0688', 'Channel 115': '0689', 'Channel 116': '0705', 'Channel 117': '0712', 'Channel 118': '0718', 'Channel 119': '0722', 'Channel 120': '0724', 'Channel 121': '0725', 'Channel 122': '0727', 'Channel 123': '0730', 'Channel 124': '0732', 'Channel 125': '0755', 'Channel 126': '0763', 'Channel 127': '0764', 'Channel 128': '0768', 'Channel 129': '0769', 'Channel 130': '0772', 'Channel 131': '0775', 'Channel 132': '0777', 'Channel 133': '0778', 'Channel 134': '0779', 'Channel 135': '0801', 'Channel 136': '0807', 'Channel 137': '0810', 'Channel 138': '0811', 'Channel 139': '0818', 'Channel 140': '0825', 'Channel 141': '0826', 'Channel 142': '0846', 'Channel 143': '0871', 'Channel 144': '0891', 'Channel 145': '0895', 'Channel 146': '0897', 'Channel 147': '0898', 'Channel 148': '0899', 'Channel 149': '0903', 'Channel 150': '0910', 'Channel 151': '0912', 'Channel 152': '0917', 'Channel 153': '0920', 'Channel 154': '0921', 'Channel 155': '0922', 'Channel 156': '0929', 'Channel 157': '0951', 'Channel 158': '0974', 'Channel 159': '0976', 'Channel 160': '1324', 'Channel 161': '1731', 'Channel 162': '3073', 'Channel 163': '3655', 'Channel 164': '3659', 'Channel 165': '3664', 'Channel 166': '4081', 'Channel 167': '5114', 'Channel 168': '5119', 'Channel 169': '5182', 'Channel 170': '5190', 'Channel 171': '5192', 'Channel 172': '5202', 'Channel 173': '5203', 'Channel 174': '5256', 'Channel 175': '5290', 'Channel 176': '5296', 'Channel 177': '5306', 'Channel 178': '5312', 'Channel 179': '5318', 'Channel 180': '5322', 'Channel 181': '5411', 'Channel 182': '5412', 'Channel 183': '5414', 'Channel 184': '5418', 'Channel 185': '5423', 'Channel 186': '5425', 'Channel 187': '5430', 'Channel 188': '5432', 'Channel 189': '5434', 'Channel 190': '5435', 'Channel 191': '5436', 'Channel 192': '5437', 'Channel 193': '5443', 'Channel 194': '5444', 'Channel 195': '5445', 'Channel 196': '5447', 'Channel 197': '5454', 'Channel 198': '5458', 'Channel 199': '5459', 'Channel 200': '5464', 'Channel 201': '5466', 'Channel 202': '5470', 'Channel 203': '5480', 'Channel 204': '5481', 'Channel 205': '5488', 'Channel 206': '5489', 'Channel 207': '6011', 'Channel 208': '6017', 'Channel 209': '6018', 'Channel 210': '6019', 'Channel 211': '6020', 'Channel 212': '6021', 'Channel 213': '6022', 'Channel 214': '6023', 'Channel 215': '6052', 'Channel 216': '6053', 'Channel 217': '6054', 'Channel 218': '6060', 'Channel 219': '6061', 'Channel 220': '6062', 'Channel 221': '6063', 'Channel 222': '6064', 'Channel 223': '6065', 'Channel 224': '6066', 'Channel 225': '6067', 'Channel 226': '6068', 'Channel 227': '6069', 'Channel 228': '6070', 'Channel 229': '6071', 'Channel 230': '6072', 'Channel 231': '6073', 'Channel 232': '6074', 'Channel 233': '6097', 'Channel 234': '6107', 'Channel 235': '6108', 'Channel 236': '6109', 'Channel 237': '6112', 'Channel 238': '6142', 'Channel 239': '6173', 'Channel 240': '6227', 'Channel 241': '6273', 'Channel 242': '6289', 'Channel 243': '6290', 'Channel 244': '6310', 'Channel 245': '6335', 'Channel 246': '6363', 'Channel 247': '6364', 'Channel 248': '6488', 'Channel 249': '6489', 'Channel 250': '6490', 'Channel 251': '6491', 'Channel 252': '6492', 'Channel 253': '6493', 'Channel 254': '6495', 'Channel 255': '6496', 'Channel 256': '8254', 'Channel 257': '9042', 'Channel 258': '9735', 'Channel 259': '9736', 'Channel 260': '9737', 'Channel 261': '9775', 'Channel 262': '9787', 'Channel 263': '9788', 'Channel 264': '9789', 'Channel 265': '9790', 'Channel 266': '9816', 'Channel 267': '9817', 'Channel 268': '9818', 'Channel 269': '9819', 'Channel 270': '9820', 'Channel 271': '9833', 'Channel 272': '9834', 'Channel 273': '9835', 'Channel 274': '9837', 'Channel 275': '9838', 'Channel 276': '9839', 'Channel 277': '9886', 'Channel 278': 'NotI'}, 'Publisher 4': {'Channel 0': '0004', 'Channel 1': '0005', 'Channel 2': '0006', 'Channel 3': '0785', 'Channel 4': '3000', 'Channel 5': '3001', 'Channel 6': '3002', 'Channel 7': '3003', 'Channel 8': '3004', 'Channel 9': '3005', 'Channel 10': '3006', 'Channel 11': '3007', 'Channel 12': '3009', 'Channel 13': '3010', 'Channel 14': '3011', 'Channel 15': '3012', 'Channel 16': '3014', 'Channel 17': '6522', 'Channel 18': '6523', 'Channel 19': '6524', 'Channel 20': '6525', 'Channel 21': '6526', 'Channel 22': '6550', 'Channel 23': '6582', 'Channel 24': '6680', 'Channel 25': '6734', 'Channel 26': '6782', 'Channel 27': '6783', 'Channel 28': '6784', 'Channel 29': '6830', 'Channel 30': '7147', 'Channel 31': '7213', 'Channel 32': '7351', 'Channel 33': '7355', 'Channel 34': '7373', 'Channel 35': '7742', 'Channel 36': '7972', 'Channel 37': '7978', 'Channel 38': '7998', 'Channel 39': '7999', 'Channel 40': '8122', 'Channel 41': '8247', 'Channel 42': '8465', 'Channel 43': '9028', 'Channel 44': '9029', 'Channel 45': '9458', 'Channel 46': '9467', 'Channel 47': '9489', 'Channel 48': '9653', 'Channel 49': '9772', 'Channel 50': '9810', 'Channel 51': '9972', 'Channel 52': 'NotI'}};

    var canali = canali_anonym;

    var auth_token = "null";
                
    nbviz.channels_in_clear = function() {
        canali = canali_in_chiaro;
        load_channels();
    }

    nbviz.channels_anonym = function() {
        canali = canali_anonym;
        load_channels();
    }

    nbviz.channels_toggle = function() {
        if (canali == canali_anonym) {
            canali = canali_in_chiaro;
        }
        else {
            canali = canali_anonym;
        }
        load_channels();

    }

    nbviz.loginButton = function login() {
        var username = document.getElementById("username_api").value;
        var password = document.getElementById("password_api").value;
        console.log("Username: " + username);
        console.log("Password: " + password);
        //d3.select("#results-holder").html("<span>Date: " + dateValue + " - Channel: " + channelValue + " - Time: " + time_start + " -> " + time_end + " - Gender: " + genderValue + " - Age: " + ageValue + "</span>");
        var LOGIN_URL = "http://10.252.50.48:5000/login";
        d3.select("#request-panel-span").html(LOGIN_URL + "</span>");
        $.ajax({
            contentType: 'application/json',
            url: LOGIN_URL,
            type: "POST",
            beforeSend: function (xhr) {
            },
            data: '{ "username": "' + username + '", "password": "' + password + '"}',
            success: function (result) {
                console.log(result);
                auth_token = result.access_token;
                d3.select("#result-panel-span").html("<span><table>"
                    + "<tr><td class='header'>Access: </td><td align='right'>" + result.access_expdt + "</td></tr>"
                    + "<tr><td class='header'>Token: </td><td align='right'>" + result.access_token.substring(1, 30) + "...</td></tr>"
                    + "<tr><td class='header'>Expiration: </td><td align='right'>" + result.refresh_expdt + "</td></tr>"
                    + "</table></span>");
            },
            error: function (error) {
		console.log("ERROR!");
                console.log(error);
                d3.select("#result-panel-span").html("<span><table>"
                    + "<tr><td class='header'>Error:</td><td align='right'>" + error.responseJSON.errormsg + "</td></tr>"
                    + "</table></span>");
                //alert(error);
            }
        });
    };

    nbviz.logoutButton = function logout() {
        var username = document.getElementById("username_api").value;
        var password = document.getElementById("password_api").value;
        console.log("Username: " + username);
        console.log("Password: " + password);
        //d3.select("#results-holder").html("<span>Date: " + dateValue + " - Channel: " + channelValue + " - Time: " + time_start + " -> " + time_end + " - Gender: " + genderValue + " - Age: " + ageValue + "</span>");
        var LOGOUT_URL = "http://10.252.50.48:5000/logout";
        d3.select("#request-panel-span").html(LOGOUT_URL + "</span>");
        $.ajax({
            contentType: 'application/json',
            url: LOGOUT_URL,
            type: "POST",
            beforeSend: function (xhr) {
            },
            data: '{ "username": "' + username + '", "password": "' + password + '"}',
            success: function (result) {
                console.log(result);
                auth_token = "null";
                d3.select("#result-panel-span").html("<span><table>"
                    + "<tr><td class='header'>Message:</td><td align='right'>" + result.message+ "</td></tr>"
                    + "</table></span>");
            },
            error: function (error) {
		console.log("ERROR!");
                console.log(error);
                d3.select("#result-panel-span").html("<span><table>"
                    + "<tr><td class='header'>Error:</td><td align='right'>" + error.responseJSON.errormsg + "</td></tr>"
                    + "</table></span>");
                //alert(error);
            }
        });
    };

    function load_channels() {
        console.log("Loading channels...");
        var publisherValue = document.getElementById("publisher").value;
        if (publisherValue in canali == false) {
            // the select is empty ==> let's populate it
            var str = "";
            for(var pub_key in canali) {
                console.log("Publisher key: " + pub_key)
                str += '<option value="' + pub_key + '">' + pub_key + '</option>';
            }
            document.getElementById("publisher").innerHTML = str;
            // let's reload again the current selection
            publisherValue = document.getElementById("publisher").value;
        }
        // let's update the channels
        var str = "";
        for (var key in canali[publisherValue]) {
            console.log("key: " + key);
            str += '<option value="' + canali[publisherValue][key] + '">' + key + '</option>';
        }
        document.getElementById("channel").innerHTML = str;
    }

    window.onload = function() { 
        load_channels();
    };

    function make_base_auth(user, password) {
        var tok = user + ':' + password;
        var hash = btoa(tok);
        return "Basic " + hash;
    }

    function update_result_panel(metrics) {
        d3.select("#result-panel-span").html("<span><table>"
        + "<tr><td class='header'>AMR-D: </td><td align='right'>" + metrics['amr'] + "</td></tr>"
        + "<tr><td class='header'>TTS: </td><td align='right'>" + metrics['tts'] + " (minuti)</td></tr>"
        + "<tr><td class='header'>LS: </td><td align='right'>" + metrics['ls'] + "</td></tr>"
        + "<tr><td class='header'>ASD: </td><td align='right'>" + metrics['asd'] + " (minuti)</td></tr>"
//        + "<tr><td class='header'>ATS: </td><td align='right'>" + metrics['ats'] + " (minuti)</td></tr>"
        + "</table></span>");

    }

    function numberWithCommas(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    nbviz.onDataChange = function inputUpdate(element_changed) {

        // CREDENTIALS
        console.log("Token: " + auth_token)

        if (auth_token == "null") {
            d3.select("#result-panel-span").html("<span><table>"
            + "<tr><td class='header'>Error Message:</td><td align='right'>Please login</td></tr>"
            + "</table></span>");        }

        // DATE
        var dateValue = document.getElementById("date").value;

        // PUBLISHER
        var publisherValue = document.getElementById("publisher").value;
        console.log("publisherValue : " + publisherValue);
        if (element_changed == 'publisher') {
            // let's update the channels
            var str = "";
            for (var key in canali[publisherValue]) {
                console.log("key: " + key);
                str += '<option value="' + canali[publisherValue][key] + '">' + key + '</option>';
            }
            document.getElementById("channel").innerHTML = str;
        }

        // CHANNEL
        var channelValue = document.getElementById("channel").value;
        var regionValue = document.getElementById("region").value;

        // TIME
        var time_start = document.getElementById("time_start").value;
        var time_end = document.getElementById("time_end").value;

        // DEVICE
        let deviceElements = [document.getElementById("undefined"), 
            document.getElementById("others"),
            document.getElementById("tv_screen"),
            document.getElementById("tablet"),
            document.getElementById("smartphone"),
            document.getElementById("pc")];
        let deviceSelection = [];
        deviceElements.forEach(function (item, index, array) {
            if (item.checked) {
                deviceSelection.push(item.value.toString());
            }
        });
        var deviceValue = deviceSelection.join(",");

        console.log("Date      : " + dateValue);
        console.log("Publisher : " + publisherValue);
        console.log("Channel   : " + channelValue);
        console.log("Region    : " + regionValue)
        console.log("Time      : " + time_start + " --> " + time_end);
        console.log("Device    : " + deviceValue);

        if (!dateValue || !time_start || !time_end) {
            return;
        }

        var metrics = {'amr': "N/A", 'tts': "N/A", 'ls': "N/A", 'asd': "N/A", 'ats': "N/A"};

        // Parameter preparation
        var data_json = {
            'from': dateValue + ' ' + time_start,
            'to': dateValue + ' ' + time_end,
            'filters': {'emittente': channelValue}
        }
        if (deviceValue != '') {
            data_json['filters']['device_class'] = deviceValue;
        }
        if (regionValue > 0) {
            data_json['filters']['regione'] = regionValue;
        }
        console.log(JSON.stringify(data_json));

        // AMR
        var AMR_URL = "http://10.252.50.48:5000/stm_metric/AMR"
        d3.select("#request-panel-span").html(AMR_URL + '\n'
            + JSON.stringify(data_json)
            + "</span>");
        d3.select("#result-panel-span").html("<span><table>"
        + "<tr><td class='header'>Request in progress...</td></tr>"
        + "</table></span>");
        console.log(AMR_URL);
        var t0_amr = performance.now()
        $.ajax({
            contentType: 'application/json',
            url: AMR_URL,
            type: "POST",
            beforeSend: function (xhr) {
                xhr.setRequestHeader('Authorization', 'Bearer ' + auth_token);
            },
            data: JSON.stringify(data_json),
            dataType: 'json',
            processData: false,
            success: function (result) {
                console.log("AMR turn-around time: " + (performance.now() - t0_amr) + " milliseconds.")
                console.log(result);
                metrics['amr'] = result.value;
                update_result_panel(metrics);
                /*
                amr = result.value
                d3.select("#result-panel-span").html("<span><table>"
                    + "<tr><td class='header'>AMR-D: </td><td align='right'>" + amr + "</td></tr>"
                    + "<tr><td class='header'>TTS: </td><td align='right'>" + tts + " (minuti)</td></tr>"
                    + "</table></span>");
                */
            },
            error: function (error) {
                console.log(error);
                d3.select("#result-panel-span").html("<span><table>"
                    + "<tr><td class='header'>Error:</td><td align='right'>" + error.responseJSON.errormsg + "</td></tr>"
                    + "</table></span>");
            }
        });

        // TTS
        var TTS_URL = "http://10.252.50.48:5000/stm_metric/TTS"
        d3.select("#request-panel-span").html(TTS_URL + '\n'
            + JSON.stringify(data_json)
            + "</span>");
        console.log(TTS_URL);
        var t0_tts = performance.now()
        $.ajax({
            contentType: 'application/json',
            url: TTS_URL,
            type: "POST",
            beforeSend: function (xhr) {
                xhr.setRequestHeader('Authorization', 'Bearer ' + auth_token);
            },
            data: JSON.stringify(data_json),
            dataType: 'json',
            processData: false,
            success: function (result) {
                console.log("TTS turn-around time: " + (performance.now() - t0_tts) + " milliseconds.")
                console.log(result);
                metrics['tts'] = result.value;
                update_result_panel(metrics);
                /*
                tts = result.value
                d3.select("#result-panel-span").html("<span><table>"
                + "<tr><td class='header'>AMR-D: </td><td align='right'>" + amr + "</td></tr>"
                + "<tr><td class='header'>TTS: </td><td align='right'>" + tts + " (minuti)</td></tr>"
                + "</table></span>");
                */
            },
            error: function (error) {
                console.log(error);
                d3.select("#result-panel-span").html("<span><table>"
                    + "<tr><td class='header'>Error:</td><td align='right'>" + error.responseJSON.errormsg + "</td></tr>"
                    + "</table></span>");
            }
        });

        // LS
        var LS_URL = "http://10.252.50.48:5000/stm_metric/LS"
        d3.select("#request-panel-span").html(LS_URL + '\n'
            + JSON.stringify(data_json)
            + "</span>");
        console.log(LS_URL);
        var t0_ls = performance.now()
        $.ajax({
            contentType: 'application/json',
            url: LS_URL,
            type: "POST",
            beforeSend: function (xhr) {
                xhr.setRequestHeader('Authorization', 'Bearer ' + auth_token);
            },
            data: JSON.stringify(data_json),
            dataType: 'json',
            processData: false,
            success: function (result) {
                console.log("LS turn-around time: " + (performance.now() - t0_ls) + " milliseconds.")
                console.log(result);
                metrics['ls'] = result.value;
                update_result_panel(metrics);
            },
            error: function (error) {
                console.log(error);
                d3.select("#result-panel-span").html("<span><table>"
                    + "<tr><td class='header'>Error:</td><td align='right'>" + error.responseJSON.errormsg + "</td></tr>"
                    + "</table></span>");
            }
        });

        // ASD
        var ASD_URL = "http://10.252.50.48:5000/stm_metric/ADS"
        d3.select("#request-panel-span").html(ASD_URL + '\n'
            + JSON.stringify(data_json)
            + "</span>");
        console.log(ASD_URL);
        var t0_asd = performance.now()
        $.ajax({
            contentType: 'application/json',
            url: ASD_URL,
            type: "POST",
            beforeSend: function (xhr) {
                xhr.setRequestHeader('Authorization', 'Bearer ' + auth_token);
            },
            data: JSON.stringify(data_json),
            dataType: 'json',
            processData: false,
            success: function (result) {
                console.log("ASD turn-around time: " + (performance.now() - t0_asd) + " milliseconds.")
                console.log(result);
                metrics['asd'] = result.value;
                update_result_panel(metrics);
            },
            error: function (error) {
                console.log(error);
                d3.select("#result-panel-span").html("<span><table>"
                    + "<tr><td class='header'>Error:</td><td align='right'>" + error.responseJSON.errormsg + "</td></tr>"
                    + "</table></span>");
            }
        });

        /*
        // ATS
        var ATS_URL = "http://10.252.50.48:5000/stm_metric/ATS"
        d3.select("#request-panel-span").html(ATS_URL + '\n'
            + JSON.stringify(data_json)
            + "</span>");
        console.log(ATS_URL);
        var t0_ats = performance.now()
        $.ajax({
            contentType: 'application/json',
            url: ATS_URL,
            type: "POST",
            beforeSend: function (xhr) {
                xhr.setRequestHeader('Authorization', 'Bearer ' + auth_token);
            },
            data: JSON.stringify(data_json),
            dataType: 'json',
            processData: false,
            success: function (result) {
                console.log("ATS turn-around time: " + (performance.now() - t0_ats) + " milliseconds.")
                console.log(result);
                metrics['ats'] = result.value;
                update_result_panel(metrics);
            },
            error: function (error) {
                console.log(error);
                d3.select("#result-panel-span").html("<span><table>"
                    + "<tr><td class='header'>Error:</td><td align='right'>" + error.responseJSON.errormsg + "</td></tr>"
                    + "</table></span>");
            }
        });
        */

    };

    function showChart() {
        var chart1Holder = d3.select("#chart1");
        var margin = {top:20, right:20, bottom:30, left:40};
        var boundingRect = chart1Holder.node().getBoundingClientRect();
        var width = boundingRect.width - margin.left - margin.right,
        height = boundingRect.height - margin.top - margin.bottom;
        var barWidth = width/nobelData.length;
    
        var svg = d3.select('#chart1').append("svg")
            .attr("width", width + margin.left + margin.right)
            .attr("height", height + margin.top + margin.bottom)
            .append("g").classed('chart', true)
            .attr("transform", "translate(" + margin.left + ","
            + margin.top + ")");
    
    };
    /*
    curl -u test_user:1160130875fda0812c99c5e3f1a03516471a6370c4f97129b221938eb4763e63 "http://127.0.0.1:5005/audience/api/v1.0/amr?date=2020-06-20&channel=1&time_start=20:00&time_end=23:59"
    */



    nbviz.callAPI = function callAPI() {

    };

}(window.nbviz = window.nbviz || {}));
