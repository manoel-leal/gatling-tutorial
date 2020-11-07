var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "100",
        "ok": "100",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "127",
        "ok": "127",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "6244",
        "ok": "6244",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "2156",
        "ok": "2156",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "2013",
        "ok": "2013",
        "ko": "-"
    },
    "percentiles1": {
        "total": "1471",
        "ok": "1471",
        "ko": "-"
    },
    "percentiles2": {
        "total": "3952",
        "ok": "3952",
        "ko": "-"
    },
    "percentiles3": {
        "total": "5815",
        "ok": "5815",
        "ko": "-"
    },
    "percentiles4": {
        "total": "6080",
        "ok": "6080",
        "ko": "-"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 39,
        "percentage": 39
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 8,
        "percentage": 8
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 53,
        "percentage": 53
    },
    "group4": {
        "name": "failed",
        "count": 0,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "9.091",
        "ok": "9.091",
        "ko": "-"
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
        "total": "100",
        "ok": "100",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "127",
        "ok": "127",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "6244",
        "ok": "6244",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "2156",
        "ok": "2156",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "2013",
        "ok": "2013",
        "ko": "-"
    },
    "percentiles1": {
        "total": "1471",
        "ok": "1471",
        "ko": "-"
    },
    "percentiles2": {
        "total": "3952",
        "ok": "3952",
        "ko": "-"
    },
    "percentiles3": {
        "total": "5815",
        "ok": "5815",
        "ko": "-"
    },
    "percentiles4": {
        "total": "6080",
        "ok": "6080",
        "ko": "-"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 39,
        "percentage": 39
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 8,
        "percentage": 8
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 53,
        "percentage": 53
    },
    "group4": {
        "name": "failed",
        "count": 0,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "9.091",
        "ok": "9.091",
        "ko": "-"
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
