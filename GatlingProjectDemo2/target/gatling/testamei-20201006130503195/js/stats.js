var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "3000",
        "ok": "2774",
        "ko": "226"
    },
    "minResponseTime": {
        "total": "501",
        "ok": "501",
        "ko": "10079"
    },
    "maxResponseTime": {
        "total": "60001",
        "ok": "48516",
        "ko": "60001"
    },
    "meanResponseTime": {
        "total": "7023",
        "ok": "6612",
        "ko": "12076"
    },
    "standardDeviation": {
        "total": "5494",
        "ok": "5422",
        "ko": "3493"
    },
    "percentiles1": {
        "total": "5917",
        "ok": "5288",
        "ko": "11453"
    },
    "percentiles2": {
        "total": "9929",
        "ok": "8946",
        "ko": "12668"
    },
    "percentiles3": {
        "total": "15502",
        "ok": "15697",
        "ko": "14818"
    },
    "percentiles4": {
        "total": "27568",
        "ok": "28105",
        "ko": "15938"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 34,
        "percentage": 1
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 55,
        "percentage": 2
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 2685,
        "percentage": 90
    },
    "group4": {
        "name": "failed",
        "count": 226,
        "percentage": 8
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "39.474",
        "ok": "36.5",
        "ko": "2.974"
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
        "ok": "2774",
        "ko": "226"
    },
    "minResponseTime": {
        "total": "501",
        "ok": "501",
        "ko": "10079"
    },
    "maxResponseTime": {
        "total": "60001",
        "ok": "48516",
        "ko": "60001"
    },
    "meanResponseTime": {
        "total": "7023",
        "ok": "6612",
        "ko": "12076"
    },
    "standardDeviation": {
        "total": "5494",
        "ok": "5422",
        "ko": "3493"
    },
    "percentiles1": {
        "total": "5917",
        "ok": "5288",
        "ko": "11453"
    },
    "percentiles2": {
        "total": "9929",
        "ok": "8946",
        "ko": "12668"
    },
    "percentiles3": {
        "total": "15502",
        "ok": "15697",
        "ko": "14818"
    },
    "percentiles4": {
        "total": "27568",
        "ok": "28105",
        "ko": "15938"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 34,
        "percentage": 1
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 55,
        "percentage": 2
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 2685,
        "percentage": 90
    },
    "group4": {
        "name": "failed",
        "count": 226,
        "percentage": 8
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "39.474",
        "ok": "36.5",
        "ko": "2.974"
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
