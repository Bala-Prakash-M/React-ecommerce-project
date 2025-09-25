import axios from 'axios'
import { useEffect, useState, Fragment } from 'react';
//import { formatMoney } from '../utils/money';
import { Header } from '../../components/Header';
import { OrderHeader } from './OrderHeader';
import '../../components/header.css';
import './OrdersPage.css';
import { OrderPagesGrid } from './OrderPagesGrid';

export function OrdersPage({ cart }) {
  const [orders, setOrders] = useState([]);


  useEffect(() => {
    const fetchOrdersData = async () => {
      const response = await axios.get(
        '/api/orders?expand=products'
      )
        setOrders(response.data);
    };

    fetchOrdersData();
  }, []);

  return (
    <>
      <title>Orders</title>

      <Header cart={cart} />

      <div className="orders-page">
        <div className="page-title">Your Orders</div>

        <div className="orders-grid">
          {orders.map((order) => {
            return (
              <div key={order.id} className="order-container">

                <OrderHeader order={order} />

                <OrderPagesGrid order={order} />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}