var mraa = require("mraa");
var nmeaParser = require("nmea-0183");

var SerialPort = require("serialport").SerialPort; 

serialPort = new SerialPort('/dev/ttyMFD1', {  
  baudrate: 9600,  
  // defaults for Arduino serial communication  
  dataBits: 8,   
  parity: 'none',   
  stopBits: 1,   
  flowControl: false   
});

serialPort.on('open', showPortOpen); 
serialPort.on('data', saveLatestData); 
serialPort.on('close', showPortClose); 

function showPortOpen(){}

function showPortClose(){}

function saveLatestData(data)
{
    readdata = data.split('\n'); 
	gpgga = nmea.parse(readdata);
    console.log(readdata); 
}