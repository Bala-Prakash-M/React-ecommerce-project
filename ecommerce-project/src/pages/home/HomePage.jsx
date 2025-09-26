import axios from 'axios';
import { useEffect, useState } from 'react';
import { Header } from '../../components/Header';
import '../../components/header.css';
import {ProductsGrid} from './ProductsGrid'
//import { products } from '../../starting-code/data/products'
import './HomePage.css';

export function HomePage({ cart, loadCart }) {
  const [products, setProducts] = useState([]);
  

  useEffect(() => {
    const getHomeData = async() => {
      const response = await axios.get('/api/products')
      setProducts(response.data); 
    };

    getHomeData(); 
  }, []);

  return (
    <>
      <title>Ecomemrce Project</title>

      <Header cart={cart} />

      <div className="home-page">
        <ProductsGrid products={products} loadCart={loadCart} />
      </div>
    </>
  );
}