process.stdin.setEncoding('utf-8');
var OSinfo = require('../modules/OSinfo');
var timeFormat = require('../modules/timeFormat');

process.stdin.on('readable', function() {
    var input = process.stdin.read();

    if (input !== null) {
        var instruction = input.toString().trim();
        switch (instruction) {

            case '/exit':
                process.stdout.write('Quitting app!\n');
                process.exit();
                break;

            case '/ver':
                console.log(process.versions);
                break;

            case '/tmp':
                var tmpdir = os.tmpdir();
                console.log(tmpdir);
                break;

            case '/getOSinfo':
                OSinfo.print();
                timeFormat.format();
                break;
                
            case '/time':                       
                timeFormat.format(1000);
                break;
            
            default:
                process.stderr.write('Wrong instruction!\n');
        };
    }
});