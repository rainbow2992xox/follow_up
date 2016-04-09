/**
 * Created by linmengbo on 16/3/31.
 */

var exec = require ('child_process').exec;

var clean = 'curl -X POST -u admin:doctorplus123456  http://121.41.43.230:8091/pools/default/buckets/follow_up/controller/doFlush';

var cmdStr = 'open ./reset_sync_followup.app';


exec (clean, function (err, stdout, stderr) {
    if (err) throw err;

    exec (cmdStr, function (err, stdout, stderr) {
        if (err) throw err;

        console.log ("初始化成功...")


    })

})
