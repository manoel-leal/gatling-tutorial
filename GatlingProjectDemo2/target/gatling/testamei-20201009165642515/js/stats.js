var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "3000",
        "ok": "2641",
        "ko": "359"
    },
    "minResponseTime": {
        "total": "223",
        "ok": "223",
        "ko": "10065"
    },
    "maxResponseTime": {
        "total": "60001",
        "ok": "51396",
        "ko": "60001"
    },
    "meanResponseTime": {
        "total": "7678",
        "ok": "7095",
        "ko": "11961"
    },
    "standardDeviation": {
        "total": "5996",
        "ok": "6070",
        "ko": "2921"
    },
    "percentiles1": {
        "total": "6559",
        "ok": "5646",
        "ko": "11610"
    },
    "percentiles2": {
        "total": "10931",
        "ok": "9491",
        "ko": "12316"
    },
    "percentiles3": {
        "total": "17363",
        "ok": "17886",
        "ko": "14115"
    },
    "percentiles4": {
        "total": "29795",
        "ok": "30731",
        "ko": "18950"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 47,
        "percentage": 2
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 108,
        "percentage": 4
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 2486,
        "percentage": 83
    },
    "group4": {
        "name": "failed",
        "count": 359,
        "percentage": 12
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "33.708",
        "ok": "29.674",
        "ko": "4.034"
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
        "total": "3000",
        "ok": "2641",
        "ko": "359"
    },
    "minResponseTime": {
        "total": "223",
        "ok": "223",
        "ko": "10065"
    },
    "maxResponseTime": {
        "total": "60001",
        "ok": "51396",
        "ko": "60001"
    },
    "meanResponseTime": {
        "total": "7678",
        "ok": "7095",
        "ko": "11961"
    },
    "standardDeviation": {
        "total": "5996",
        "ok": "6070",
        "ko": "2921"
    },
    "percentiles1": {
        "total": "6559",
        "ok": "5646",
        "ko": "11610"
    },
    "percentiles2": {
        "total": "10931",
        "ok": "9491",
        "ko": "12316"
    },
    "percentiles3": {
        "total": "17363",
        "ok": "17886",
        "ko": "14115"
    },
    "percentiles4": {
        "total": "29795",
        "ok": "30731",
        "ko": "18950"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 47,
        "percentage": 2
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 108,
        "percentage": 4
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 2486,
        "percentage": 83
    },
    "group4": {
        "name": "failed",
        "count": 359,
        "percentage": 12
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "33.708",
        "ok": "29.674",
        "ko": "4.034"
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
