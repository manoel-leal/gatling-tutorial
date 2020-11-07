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
        "total": "4788",
        "ok": "4788",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "7800",
        "ok": "7800",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "6428",
        "ok": "6428",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "1086",
        "ok": "1086",
        "ko": "-"
    },
    "percentiles1": {
        "total": "6588",
        "ok": "6588",
        "ko": "-"
    },
    "percentiles2": {
        "total": "7667",
        "ok": "7667",
        "ko": "-"
    },
    "percentiles3": {
        "total": "7767",
        "ok": "7767",
        "ko": "-"
    },
    "percentiles4": {
        "total": "7792",
        "ok": "7792",
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
        "count": 40,
        "percentage": 100
    },
    "group4": {
        "name": "failed",
        "count": 0,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "2.105",
        "ok": "2.105",
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
        "total": "6744",
        "ok": "6744",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "7800",
        "ok": "7800",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "7396",
        "ok": "7396",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "446",
        "ok": "446",
        "ko": "-"
    },
    "percentiles1": {
        "total": "7670",
        "ok": "7670",
        "ko": "-"
    },
    "percentiles2": {
        "total": "7755",
        "ok": "7755",
        "ko": "-"
    },
    "percentiles3": {
        "total": "7780",
        "ok": "7780",
        "ko": "-"
    },
    "percentiles4": {
        "total": "7796",
        "ok": "7796",
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
        "total": "1.053",
        "ok": "1.053",
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
        "total": "4788",
        "ok": "4788",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "6431",
        "ok": "6431",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "5460",
        "ok": "5460",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "534",
        "ok": "534",
        "ko": "-"
    },
    "percentiles1": {
        "total": "5422",
        "ok": "5422",
        "ko": "-"
    },
    "percentiles2": {
        "total": "5898",
        "ok": "5898",
        "ko": "-"
    },
    "percentiles3": {
        "total": "6353",
        "ok": "6353",
        "ko": "-"
    },
    "percentiles4": {
        "total": "6415",
        "ok": "6415",
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
        "total": "1.053",
        "ok": "1.053",
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
