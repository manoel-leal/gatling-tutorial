var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "3000",
        "ok": "2560",
        "ko": "440"
    },
    "minResponseTime": {
        "total": "782",
        "ok": "782",
        "ko": "10042"
    },
    "maxResponseTime": {
        "total": "60001",
        "ok": "59067",
        "ko": "60001"
    },
    "meanResponseTime": {
        "total": "6996",
        "ok": "6075",
        "ko": "12355"
    },
    "standardDeviation": {
        "total": "5355",
        "ok": "5155",
        "ko": "2694"
    },
    "percentiles1": {
        "total": "5743",
        "ok": "4821",
        "ko": "11966"
    },
    "percentiles2": {
        "total": "10093",
        "ok": "7584",
        "ko": "13353"
    },
    "percentiles3": {
        "total": "14671",
        "ok": "14300",
        "ko": "14763"
    },
    "percentiles4": {
        "total": "25602",
        "ok": "28802",
        "ko": "15123"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 1,
        "percentage": 0
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 55,
        "percentage": 2
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 2504,
        "percentage": 83
    },
    "group4": {
        "name": "failed",
        "count": 440,
        "percentage": 15
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "40",
        "ok": "34.133",
        "ko": "5.867"
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
        "total": "3000",
        "ok": "2560",
        "ko": "440"
    },
    "minResponseTime": {
        "total": "782",
        "ok": "782",
        "ko": "10042"
    },
    "maxResponseTime": {
        "total": "60001",
        "ok": "59067",
        "ko": "60001"
    },
    "meanResponseTime": {
        "total": "6996",
        "ok": "6075",
        "ko": "12355"
    },
    "standardDeviation": {
        "total": "5355",
        "ok": "5155",
        "ko": "2694"
    },
    "percentiles1": {
        "total": "5743",
        "ok": "4821",
        "ko": "11966"
    },
    "percentiles2": {
        "total": "10093",
        "ok": "7584",
        "ko": "13353"
    },
    "percentiles3": {
        "total": "14671",
        "ok": "14300",
        "ko": "14763"
    },
    "percentiles4": {
        "total": "25602",
        "ok": "28802",
        "ko": "15123"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 1,
        "percentage": 0
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 55,
        "percentage": 2
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 2504,
        "percentage": 83
    },
    "group4": {
        "name": "failed",
        "count": 440,
        "percentage": 15
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "40",
        "ok": "34.133",
        "ko": "5.867"
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
