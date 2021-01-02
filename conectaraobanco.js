const pg = require('pg');
const pgClient = new pg.Client({
  user: 'nqnzrzwlvsmxhn',
  password: '91473f92b217e0b07bace4e2c4af05c4cc818d9e0725dcc2b2fe4e9ad688473f',
  database: 'd78stj7bl67eft',
  port: 5432,
  host: 'ec2-52-203-165-126.compute-1.amazonaws.com',
  ssl:{ rejectUnauthorized: false }
});
pgClient.connect();

pgClient.query('SELECT * FROM public."Papel"', (err, res) => {
  console.log(err, res)
  pgClient.end()
});