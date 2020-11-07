var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "10",
        "ok": "10",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "5196",
        "ok": "5196",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "6219",
        "ok": "6219",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "5567",
        "ok": "5567",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "347",
        "ok": "347",
        "ko": "-"
    },
    "percentiles1": {
        "total": "5366",
        "ok": "5366",
        "ko": "-"
    },
    "percentiles2": {
        "total": "5631",
        "ok": "5631",
        "ko": "-"
    },
    "percentiles3": {
        "total": "6213",
        "ok": "6213",
        "ko": "-"
    },
    "percentiles4": {
        "total": "6218",
        "ok": "6218",
        "ko": "-"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 0,
        "percentage": 0
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 0,
        "percentage": 0
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 10,
        "percentage": 100
    },
    "group4": {
        "name": "failed",
        "count": 0,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "0.833",
        "ok": "0.833",
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
        "total": "5",
        "ok": "5",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "5344",
        "ok": "5344",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "5367",
        "ok": "5367",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "5357",
        "ok": "5357",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "9",
        "ok": "9",
        "ko": "-"
    },
    "percentiles1": {
        "total": "5360",
        "ok": "5360",
        "ko": "-"
    },
    "percentiles2": {
        "total": "5365",
        "ok": "5365",
        "ko": "-"
    },
    "percentiles3": {
        "total": "5367",
        "ok": "5367",
        "ko": "-"
    },
    "percentiles4": {
        "total": "5367",
        "ok": "5367",
        "ko": "-"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 0,
        "percentage": 0
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 0,
        "percentage": 0
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 5,
        "percentage": 100
    },
    "group4": {
        "name": "failed",
        "count": 0,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "0.417",
        "ok": "0.417",
        "ko": "-"
    }
}
    },"req_get-b5eda": {
        type: "REQUEST",
        name: "get",
path: "get",
pathFormatted: "req_get-b5eda",
stats: {
    "name": "get",
    "numberOfRequests": {
        "total": "5",
        "ok": "5",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "5196",
        "ok": "5196",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "6219",
        "ok": "6219",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "5776",
        "ok": "5776",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "390",
        "ok": "390",
        "ko": "-"
    },
    "percentiles1": {
        "total": "5631",
        "ok": "5631",
        "ko": "-"
    },
    "percentiles2": {
        "total": "6206",
        "ok": "6206",
        "ko": "-"
    },
    "percentiles3": {
        "total": "6216",
        "ok": "6216",
        "ko": "-"
    },
    "percentiles4": {
        "total": "6218",
        "ok": "6218",
        "ko": "-"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 0,
        "percentage": 0
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 0,
        "percentage": 0
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 5,
        "percentage": 100
    },
    "group4": {
        "name": "failed",
        "count": 0,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "0.417",
        "ok": "0.417",
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
