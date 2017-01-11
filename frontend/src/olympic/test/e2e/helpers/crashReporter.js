var fs      = require('fs');
var path    = require('path');
var moment  = require('moment');
var is      = require('is_js');
var _       = require('lodash-node');



var REPORT_DIRECTORY        = path.resolve(__dirname + '/../report/'),
    CONSOLE_LOGS_DIRECTORY  = path.resolve(REPORT_DIRECTORY + '/logs/'),
    SCREENSHOTS_DIRECTORY   = path.resolve(REPORT_DIRECTORY + '/screenshots/');

var logErrorToConsole = function (e) {console.log(e);};

var getNowsTimestampAsFormattedString = function () {
  var DATE_FORMAT = 'YYYY-MMM-DD-HH:mm:ss'; // "2013-Sep-03-21:58:03"
  return moment(new Date()).format(DATE_FORMAT);
};

var getTimeStringFromTimestamp = function (unixTimestamp) {
  var TIME_FORMAT = 'HH:mm:ss';
  return moment(unixTimestamp).format(TIME_FORMAT);
};

function createDirectories(){
  function createDirectory(dir){
    if (!fs.existsSync(dir)) { fs.mkdirSync(dir); }
  }
  var directories = [REPORT_DIRECTORY, CONSOLE_LOGS_DIRECTORY, SCREENSHOTS_DIRECTORY];
  _.map(directories, createDirectory);
}

function takeScreenshot(baseFileName){
  var pngFileName = path.resolve(SCREENSHOTS_DIRECTORY + '/' + baseFileName + '.png');
  browser.takeScreenshot().then(function (png) {
    fs.writeFileSync(pngFileName, png, {encoding: 'base64'}, logErrorToConsole);
  }, logErrorToConsole);
}

function flushConsoleToFile(browser, baseFileName){
  browser.driver.manage().logs().getAvailableLogTypes().then(function (logTypes) {
    var logType = 'browser';
    if (_.includes(logTypes, logType)) {

      var logFileName = path.resolve(CONSOLE_LOGS_DIRECTORY + '/' + baseFileName + '.txt');
      browser.driver.manage().logs().get(logType).then(function (logsEntries) {
        _.map(logsEntries, function(logEntry){
          var msg = getTimeStringFromTimestamp(logEntry.timestamp) + ' ' + logEntry.type + ' ' + logEntry.message;
          fs.appendFileSync(logFileName, msg + '\r\n', {encoding: 'utf8'}, logErrorToConsole);
        });
      }, logErrorToConsole);
    }
  });
}

module.exports = {
  getNowsTimestampAsFormattedString : getNowsTimestampAsFormattedString,
  createDirectories : createDirectories,
  flushConsoleToFile : flushConsoleToFile,
  takeScreenshot : takeScreenshot
};

