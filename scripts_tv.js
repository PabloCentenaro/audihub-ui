(function (nbviz) {
    'use strict';

    function make_base_auth(user, password) {
        var tok = user + ':' + password;
        var hash = btoa(tok);
        return "Basic " + hash;
    }

    function numberWithCommas(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    nbviz.onDataChange = function inputUpdate() {
        // CREDENTIALS
        var username = "";
        if (document.getElementById("username_api") != null) {
            username = document.getElementById("username_api").value;
        }
        var password = "";
        if (document.getElementById("password_api") != null) {
            password = document.getElementById("password_api").value;
        }
        // DATE
        var dateValue = document.getElementById("date").value;

        // CHANNEL
        var channelValue = document.getElementById("channel").value;

        // TIME
        var time_start = document.getElementById("time_start").value;
        var time_end = document.getElementById("time_end").value;

        // GENDER
        let genderElements = [document.getElementById("male"), document.getElementById("female")];
        let genderSelection = [];
        genderElements.forEach(function (item, index, array) {
            if (item.checked) {
                genderSelection.push(item.value.toString());
            }
        });
        var genderValue = genderSelection.join(",");

        //AGE:
        let ageElements = [];
        for (var i = 1; i < 14; i++) {
            var element_id = "age_" + i.toString();
            ageElements.push(document.getElementById(element_id));
        }
        let ageSelection = [];
        ageElements.forEach(function (item, index, array) {
            if (item.checked) {
                ageSelection.push(item.value.toString());
            }
        });
        var ageValue = ageSelection.join(",");

        console.log("Username : " + username);
        console.log("Password : " + password);
        console.log("Date    : " + dateValue);
        console.log("Channel : " + channelValue);
        console.log("Time    : " + time_start + " --> " + time_end);
        console.log("Gender  : " + genderValue);
        console.log("Age     : " + ageValue);

        if (!dateValue || !time_start || !time_end) {
            return;
        }

        var USERNAME = "test_user";
        var PASSWORD = "1160130875fda0812c99c5e3f1a03516471a6370c4f97129b221938eb4763e63";
        var json_res = "";
        //d3.select("#results-holder").html("<span>Date: " + dateValue + " - Channel: " + channelValue + " - Time: " + time_start + " -> " + time_end + " - Gender: " + genderValue + " - Age: " + ageValue + "</span>");
        var requestString = "http://10.252.50.48:5080/audience/api/v1.0/amr?date=" + dateValue
            + "&channel=" + channelValue
            + "&time_start=" + time_start
            + "&time_end=" + time_end
            + "&gender=" + genderValue
            + "&age=" + ageValue;
        d3.select("#request-panel-span").html(requestString.replace("?", "?<BR>").replace(/&/g, "&<BR>") + "</span>");
        $.ajax({
            url: requestString,
            type: "GET",
            beforeSend: function (xhr) {
                xhr.setRequestHeader('Authorization', make_base_auth(username, password));
            },
            success: function (result) {
                console.log(result);
                json_res = result;
                var avgExpFact = Math.trunc(result.response.expandedIndividuals / result.response.panelIndividuals);
                d3.select("#result-panel-span").html("<span><table>"
                    + "<tr><td class='header'>AMR</td><td align='right'>" + numberWithCommas(result.response.amr) + "</td></tr>"
                    + "<tr><td class='header'>Panel individuals</td><td align='right'>" + numberWithCommas(result.response.panelIndividuals) + "</td></tr>"
                    + "<tr><td class='header'>Expanded individuals</td><td align='right'>" + numberWithCommas(result.response.expandedIndividuals) + "</td></tr>"
                    + "<tr><td class='header'>Avg. Expansion Factor</td><td align='right'>" + numberWithCommas(avgExpFact) + "</td></tr>"
                    + "<tr><td class='header'>Processing time (sec.)</td><td align='right'>" + result.response.processingTime + "</td></tr>"
                    + "</table></span>");
            },
            error: function (error) {
                console.log(error);
                d3.select("#result-panel-span").html("<span><table>"
                    + "<tr><td class='header'>Error Code:</td><td align='right'>" + error.responseJSON.response.errorCode + "</td></tr>"
                    + "<tr><td class='header'>Error Message:</td><td align='right'>" + error.responseJSON.response.errorMessage + "</td></tr>"
                    + "</table></span>");
                //alert(error);
            }


        });
        /*        
                const userAction = async () => {
                    const response = await fetch('http://127.0.0.1:5005/audience/api/v1.0/amr?date=2020-06-20&channel=1&time_start=20:00&time_end=23:59', {
                        method: 'GET',
                        body: "", // string or object
                        headers: {
                        'Content-Type': 'application/json'
                        }
                    });
                    const myJson = await response.json(); //extract JSON from the http response
                    // do something with myJson
                }
        */

    }
    /*
curl -u test_user:1160130875fda0812c99c5e3f1a03516471a6370c4f97129b221938eb4763e63 "http://127.0.0.1:5005/audience/api/v1.0/amr?date=2020-06-20&channel=1&time_start=20:00&time_end=23:59"
*/



    nbviz.callAPI = function callAPI() {

    };

}(window.nbviz = window.nbviz || {}));