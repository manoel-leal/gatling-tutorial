var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "4",
        "ok": "4",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "5494",
        "ok": "5494",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "5602",
        "ok": "5602",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "5546",
        "ok": "5546",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "47",
        "ok": "47",
        "ko": "-"
    },
    "percentiles1": {
        "total": "5544",
        "ok": "5544",
        "ko": "-"
    },
    "percentiles2": {
        "total": "5588",
        "ok": "5588",
        "ko": "-"
    },
    "percentiles3": {
        "total": "5599",
        "ok": "5599",
        "ko": "-"
    },
    "percentiles4": {
        "total": "5601",
        "ok": "5601",
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
        "count": 4,
        "percentage": 100
    },
    "group4": {
        "name": "failed",
        "count": 0,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "0.235",
        "ok": "0.235",
        "ko": "-"
    }
},
contents: {
"req_gerar-token-b1626": {
        type: "REQUEST",
        name: "Gerar Token",
path: "Gerar Token",
pathFormatted: "req_gerar-token-b1626",
stats: {
    "name": "Gerar Token",
    "numberOfRequests": {
        "total": "2",
        "ok": "2",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "5505",
        "ok": "5505",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "5602",
        "ok": "5602",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "5554",
        "ok": "5554",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "49",
        "ok": "49",
        "ko": "-"
    },
    "percentiles1": {
        "total": "5554",
        "ok": "5554",
        "ko": "-"
    },
    "percentiles2": {
        "total": "5578",
        "ok": "5578",
        "ko": "-"
    },
    "percentiles3": {
        "total": "5597",
        "ok": "5597",
        "ko": "-"
    },
    "percentiles4": {
        "total": "5601",
        "ok": "5601",
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
        "count": 2,
        "percentage": 100
    },
    "group4": {
        "name": "failed",
        "count": 0,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "0.118",
        "ok": "0.118",
        "ko": "-"
    }
}
    },"req_post-anuncio-1c8ee": {
        type: "REQUEST",
        name: "Post_Anuncio",
path: "Post_Anuncio",
pathFormatted: "req_post-anuncio-1c8ee",
stats: {
    "name": "Post_Anuncio",
    "numberOfRequests": {
        "total": "2",
        "ok": "2",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "5494",
        "ok": "5494",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "5583",
        "ok": "5583",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "5539",
        "ok": "5539",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "45",
        "ok": "45",
        "ko": "-"
    },
    "percentiles1": {
        "total": "5539",
        "ok": "5539",
        "ko": "-"
    },
    "percentiles2": {
        "total": "5561",
        "ok": "5561",
        "ko": "-"
    },
    "percentiles3": {
        "total": "5579",
        "ok": "5579",
        "ko": "-"
    },
    "percentiles4": {
        "total": "5582",
        "ok": "5582",
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
        "count": 2,
        "percentage": 100
    },
    "group4": {
        "name": "failed",
        "count": 0,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "0.118",
        "ok": "0.118",
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
