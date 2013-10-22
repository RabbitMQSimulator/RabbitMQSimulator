var express = require('express');
var http = require("http");
var engine = require('ejs-locals');
var app = express();

// TODO instead of using VCAP_APP_HOST it should use an ENV var.
var expImpEnabled = typeof(process.env.VCAP_APP_HOST) !== 'undefined';
var playerEnabled = true;

app.set('mgmt-user', 'guest');
app.set('mgmt-pass', 'guest');
app.set('mgmt-host', 'localhost');
app.set('mgmt-port', '15672');

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
    res.render(
        'simulator',
        {expImpEnabled: expImpEnabled, playerEnabled: playerEnabled, playerConfiguration: req.query.conf}
    );
});

app.get('/about.html', function (req, res) {
    res.render('about');
});

app.get('/player.html', function (req, res) {
    res.render('player');
});

app.listen(3000);
console.log('Listening on port 3000');
