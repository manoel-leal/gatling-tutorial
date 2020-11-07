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
        "total": "5041",
        "ok": "5528",
        "ko": "5041"
    },
    "maxResponseTime": {
        "total": "5672",
        "ok": "5672",
        "ko": "5155"
    },
    "meanResponseTime": {
        "total": "5349",
        "ok": "5600",
        "ko": "5098"
    },
    "standardDeviation": {
        "total": "259",
        "ok": "72",
        "ko": "57"
    },
    "percentiles1": {
        "total": "5342",
        "ok": "5600",
        "ko": "5098"
    },
    "percentiles2": {
        "total": "5564",
        "ok": "5636",
        "ko": "5127"
    },
    "percentiles3": {
        "total": "5650",
        "ok": "5665",
        "ko": "5149"
    },
    "percentiles4": {
        "total": "5668",
        "ok": "5671",
        "ko": "5154"
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
        "total": "5528",
        "ok": "5528",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "5672",
        "ok": "5672",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "5600",
        "ok": "5600",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "72",
        "ok": "72",
        "ko": "-"
    },
    "percentiles1": {
        "total": "5600",
        "ok": "5600",
        "ko": "-"
    },
    "percentiles2": {
        "total": "5636",
        "ok": "5636",
        "ko": "-"
    },
    "percentiles3": {
        "total": "5665",
        "ok": "5665",
        "ko": "-"
    },
    "percentiles4": {
        "total": "5671",
        "ok": "5671",
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
        "total": "5041",
        "ok": "-",
        "ko": "5041"
    },
    "maxResponseTime": {
        "total": "5155",
        "ok": "-",
        "ko": "5155"
    },
    "meanResponseTime": {
        "total": "5098",
        "ok": "-",
        "ko": "5098"
    },
    "standardDeviation": {
        "total": "57",
        "ok": "-",
        "ko": "57"
    },
    "percentiles1": {
        "total": "5098",
        "ok": "-",
        "ko": "5098"
    },
    "percentiles2": {
        "total": "5127",
        "ok": "-",
        "ko": "5127"
    },
    "percentiles3": {
        "total": "5149",
        "ok": "-",
        "ko": "5149"
    },
    "percentiles4": {
        "total": "5154",
        "ok": "-",
        "ko": "5154"
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
