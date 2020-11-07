var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "120000",
        "ok": "2340",
        "ko": "117660"
    },
    "minResponseTime": {
        "total": "399",
        "ok": "399",
        "ko": "10186"
    },
    "maxResponseTime": {
        "total": "60047",
        "ok": "38464",
        "ko": "60047"
    },
    "meanResponseTime": {
        "total": "39711",
        "ok": "23599",
        "ko": "40032"
    },
    "standardDeviation": {
        "total": "2552",
        "ok": "7482",
        "ko": "514"
    },
    "percentiles1": {
        "total": "40002",
        "ok": "20646",
        "ko": "40002"
    },
    "percentiles2": {
        "total": "40003",
        "ok": "30430",
        "ko": "40003"
    },
    "percentiles3": {
        "total": "40198",
        "ok": "30735",
        "ko": "40207"
    },
    "percentiles4": {
        "total": "40812",
        "ok": "31389",
        "ko": "40815"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 21,
        "percentage": 0
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 16,
        "percentage": 0
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 2303,
        "percentage": 2
    },
    "group4": {
        "name": "failed",
        "count": 117660,
        "percentage": 98
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "745.342",
        "ok": "14.534",
        "ko": "730.807"
    }
},
contents: {
"req_post-oauth-req-a0daa": {
        type: "REQUEST",
        name: "POST OAuth Req",
path: "POST OAuth Req",
pathFormatted: "req_post-oauth-req-a0daa",
stats: {
    "name": "POST OAuth Req",
    "numberOfRequests": {
        "total": "120000",
        "ok": "2340",
        "ko": "117660"
    },
    "minResponseTime": {
        "total": "399",
        "ok": "399",
        "ko": "10186"
    },
    "maxResponseTime": {
        "total": "60047",
        "ok": "38464",
        "ko": "60047"
    },
    "meanResponseTime": {
        "total": "39711",
        "ok": "23599",
        "ko": "40032"
    },
    "standardDeviation": {
        "total": "2552",
        "ok": "7482",
        "ko": "514"
    },
    "percentiles1": {
        "total": "40002",
        "ok": "20646",
        "ko": "40002"
    },
    "percentiles2": {
        "total": "40003",
        "ok": "30430",
        "ko": "40003"
    },
    "percentiles3": {
        "total": "40198",
        "ok": "30735",
        "ko": "40207"
    },
    "percentiles4": {
        "total": "40812",
        "ok": "31389",
        "ko": "40815"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 21,
        "percentage": 0
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 16,
        "percentage": 0
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 2303,
        "percentage": 2
    },
    "group4": {
        "name": "failed",
        "count": 117660,
        "percentage": 98
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "745.342",
        "ok": "14.534",
        "ko": "730.807"
    }
}
    }
}

}

function fillStats(stat){
    $("#numberOfRequests").append(stat.numberOfRequests.total);
    $("#numberOfRequestsOK").append(stat.numberOfRequests.ok);
    $("#numberOfRequestsKO").append(stat.numberOfRequests.ko);

    $("#minResponseTime").append(stat.minResponseTime.total);
    $("#minResponseTimeOK").append(stat.minResponseTime.ok);
    $("#minResponseTimeKO").append(stat.minResponseTime.ko);

    $("#maxResponseTime").append(stat.maxResponseTime.total);
    $("#maxResponseTimeOK").append(stat.maxResponseTime.ok);
    $("#maxResponseTimeKO").append(stat.maxResponseTime.ko);

    $("#meanResponseTime").append(stat.meanResponseTime.total);
    $("#meanResponseTimeOK").append(stat.meanResponseTime.ok);
    $("#meanResponseTimeKO").append(stat.meanResponseTime.ko);

    $("#standardDeviation").append(stat.standardDeviation.total);
    $("#standardDeviationOK").append(stat.standardDeviation.ok);
    $("#standardDeviationKO").append(stat.standardDeviation.ko);

    $("#percentiles1").append(stat.percentiles1.total);
    $("#percentiles1OK").append(stat.percentiles1.ok);
    $("#percentiles1KO").append(stat.percentiles1.ko);

    $("#percentiles2").append(stat.percentiles2.total);
    $("#percentiles2OK").append(stat.percentiles2.ok);
    $("#percentiles2KO").append(stat.percentiles2.ko);

    $("#percentiles3").append(stat.percentiles3.total);
    $("#percentiles3OK").append(stat.percentiles3.ok);
    $("#percentiles3KO").append(stat.percentiles3.ko);

    $("#percentiles4").append(stat.percentiles4.total);
    $("#percentiles4OK").append(stat.percentiles4.ok);
    $("#percentiles4KO").append(stat.percentiles4.ko);

    $("#meanNumberOfRequestsPerSecond").append(stat.meanNumberOfRequestsPerSecond.total);
    $("#meanNumberOfRequestsPerSecondOK").append(stat.meanNumberOfRequestsPerSecond.ok);
    $("#meanNumberOfRequestsPerSecondKO").append(stat.meanNumberOfRequestsPerSecond.ko);
}
