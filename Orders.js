import React, { useState, useEffect } from 'react';
import { db } from "./firebase";
import './Orders.css';
import { useStateValue } from "./StateProvider";
import Order from './Order';

function Orders() {
  const [{ basket, user }, dispatch] = useStateValue();
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    if(user) {
        db
        .collection('users')
        .doc(user?.uid)
        .collection('orders')
        .orderBy('created', 'desc')
        .onSnapshot(snapshot => (
            setOrders(snapshot.docs.map(doc => ({
                id: doc.id,
                data: doc.data()    //for each document return an object 
            })))
        ))
    } else {
        setOrders([])     //setOrders into an empty array
    }

  }, [user])

    return (
        <div className='orders'>
            <h1>Your Orders</h1>

            <div className='orders__order'>
                {orders?.map(order => (
                    <Order order={order} />
                ))}
            </div>
        </div>
    )
}

export default Orders


//in useEffect first db.collection(users) is giving the users in firebase, then etting specific user logged in that time
//then accessing that users orders, date and recent order 
//setOrders and snapShot is going through the list
//gt the id of the doc and store it in the id key and put that in data key which bubbles into the array



