var express = require('express');
var http = require("http");
var engine = require('ejs-locals');
var app = express();
var config = require('./config.json');

// TODO instead of using VCAP_APP_HOST it should use an ENV var.
var expImpEnabled = typeof(process.env.SIM_ENABLE_EXPORT) !== 'undefined';
var playerEnabled = true;

app.set('mgmt-user', config.mgmt.user || 'guest');
app.set('mgmt-pass', config.mgmt.pass || 'guest');
app.set('mgmt-host', config.mgmt.host || 'localhost');
app.set('mgmt-port', config.mgmt.port || '15672');

app.use(express.static(__dirname + '/web'));
app.use(express.bodyParser());
app.use(require('express-blocks'));

app.set('views', __dirname + '/views');
app.set('view engine', 'html');
app.engine('html', engine);

function get_auth(user, pass) {
   return 'Basic ' + new Buffer(user + ':' + pass).toString('base64');
}

function get_base_req_opts() {
    return {
        'host': app.get('mgmt-host'),
        'port': app.get('mgmt-port'),
        'headers': {
            'Content-Type': 'application/json',
            'Authorization': get_auth(app.get('mgmt-user'), app.get('mgmt-pass'))
        }
    };
}

app.get('/definitions', function (req, res) {
    var options = get_base_req_opts();
    options.path = '/api/definitions';
    options.method = 'GET';
    var rest = http.request(options, function (response){
        var output = '';
        response.setEncoding('utf8');
        response.on('data', function (chunk) {
            output += chunk;
        });

        response.on('end', function() {
            res.set('Content-Type', 'application/json');
            console.log("sending output:", output);
            res.send(output);
        });
    });
    rest.end();
});

app.post('/definitions', function (req, res) {
    var post_data = JSON.stringify(req.body);
    var options = get_base_req_opts();
    options.path = '/api/definitions';
    options.method = 'POST';
    options.headers['Content-Length'] = post_data.length;
    var rest = http.request(options, function (response){
        var output = '';
        response.setEncoding('utf8');
        response.on('data', function (chunk) {
            output += chunk;
        });

        response.on('end', function() {
            res.set('Content-Type', 'application/json');
            res.send(output);
        });
    });
    rest.write(post_data);
    rest.end();
});

app.get('/', function (req, res) {
  console.log('rendering simulator');
    res.render('simulator', {expImpEnabled: expImpEnabled, playerEnabled: playerEnabled});
});

app.get('/about.html', function (req, res) {
    res.render('about');
});

app.get('/player.html', function (req, res) {
    res.render('player');
});

app.listen(port = process.env.PORT || 3000);
console.log('Listening on port ', port);
console.log("expImpEnabled", expImpEnabled);