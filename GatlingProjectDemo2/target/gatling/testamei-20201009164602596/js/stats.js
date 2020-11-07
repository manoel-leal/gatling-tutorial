var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "3000",
        "ok": "2636",
        "ko": "364"
    },
    "minResponseTime": {
        "total": "439",
        "ok": "439",
        "ko": "10144"
    },
    "maxResponseTime": {
        "total": "60001",
        "ok": "54691",
        "ko": "60001"
    },
    "meanResponseTime": {
        "total": "9004",
        "ok": "8506",
        "ko": "12612"
    },
    "standardDeviation": {
        "total": "6606",
        "ok": "6685",
        "ko": "4605"
    },
    "percentiles1": {
        "total": "7970",
        "ok": "7010",
        "ko": "11758"
    },
    "percentiles2": {
        "total": "11713",
        "ok": "10939",
        "ko": "13120"
    },
    "percentiles3": {
        "total": "19630",
        "ok": "20491",
        "ko": "15483"
    },
    "percentiles4": {
        "total": "36008",
        "ok": "36431",
        "ko": "17073"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 30,
        "percentage": 1
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 47,
        "percentage": 2
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 2559,
        "percentage": 85
    },
    "group4": {
        "name": "failed",
        "count": 364,
        "percentage": 12
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "35.294",
        "ok": "31.012",
        "ko": "4.282"
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
        "ok": "2636",
        "ko": "364"
    },
    "minResponseTime": {
        "total": "439",
        "ok": "439",
        "ko": "10144"
    },
    "maxResponseTime": {
        "total": "60001",
        "ok": "54691",
        "ko": "60001"
    },
    "meanResponseTime": {
        "total": "9004",
        "ok": "8506",
        "ko": "12612"
    },
    "standardDeviation": {
        "total": "6606",
        "ok": "6685",
        "ko": "4605"
    },
    "percentiles1": {
        "total": "7970",
        "ok": "7010",
        "ko": "11758"
    },
    "percentiles2": {
        "total": "11713",
        "ok": "10939",
        "ko": "13120"
    },
    "percentiles3": {
        "total": "19630",
        "ok": "20491",
        "ko": "15483"
    },
    "percentiles4": {
        "total": "36008",
        "ok": "36431",
        "ko": "17073"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 30,
        "percentage": 1
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 47,
        "percentage": 2
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 2559,
        "percentage": 85
    },
    "group4": {
        "name": "failed",
        "count": 364,
        "percentage": 12
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "35.294",
        "ok": "31.012",
        "ko": "4.282"
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
