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
        "total": "5587",
        "ok": "5587",
        "ko": "5705"
    },
    "maxResponseTime": {
        "total": "5839",
        "ok": "5745",
        "ko": "5839"
    },
    "meanResponseTime": {
        "total": "5719",
        "ok": "5666",
        "ko": "5772"
    },
    "standardDeviation": {
        "total": "90",
        "ok": "79",
        "ko": "67"
    },
    "percentiles1": {
        "total": "5725",
        "ok": "5666",
        "ko": "5772"
    },
    "percentiles2": {
        "total": "5769",
        "ok": "5706",
        "ko": "5806"
    },
    "percentiles3": {
        "total": "5825",
        "ok": "5737",
        "ko": "5832"
    },
    "percentiles4": {
        "total": "5836",
        "ok": "5743",
        "ko": "5838"
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
        "total": "0.235",
        "ok": "0.118",
        "ko": "0.118"
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
        "total": "5587",
        "ok": "5587",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "5745",
        "ok": "5745",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "5666",
        "ok": "5666",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "79",
        "ok": "79",
        "ko": "-"
    },
    "percentiles1": {
        "total": "5666",
        "ok": "5666",
        "ko": "-"
    },
    "percentiles2": {
        "total": "5706",
        "ok": "5706",
        "ko": "-"
    },
    "percentiles3": {
        "total": "5737",
        "ok": "5737",
        "ko": "-"
    },
    "percentiles4": {
        "total": "5743",
        "ok": "5743",
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
        "ok": "0",
        "ko": "2"
    },
    "minResponseTime": {
        "total": "5705",
        "ok": "-",
        "ko": "5705"
    },
    "maxResponseTime": {
        "total": "5839",
        "ok": "-",
        "ko": "5839"
    },
    "meanResponseTime": {
        "total": "5772",
        "ok": "-",
        "ko": "5772"
    },
    "standardDeviation": {
        "total": "67",
        "ok": "-",
        "ko": "67"
    },
    "percentiles1": {
        "total": "5772",
        "ok": "-",
        "ko": "5772"
    },
    "percentiles2": {
        "total": "5806",
        "ok": "-",
        "ko": "5806"
    },
    "percentiles3": {
        "total": "5832",
        "ok": "-",
        "ko": "5832"
    },
    "percentiles4": {
        "total": "5838",
        "ok": "-",
        "ko": "5838"
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
        "total": "0.118",
        "ok": "-",
        "ko": "0.118"
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
