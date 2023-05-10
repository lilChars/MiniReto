const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
var mysql      = require('mysql');
const { urlencoded } = require('body-parser');
const app = express();

app.use(express.json());
app.use(cors());
app.use(bodyParser({urlencoded:true}))


var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'PRODUCTS'
});
 
connection.connect((error) => {
    if (error) {
      console.error('Error connecting to database: ', error);
      return;
    }
    console.log('Database connection established');
  });
  
  app.get('/', (req, res) => {
    res.send('SELINAS PRODUCTS');
  });
  
  app.get('/api/products', (req, res) => {
    const sql = `SELECT * FROM HOODIES UNION ALL
               SELECT * FROM PANTS UNION ALL
               SELECT * FROM SHORTS UNION ALL
               SELECT * FROM SHOES UNION ALL
               SELECT * FROM CAPS`;
  
  // Realizar la consulta a la base de datos
  connection.query(sql, (error, results, fields) => {
    if (error) throw error;

    // Devolver los resultados en formato JSON
    res.json(results);
  });
});
  
  

  app.get('/api/products/:table', (req, res) => {
    const { table } = req.params;
    const sql = `SELECT * FROM ${table}`;
  
    connection.query(sql, (error, results, fields) => {
      if (error) throw error;
      res.json(results);
  });
});

  
  app.post('/api/products/:table', (req, res) => {
  const { size, color, quantity, description } = req.body;
  const { table } = req.params;
  const sql = `INSERT INTO ${table} (size, color, quantity, description) VALUES (?, ?, ?, ?)`;
  const values = [size, color, quantity, description];

  connection.query(sql, values, (error, results, fields) => {
    if (error) throw error;
    res.json({ message: 'Product added successfully.' });
  });
}); 

// Endpoint DELETE /api/products/:table/:id
  app.delete('/api/products/:table/:id', (req, res) => {
  const { id, table } = req.params;
  const sql = `DELETE FROM ${table} WHERE id = ${id}`;

  connection.query(sql, (error, result) => {
    if (error) throw error;
    console.log(`Deleted ${result.affectedRows} row(s)`);
    res.send(`Product with ID ${id} in table ${table} has been deleted`);
  });
});

  app.put('/api/products/:table/:id', (req, res) => {
  const { quantity } = req.body;
  const { table, id } = req.params;
  const query = `UPDATE ${table} SET quantity=${quantity} WHERE id=${id}`;
  connection.query(query, (err, result) => {
    if (err) throw err;
    res.send(`Product with id ${id} in table ${table} has been updated`);
  });
});


  
  const port = process.env.PORT || 3001;
  app.listen(port, () => console.log(`Listening on port ${port}...`));
