var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "200",
        "ok": "100",
        "ko": "100"
    },
    "minResponseTime": {
        "total": "35",
        "ok": "127",
        "ko": "35"
    },
    "maxResponseTime": {
        "total": "6214",
        "ok": "6214",
        "ko": "219"
    },
    "meanResponseTime": {
        "total": "1063",
        "ok": "2015",
        "ko": "111"
    },
    "standardDeviation": {
        "total": "1709",
        "ok": "2006",
        "ko": "62"
    },
    "percentiles1": {
        "total": "162",
        "ok": "1226",
        "ko": "121"
    },
    "percentiles2": {
        "total": "1201",
        "ok": "3693",
        "ko": "170"
    },
    "percentiles3": {
        "total": "5182",
        "ok": "5685",
        "ko": "202"
    },
    "percentiles4": {
        "total": "5968",
        "ok": "6020",
        "ko": "219"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 44,
        "percentage": 22
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 6,
        "percentage": 3
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 50,
        "percentage": 25
    },
    "group4": {
        "name": "failed",
        "count": 100,
        "percentage": 50
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "18.182",
        "ok": "9.091",
        "ko": "9.091"
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
        "total": "6214",
        "ok": "6214",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "2015",
        "ok": "2015",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "2006",
        "ok": "2006",
        "ko": "-"
    },
    "percentiles1": {
        "total": "1226",
        "ok": "1226",
        "ko": "-"
    },
    "percentiles2": {
        "total": "3693",
        "ok": "3693",
        "ko": "-"
    },
    "percentiles3": {
        "total": "5685",
        "ok": "5685",
        "ko": "-"
    },
    "percentiles4": {
        "total": "6020",
        "ok": "6020",
        "ko": "-"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 44,
        "percentage": 44
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 6,
        "percentage": 6
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 50,
        "percentage": 50
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
    },"req_post-oauth-req--d0b9d": {
        type: "REQUEST",
        name: "POST OAuth Req Redirect 1",
path: "POST OAuth Req Redirect 1",
pathFormatted: "req_post-oauth-req--d0b9d",
stats: {
    "name": "POST OAuth Req Redirect 1",
    "numberOfRequests": {
        "total": "100",
        "ok": "0",
        "ko": "100"
    },
    "minResponseTime": {
        "total": "35",
        "ok": "-",
        "ko": "35"
    },
    "maxResponseTime": {
        "total": "219",
        "ok": "-",
        "ko": "219"
    },
    "meanResponseTime": {
        "total": "111",
        "ok": "-",
        "ko": "111"
    },
    "standardDeviation": {
        "total": "62",
        "ok": "-",
        "ko": "62"
    },
    "percentiles1": {
        "total": "121",
        "ok": "-",
        "ko": "121"
    },
    "percentiles2": {
        "total": "170",
        "ok": "-",
        "ko": "170"
    },
    "percentiles3": {
        "total": "202",
        "ok": "-",
        "ko": "202"
    },
    "percentiles4": {
        "total": "219",
        "ok": "-",
        "ko": "219"
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
        "count": 0,
        "percentage": 0
    },
    "group4": {
        "name": "failed",
        "count": 100,
        "percentage": 100
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "9.091",
        "ok": "-",
        "ko": "9.091"
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
