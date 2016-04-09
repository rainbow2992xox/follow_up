/**
 * Created by linmengbo on 16/3/31.
 */

var request = require ('request');

var Query = require ("./couchbase_query");


var sql_submit = 'select follow_up.* from follow_up where `type`="Record" and `isWrite`= true and `phoneNumber`="13636694202" and _sync is not missing  ';

Query (sql_submit, 'query', 'follow_up', "http://121.41.43.230:8091", function (result) {

    console.log(result[0]);
    console.log(result[0].AMD_id);
    var id = result[0].AMD_id
    var option_submit = {
        method: 'POST',
        url: "http://121.41.43.230:5002/records/amd_submit_record",
        body: {
            "results": {
                "infoList": [
                    {
                        "record_item_id": id,
                        "type_name": "入院记录"
                    }
                ]
            }
        }, json: true
    }


    request (option_submit, function (err, res, body) {
        //if (err) throw err;
        console.log (body);

    })


})



//
//var sql_unrecognize = 'select follow_up.* from follow_up where `type`="Record" and `isWrite`= true and `phoneNumber`="18221286097" ';
//
//
//Query (sql_unrecognize, 'query', 'follow_up', "http://121.41.43.230:8091", function (result) {
//
//
//    var id = result[0].AMD_id
//
//    var option_cannot_recognize = {
//        method: 'POST',
//        url: "http://121.41.43.230:5002/records/cannot_recognize",
//        body: {
//            "item_id": id
//        }, json: true
//
//
//    }
//
//
//    request (option_cannot_recognize, function (err, res, body) {
//        if (err) throw err;
//        console.log (body);
//    })
//
//
//})