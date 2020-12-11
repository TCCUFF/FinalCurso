var express = require('express'),
	path = require('path'),
	bodyParser = require('body-parser'),
	cons = require('consolidate'),
	dust = require('dustjs-helpers'),
	pg = require('pg'),
	app = express();

var pgClient = new pg.Client({
  user: 'nqnzrzwlvsmxhn',
  password: '91473f92b217e0b07bace4e2c4af05c4cc818d9e0725dcc2b2fe4e9ad688473f',
  database: 'd78stj7bl67eft',
  port: 5432,
  host: 'ec2-52-203-165-126.compute-1.amazonaws.com',
  ssl:{ rejectUnauthorized: false }
});
pgClient.connect();

app.engine('dust', cons.dust);

app.set('view engine', 'dust');
app.set('views', __dirname + '/views');

app.use(express.static(path.join(__dirname, 'public)));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extend:false }));

app.get('/', function(req, res){
	console.log('TEST');
 });

app.listen(3000, function(){
	console.log('Server Started On Port 3000');
 });

//pgClient.connect(function(err) {
	
//  pgClient.query('SELECT * FROM public."Papel"', function (err, result, fields) {
//    console.log(result);
//  });
//});