var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "6000",
        "ok": "5799",
        "ko": "201"
    },
    "minResponseTime": {
        "total": "307",
        "ok": "307",
        "ko": "40000"
    },
    "maxResponseTime": {
        "total": "40031",
        "ok": "38361",
        "ko": "40031"
    },
    "meanResponseTime": {
        "total": "9566",
        "ok": "8511",
        "ko": "40002"
    },
    "standardDeviation": {
        "total": "11392",
        "ok": "10053",
        "ko": "4"
    },
    "percentiles1": {
        "total": "3381",
        "ok": "3373",
        "ko": "40002"
    },
    "percentiles2": {
        "total": "17450",
        "ok": "13382",
        "ko": "40002"
    },
    "percentiles3": {
        "total": "33363",
        "ok": "30341",
        "ko": "40003"
    },
    "percentiles4": {
        "total": "40002",
        "ok": "37391",
        "ko": "40030"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 1964,
        "percentage": 33
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 32,
        "percentage": 1
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 3803,
        "percentage": 63
    },
    "group4": {
        "name": "failed",
        "count": 201,
        "percentage": 3
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "74.074",
        "ok": "71.593",
        "ko": "2.481"
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
        "total": "6000",
        "ok": "5799",
        "ko": "201"
    },
    "minResponseTime": {
        "total": "307",
        "ok": "307",
        "ko": "40000"
    },
    "maxResponseTime": {
        "total": "40031",
        "ok": "38361",
        "ko": "40031"
    },
    "meanResponseTime": {
        "total": "9566",
        "ok": "8511",
        "ko": "40002"
    },
    "standardDeviation": {
        "total": "11392",
        "ok": "10053",
        "ko": "4"
    },
    "percentiles1": {
        "total": "3381",
        "ok": "3373",
        "ko": "40002"
    },
    "percentiles2": {
        "total": "17450",
        "ok": "13382",
        "ko": "40002"
    },
    "percentiles3": {
        "total": "33363",
        "ok": "30341",
        "ko": "40003"
    },
    "percentiles4": {
        "total": "40002",
        "ok": "37391",
        "ko": "40030"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 1964,
        "percentage": 33
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 32,
        "percentage": 1
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 3803,
        "percentage": 63
    },
    "group4": {
        "name": "failed",
        "count": 201,
        "percentage": 3
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "74.074",
        "ok": "71.593",
        "ko": "2.481"
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
