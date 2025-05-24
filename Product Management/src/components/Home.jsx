import React, { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from 'axios';

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <h2 style={{ textAlign: 'center', marginTop: '20px' }}>Product List</h2>
      <TableContainer component={Paper} style={{ marginTop: '20px' }}>
        <Table sx={{ minWidth: 650 }} aria-label="product table">
          <TableHead>
            <TableRow>
              <TableCell><strong>TITLE</strong></TableCell>
              <TableCell align="right"><strong>PRICE</strong></TableCell>
              <TableCell align="right"><strong>CATEGORY</strong></TableCell>
              <TableCell align="right"><strong>IMAGE</strong></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {products.map((product) => (
              <TableRow key={product.id}>
                <TableCell component="th" scope="row">
                  {product.title}
                </TableCell>
                <TableCell align="right">${product.price}</TableCell>
                <TableCell align="right">{product.category}</TableCell>
                <TableCell align="right">
                  <img src={product.image} alt={product.title} style={{ height: '70px' }} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Home;
