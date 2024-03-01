import logo from './logo.svg';
import './App.css';
import axios from 'axios'
import React, { useEffect, useState } from "react";


function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/delivery')
      .then(response => {
        setPosts(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (

      <div>
      <h1>ENTREGAS</h1>

      {
        posts.map((delivery) => {
          return (
            
            <div>        

              <li>Data de envio: {delivery.sendDate}</li>
              <li>Total de itens: {delivery.totalQuantity}</li>
              <li></li>
              <li>Endereço</li>
              <li>Estado: {delivery.adress.state}</li>
              <li>Cidade: {delivery.adress.city}</li>
              <li>Rua: {delivery.adress.street}</li>
              <li>Bairro: {delivery.adress.neighborhood}</li>
              <li>Complemento: {delivery.adress.complement}</li>
              <li>CEP: {delivery.adress.zipcode}</li>
              <li></li>
              <li>Transportadora: {delivery.carrier.name}</li>
              <li></li>
              {
                delivery.Boxes.map((box) => {
                  return(
                    <div>
                      <li>Tamanho: {box.type}</li>
                      <li>Itens: {box.itemsQty}</li>
                      <li>Pedidos: {box.ordersId}</li>
                    </div>
                )            
                })
              }
              <li></li>
              <li></li>
          </div>
          )
          })
      }
    </div>
    
  );
}

export default App;
