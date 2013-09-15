var express = require('express');
var http = require("http");
var engine = require('ejs-locals');
var app = express();
var fs = require('fs');

var viewPath =  __dirname + '/views';
var staticPath = __dirname + '/static';

function dumpHTML(page, dest) {
    engine(viewPath + '/' + page, {settings: {'view engine': 'html', 'views': __dirname + '/views'}}, function(err, template) {
        console.log(err);
        fs.writeFileSync(staticPath + '/' + dest, template);
    });
}

dumpHTML('simulator.html', 'index.html');
dumpHTML('about.html', 'about.html');