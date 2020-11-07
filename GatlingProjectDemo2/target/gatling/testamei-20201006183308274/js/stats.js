var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "100",
        "ok": "50",
        "ko": "50"
    },
    "minResponseTime": {
        "total": "111",
        "ok": "142",
        "ko": "111"
    },
    "maxResponseTime": {
        "total": "5896",
        "ok": "5896",
        "ko": "5839"
    },
    "meanResponseTime": {
        "total": "1870",
        "ok": "1891",
        "ko": "1848"
    },
    "standardDeviation": {
        "total": "1907",
        "ok": "1905",
        "ko": "1909"
    },
    "percentiles1": {
        "total": "1202",
        "ok": "1200",
        "ko": "1219"
    },
    "percentiles2": {
        "total": "3521",
        "ok": "3434",
        "ko": "3544"
    },
    "percentiles3": {
        "total": "5446",
        "ok": "5433",
        "ko": "5277"
    },
    "percentiles4": {
        "total": "5840",
        "ok": "5814",
        "ko": "5653"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 22,
        "percentage": 22
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 3,
        "percentage": 3
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 25,
        "percentage": 25
    },
    "group4": {
        "name": "failed",
        "count": 50,
        "percentage": 50
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "9.091",
        "ok": "4.545",
        "ko": "4.545"
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
        "ok": "50",
        "ko": "50"
    },
    "minResponseTime": {
        "total": "111",
        "ok": "142",
        "ko": "111"
    },
    "maxResponseTime": {
        "total": "5896",
        "ok": "5896",
        "ko": "5839"
    },
    "meanResponseTime": {
        "total": "1870",
        "ok": "1891",
        "ko": "1848"
    },
    "standardDeviation": {
        "total": "1907",
        "ok": "1905",
        "ko": "1909"
    },
    "percentiles1": {
        "total": "1202",
        "ok": "1200",
        "ko": "1219"
    },
    "percentiles2": {
        "total": "3521",
        "ok": "3434",
        "ko": "3544"
    },
    "percentiles3": {
        "total": "5446",
        "ok": "5433",
        "ko": "5277"
    },
    "percentiles4": {
        "total": "5840",
        "ok": "5814",
        "ko": "5653"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 22,
        "percentage": 22
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 3,
        "percentage": 3
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 25,
        "percentage": 25
    },
    "group4": {
        "name": "failed",
        "count": 50,
        "percentage": 50
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "9.091",
        "ok": "4.545",
        "ko": "4.545"
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
