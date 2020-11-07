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
        "total": "5500",
        "ok": "5500",
        "ko": "14991"
    },
    "maxResponseTime": {
        "total": "15125",
        "ok": "5642",
        "ko": "15125"
    },
    "meanResponseTime": {
        "total": "10315",
        "ok": "5571",
        "ko": "15058"
    },
    "standardDeviation": {
        "total": "4744",
        "ok": "71",
        "ko": "67"
    },
    "percentiles1": {
        "total": "10317",
        "ok": "5571",
        "ko": "15058"
    },
    "percentiles2": {
        "total": "15025",
        "ok": "5607",
        "ko": "15092"
    },
    "percentiles3": {
        "total": "15105",
        "ok": "5635",
        "ko": "15118"
    },
    "percentiles4": {
        "total": "15121",
        "ok": "5641",
        "ko": "15124"
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
        "total": "0.154",
        "ok": "0.077",
        "ko": "0.077"
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
        "total": "5500",
        "ok": "5500",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "5642",
        "ok": "5642",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "5571",
        "ok": "5571",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "71",
        "ok": "71",
        "ko": "-"
    },
    "percentiles1": {
        "total": "5571",
        "ok": "5571",
        "ko": "-"
    },
    "percentiles2": {
        "total": "5607",
        "ok": "5607",
        "ko": "-"
    },
    "percentiles3": {
        "total": "5635",
        "ok": "5635",
        "ko": "-"
    },
    "percentiles4": {
        "total": "5641",
        "ok": "5641",
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
        "total": "0.077",
        "ok": "0.077",
        "ko": "-"
    }
}
    },"req_post-empresa-65210": {
        type: "REQUEST",
        name: "Post_Empresa",
path: "Post_Empresa",
pathFormatted: "req_post-empresa-65210",
stats: {
    "name": "Post_Empresa",
    "numberOfRequests": {
        "total": "2",
        "ok": "0",
        "ko": "2"
    },
    "minResponseTime": {
        "total": "14991",
        "ok": "-",
        "ko": "14991"
    },
    "maxResponseTime": {
        "total": "15125",
        "ok": "-",
        "ko": "15125"
    },
    "meanResponseTime": {
        "total": "15058",
        "ok": "-",
        "ko": "15058"
    },
    "standardDeviation": {
        "total": "67",
        "ok": "-",
        "ko": "67"
    },
    "percentiles1": {
        "total": "15058",
        "ok": "-",
        "ko": "15058"
    },
    "percentiles2": {
        "total": "15092",
        "ok": "-",
        "ko": "15092"
    },
    "percentiles3": {
        "total": "15118",
        "ok": "-",
        "ko": "15118"
    },
    "percentiles4": {
        "total": "15124",
        "ok": "-",
        "ko": "15124"
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
        "total": "0.077",
        "ok": "-",
        "ko": "0.077"
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
