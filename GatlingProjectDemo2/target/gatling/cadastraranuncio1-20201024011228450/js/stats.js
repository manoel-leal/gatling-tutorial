var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "40",
        "ok": "40",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "857",
        "ok": "857",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "11710",
        "ok": "11710",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "6464",
        "ok": "6464",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "2484",
        "ok": "2484",
        "ko": "-"
    },
    "percentiles1": {
        "total": "6508",
        "ok": "6508",
        "ko": "-"
    },
    "percentiles2": {
        "total": "7962",
        "ok": "7962",
        "ko": "-"
    },
    "percentiles3": {
        "total": "11687",
        "ok": "11687",
        "ko": "-"
    },
    "percentiles4": {
        "total": "11708",
        "ok": "11708",
        "ko": "-"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 0,
        "percentage": 0
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 1,
        "percentage": 3
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 39,
        "percentage": 98
    },
    "group4": {
        "name": "failed",
        "count": 0,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "2.857",
        "ok": "2.857",
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
        "total": "20",
        "ok": "20",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "6471",
        "ok": "6471",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "11710",
        "ok": "11710",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "8086",
        "ok": "8086",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "1925",
        "ok": "1925",
        "ko": "-"
    },
    "percentiles1": {
        "total": "7964",
        "ok": "7964",
        "ko": "-"
    },
    "percentiles2": {
        "total": "8093",
        "ok": "8093",
        "ko": "-"
    },
    "percentiles3": {
        "total": "11704",
        "ok": "11704",
        "ko": "-"
    },
    "percentiles4": {
        "total": "11709",
        "ok": "11709",
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
        "count": 20,
        "percentage": 100
    },
    "group4": {
        "name": "failed",
        "count": 0,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "1.429",
        "ok": "1.429",
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
        "total": "20",
        "ok": "20",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "857",
        "ok": "857",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "6702",
        "ok": "6702",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "4842",
        "ok": "4842",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "1836",
        "ok": "1836",
        "ko": "-"
    },
    "percentiles1": {
        "total": "5384",
        "ok": "5384",
        "ko": "-"
    },
    "percentiles2": {
        "total": "5999",
        "ok": "5999",
        "ko": "-"
    },
    "percentiles3": {
        "total": "6702",
        "ok": "6702",
        "ko": "-"
    },
    "percentiles4": {
        "total": "6702",
        "ok": "6702",
        "ko": "-"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 0,
        "percentage": 0
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 1,
        "percentage": 5
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 19,
        "percentage": 95
    },
    "group4": {
        "name": "failed",
        "count": 0,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "1.429",
        "ok": "1.429",
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
