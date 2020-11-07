var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "4",
        "ok": "2",
        "ko": "2"
    },
    "minResponseTime": {
        "total": "5107",
        "ok": "5605",
        "ko": "5107"
    },
    "maxResponseTime": {
        "total": "5697",
        "ok": "5697",
        "ko": "5173"
    },
    "meanResponseTime": {
        "total": "5396",
        "ok": "5651",
        "ko": "5140"
    },
    "standardDeviation": {
        "total": "259",
        "ok": "46",
        "ko": "33"
    },
    "percentiles1": {
        "total": "5389",
        "ok": "5651",
        "ko": "5140"
    },
    "percentiles2": {
        "total": "5628",
        "ok": "5674",
        "ko": "5157"
    },
    "percentiles3": {
        "total": "5683",
        "ok": "5692",
        "ko": "5170"
    },
    "percentiles4": {
        "total": "5694",
        "ok": "5696",
        "ko": "5172"
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
        "percentage": 50
    },
    "group4": {
        "name": "failed",
        "count": 2,
        "percentage": 50
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "0.25",
        "ok": "0.125",
        "ko": "0.125"
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
        "total": "5605",
        "ok": "5605",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "5697",
        "ok": "5697",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "5651",
        "ok": "5651",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "46",
        "ok": "46",
        "ko": "-"
    },
    "percentiles1": {
        "total": "5651",
        "ok": "5651",
        "ko": "-"
    },
    "percentiles2": {
        "total": "5674",
        "ok": "5674",
        "ko": "-"
    },
    "percentiles3": {
        "total": "5692",
        "ok": "5692",
        "ko": "-"
    },
    "percentiles4": {
        "total": "5696",
        "ok": "5696",
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
        "total": "0.125",
        "ok": "0.125",
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
        "ok": "0",
        "ko": "2"
    },
    "minResponseTime": {
        "total": "5107",
        "ok": "-",
        "ko": "5107"
    },
    "maxResponseTime": {
        "total": "5173",
        "ok": "-",
        "ko": "5173"
    },
    "meanResponseTime": {
        "total": "5140",
        "ok": "-",
        "ko": "5140"
    },
    "standardDeviation": {
        "total": "33",
        "ok": "-",
        "ko": "33"
    },
    "percentiles1": {
        "total": "5140",
        "ok": "-",
        "ko": "5140"
    },
    "percentiles2": {
        "total": "5157",
        "ok": "-",
        "ko": "5157"
    },
    "percentiles3": {
        "total": "5170",
        "ok": "-",
        "ko": "5170"
    },
    "percentiles4": {
        "total": "5172",
        "ok": "-",
        "ko": "5172"
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
        "count": 2,
        "percentage": 100
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "0.125",
        "ok": "-",
        "ko": "0.125"
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
