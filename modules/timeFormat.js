var os = require('os');

function timeFormat(changeToTime) {
        var uptime = os.uptime();
        var hours = (uptime / 3600).toFixed(0);
        var minutes = (uptime % 3600 / 60).toFixed(0);
        var seconds = (uptime % 60).toFixed(0);
        
        console.log(hours + 'h ' + minutes + 'm ' + seconds + 's');
    }

exports.format = timeFormat;