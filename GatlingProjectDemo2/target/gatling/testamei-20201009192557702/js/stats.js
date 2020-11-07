var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "3000",
        "ok": "2512",
        "ko": "488"
    },
    "minResponseTime": {
        "total": "875",
        "ok": "875",
        "ko": "10039"
    },
    "maxResponseTime": {
        "total": "64527",
        "ok": "56925",
        "ko": "64527"
    },
    "meanResponseTime": {
        "total": "9050",
        "ok": "8371",
        "ko": "12546"
    },
    "standardDeviation": {
        "total": "6340",
        "ok": "6301",
        "ko": "5303"
    },
    "percentiles1": {
        "total": "8146",
        "ok": "6847",
        "ko": "11612"
    },
    "percentiles2": {
        "total": "11542",
        "ok": "10297",
        "ko": "12711"
    },
    "percentiles3": {
        "total": "18885",
        "ok": "19617",
        "ko": "15570"
    },
    "percentiles4": {
        "total": "34764",
        "ok": "34740",
        "ko": "27698"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 0,
        "percentage": 0
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 13,
        "percentage": 0
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 2499,
        "percentage": 83
    },
    "group4": {
        "name": "failed",
        "count": 488,
        "percentage": 16
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "38.462",
        "ok": "32.205",
        "ko": "6.256"
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
        "ok": "2512",
        "ko": "488"
    },
    "minResponseTime": {
        "total": "875",
        "ok": "875",
        "ko": "10039"
    },
    "maxResponseTime": {
        "total": "64527",
        "ok": "56925",
        "ko": "64527"
    },
    "meanResponseTime": {
        "total": "9050",
        "ok": "8371",
        "ko": "12546"
    },
    "standardDeviation": {
        "total": "6340",
        "ok": "6301",
        "ko": "5303"
    },
    "percentiles1": {
        "total": "8146",
        "ok": "6847",
        "ko": "11612"
    },
    "percentiles2": {
        "total": "11542",
        "ok": "10297",
        "ko": "12711"
    },
    "percentiles3": {
        "total": "18885",
        "ok": "19617",
        "ko": "15570"
    },
    "percentiles4": {
        "total": "34764",
        "ok": "34740",
        "ko": "27698"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 0,
        "percentage": 0
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 13,
        "percentage": 0
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 2499,
        "percentage": 83
    },
    "group4": {
        "name": "failed",
        "count": 488,
        "percentage": 16
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "38.462",
        "ok": "32.205",
        "ko": "6.256"
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
