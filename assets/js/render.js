const serialport = require('serialport')
const Readline = serialport.parsers.Readline;
var $ = require("jquery");


// var list = ''
// list += '<li class="list-group-header"> <input class="form-control" type="text" placeholder="Search for someone"> </li>'
// serialport.list((err, ports) => {
//     // console.log('ports', ports);
//     if (err) {
//         document.getElementById("hardware-list").innerHTML = list;
//     }

//     if (ports.length === 0) {
//         // document.getElementById("hardware-list").innerHTML = list;
//         list += '<li  class="list-group-item"> <div class="media-body"> <strong> Serial Port Found 0</strong> </div> </li>'
//     } else {
//         for (i = 0; i < ports.length; i++) {
//             console.log(ports[i])
//             porttext = ''
//             porttext += ports[i].comName
//             list += '<li class="list-group-item" id="'+ porttext +'" onclick="portlisner(\'' + porttext + '\'); " ><img class="img-circle media-object pull-left" src="assets/img/connect.png" width="32" height="32"> <div class="media-body"><strong>' + ports[i].manufacturer + '</strong><p>' + ports[i].comName + '</p></div> </li>';
//         }
//         document.getElementById("hardware-list").innerHTML = list;
//     }
//     $('#sw-led').hide();
// })

function portlisner(path) {
    // $('#sw-led').show();
    // detail= ''
    // detail += '<span>ComName : </span>'
    // detail += '<span>'
    // detail += path
    // detail += '</span>'
    
    document.getElementById("console-detail").innerHTML = detail;
    const port = new serialport('/dev/tty.usbmodem141301', {
        baudRate: 9600,
        autoOpen: true
    })

    

    const parser = port.pipe(new Readline({ delimiter: '\n' }));

    parser.on('data', function (data) {
        console.log('Data:', data.toString('utf8'))
    })

    port.write('s', function (err) {
        if (err) {
            return console.log('Error on write: ', err.message)
        }
        console.log('message written')
    })



    $('#lamp1').change(function () {
        console.log("Change")
        if ($('#lamp1').is(':checked')) {
            console.log("checked")
            port.write('a', function (err) { // หลอด 1 ติด
                if (err) {
                    return console.log('Error on write: ', err.message)
                }
                console.log('message written')
            })
        }
        else {
            console.log("un check")
            port.write('b', function (err) { // หลอด 1 ดับ
                if (err) {
                    return console.log('Error on write: ', err.message)
                }
                console.log('message written')
            })        
        }
    });

    $('#lamp2').change(function () {
        console.log("Change")
        if ($('#lamp2').is(':checked')) {
            console.log("checked")
            port.write('c', function (err) { // หลอด 2 ติด
                if (err) {
                    return console.log('Error on write: ', err.message)
                }
                console.log('message written')
            })
        }
        else {
            console.log("un check")
            port.write('d', function (err) { // หลอด 2 ดับ
                if (err) {
                    return console.log('Error on write: ', err.message)
                }
                console.log('message written')
            })        
        }
    });

    $('#lamp3').change(function () {
        console.log("Change")
        if ($('#lamp3').is(':checked')) {
            console.log("checked")
            port.write('e', function (err) { // หลอด 3 ติด
                if (err) {
                    return console.log('Error on write: ', err.message)
                }
                console.log('message written')
            })
        }
        else {
            console.log("un check")
            port.write('f', function (err) { // หลอด 3 ดับ
                if (err) {
                    return console.log('Error on write: ', err.message)
                }
                console.log('message written')
            })        
        }
    });


}


