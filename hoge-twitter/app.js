const express = require('express');
const bodyParser = require('body-parser')
const session = require('express-session');
const app = express();
const port = 3001;
app.use(bodyParser.urlencoded({ extended: true }));


const allowCrossDomain = function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE')
  res.header(
    'Access-Control-Allow-Headers',
    'Content-Type, Authorization, access_token'
  )

  // intercept OPTIONS method
  if ('OPTIONS' === req.method) {
    res.send(200)
  } else {
    next()
  }
}
app.use(allowCrossDomain)


const mysql = require('mysql');
const con = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'test'
});

app.use(
  session({
    secret: 'my_secret_key',
    resave: false,
    saveUninitialized: false,
  })
);
 
con.connect(function(err) {
  if(err) throw err;
  console.log('Connected database');
});

app.get('/', (req, res) => res.send('Hello World'));

app.get('/login', (req, res) => res.send('Hello World'));

app.post('/login', (req, res) => {
  console.log("now is /login");
  const id = req.body.id;
  const pass = req.body.pass;
  con.query(
    'select * from users where id = ?',
    [id],
    (error, results) => {
      if(results.length > 0 && id !== undefined) {
        if(results[0].password === pass) {
          const userData = {
            id: results[0].id,
            firstName: results[0].firstName,
            lastName: results[0].lastName
          };
          res.send(JSON.stringify(userData));
        } else {
          console.log("pass error");
          res.send(null);
        }
      }else {
        console.log("id error");
        res.send(null);
      }
    }
  );
});

app.listen(port);