const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const { buildSchema } = require('graphql');
const mysql = require('mysql2');

const app = express();
const port = 3306;

// MySQL connection setup
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '1234',
  database: 'imversion',
});

db.connect(err => {
  if (err) {
    console.error('Database connection failed:', err.stack);
    return;
  }
  console.log('Connected to database.');
});

// GraphQL schema
const schema = buildSchema(`
  type Product {
    id: ID!
    title: String!
    description: String!
    image: String!
    price: Float!
    brand: String!
    category: String!
  }

  type Query {
    products: [Product]
  }

  type Mutation {
    addProduct(title: String!, description: String!, image: String!, price: Float!, brand: String!, category: String!): Product
  }
`);

// Root resolver
const root = {
  products: () => {
    return new Promise((resolve, reject) => {
      db.query('SELECT * FROM products', (error, results) => {
        if (error) {
          return reject(error);
        }
        resolve(results);
      });
    });
  },
  addProduct: ({ title, description, image, price, brand, category }) => {
    const product = { title, description, image, price, brand, category };
    return new Promise((resolve, reject) => {
      db.query('INSERT INTO products SET ?', product, (error, results) => {
        if (error) {
          return reject(error);
        }
        resolve({ id: results.insertId, ...product });
      });
    });
  },
};

app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,
}));

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/graphql`);
});
