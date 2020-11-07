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
        "total": "5299",
        "ok": "5299",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "6377",
        "ok": "6377",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "5631",
        "ok": "5631",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "369",
        "ok": "369",
        "ko": "-"
    },
    "percentiles1": {
        "total": "5504",
        "ok": "5504",
        "ko": "-"
    },
    "percentiles2": {
        "total": "5832",
        "ok": "5832",
        "ko": "-"
    },
    "percentiles3": {
        "total": "6255",
        "ok": "6255",
        "ko": "-"
    },
    "percentiles4": {
        "total": "6353",
        "ok": "6353",
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
        "total": "5299",
        "ok": "5299",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "5326",
        "ok": "5326",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "5311",
        "ok": "5311",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "11",
        "ok": "11",
        "ko": "-"
    },
    "percentiles1": {
        "total": "5311",
        "ok": "5311",
        "ko": "-"
    },
    "percentiles2": {
        "total": "5320",
        "ok": "5320",
        "ko": "-"
    },
    "percentiles3": {
        "total": "5325",
        "ok": "5325",
        "ko": "-"
    },
    "percentiles4": {
        "total": "5326",
        "ok": "5326",
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
    },"req_get-gerentes-po-1de4f": {
        type: "REQUEST",
        name: "get gerentes por unidade",
path: "get gerentes por unidade",
pathFormatted: "req_get-gerentes-po-1de4f",
stats: {
    "name": "get gerentes por unidade",
    "numberOfRequests": {
        "total": "5",
        "ok": "5",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "5681",
        "ok": "5681",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "6377",
        "ok": "6377",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "5950",
        "ok": "5950",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "261",
        "ok": "261",
        "ko": "-"
    },
    "percentiles1": {
        "total": "5871",
        "ok": "5871",
        "ko": "-"
    },
    "percentiles2": {
        "total": "6105",
        "ok": "6105",
        "ko": "-"
    },
    "percentiles3": {
        "total": "6323",
        "ok": "6323",
        "ko": "-"
    },
    "percentiles4": {
        "total": "6366",
        "ok": "6366",
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
