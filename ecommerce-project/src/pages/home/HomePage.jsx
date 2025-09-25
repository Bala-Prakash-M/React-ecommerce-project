import axios from 'axios';
import { useEffect, useState } from 'react';
import { Header } from '../../components/Header';
import '../../components/header.css';
import {ProductsGrid} from './ProductsGrid'
//import { products } from '../../starting-code/data/products'
import './HomePage.css';

export function HomePage({ cart }) {
  const [products, setProducts] = useState([]);
  

  useEffect(() => {
    axios.get('/api/products')
      .then((response) => {
        setProducts(response.data);
    });

    
  }, []);

  return (
    <>
      <title>Ecomemrce Project</title>

      <Header cart={cart} />

      <div className="home-page">
        <ProductsGrid products={products} />
      </div>
    </>
  );
}