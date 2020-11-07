var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "12000",
        "ok": "1167",
        "ko": "10833"
    },
    "minResponseTime": {
        "total": "1835",
        "ok": "1835",
        "ko": "10046"
    },
    "maxResponseTime": {
        "total": "65757",
        "ok": "64519",
        "ko": "65757"
    },
    "meanResponseTime": {
        "total": "19850",
        "ok": "27652",
        "ko": "19010"
    },
    "standardDeviation": {
        "total": "11303",
        "ok": "14975",
        "ko": "10493"
    },
    "percentiles1": {
        "total": "15266",
        "ok": "26337",
        "ko": "14882"
    },
    "percentiles2": {
        "total": "22841",
        "ok": "39136",
        "ko": "21738"
    },
    "percentiles3": {
        "total": "44428",
        "ok": "54090",
        "ko": "40118"
    },
    "percentiles4": {
        "total": "60001",
        "ok": "59413",
        "ko": "60001"
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
        "count": 1167,
        "percentage": 10
    },
    "group4": {
        "name": "failed",
        "count": 10833,
        "percentage": 90
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "100.84",
        "ok": "9.807",
        "ko": "91.034"
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
        "total": "12000",
        "ok": "1167",
        "ko": "10833"
    },
    "minResponseTime": {
        "total": "1835",
        "ok": "1835",
        "ko": "10046"
    },
    "maxResponseTime": {
        "total": "65757",
        "ok": "64519",
        "ko": "65757"
    },
    "meanResponseTime": {
        "total": "19850",
        "ok": "27652",
        "ko": "19010"
    },
    "standardDeviation": {
        "total": "11303",
        "ok": "14975",
        "ko": "10493"
    },
    "percentiles1": {
        "total": "15266",
        "ok": "26337",
        "ko": "14882"
    },
    "percentiles2": {
        "total": "22841",
        "ok": "39136",
        "ko": "21738"
    },
    "percentiles3": {
        "total": "44427",
        "ok": "54090",
        "ko": "40118"
    },
    "percentiles4": {
        "total": "60001",
        "ok": "59413",
        "ko": "60001"
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
        "count": 1167,
        "percentage": 10
    },
    "group4": {
        "name": "failed",
        "count": 10833,
        "percentage": 90
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "100.84",
        "ok": "9.807",
        "ko": "91.034"
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
