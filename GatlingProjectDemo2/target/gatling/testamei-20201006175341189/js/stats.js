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
        "total": "136",
        "ok": "136",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "6977",
        "ok": "6977",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "2330",
        "ok": "2330",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "2194",
        "ok": "2194",
        "ko": "-"
    },
    "percentiles1": {
        "total": "1799",
        "ok": "1799",
        "ko": "-"
    },
    "percentiles2": {
        "total": "4153",
        "ok": "4153",
        "ko": "-"
    },
    "percentiles3": {
        "total": "6381",
        "ok": "6381",
        "ko": "-"
    },
    "percentiles4": {
        "total": "6879",
        "ok": "6879",
        "ko": "-"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 40,
        "percentage": 40
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 6,
        "percentage": 6
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 54,
        "percentage": 54
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
        "total": "136",
        "ok": "136",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "6977",
        "ok": "6977",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "2330",
        "ok": "2330",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "2194",
        "ok": "2194",
        "ko": "-"
    },
    "percentiles1": {
        "total": "1799",
        "ok": "1799",
        "ko": "-"
    },
    "percentiles2": {
        "total": "4153",
        "ok": "4153",
        "ko": "-"
    },
    "percentiles3": {
        "total": "6381",
        "ok": "6381",
        "ko": "-"
    },
    "percentiles4": {
        "total": "6879",
        "ok": "6879",
        "ko": "-"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 40,
        "percentage": 40
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 6,
        "percentage": 6
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 54,
        "percentage": 54
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
