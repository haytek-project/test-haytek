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
      <h2>RELATÓRIO DE ENTREGAS</h2>

      {
        posts.map((delivery) => {
          const a = new Date(delivery.sendDate).toLocaleDateString('pt-BR') 
          return (            
            <div>        
              <dl>
                <dt><b>Data de envio:</b></dt>
                <dd>{a}</dd>
                {/* <dt><b>Total de itens:</b> {delivery.totalQuantity}</dt> */}
                <dt><b>Endereço:</b></dt>
                <dd>Estado: {delivery.adress.state}</dd>
                <dd>Cidade: {delivery.adress.city}</dd>
                <dd>Rua: {delivery.adress.street}</dd>
                <dd>Bairro: {delivery.adress.neighborhood}</dd>
                <dd>Complemento: {delivery.adress.complement}</dd>
                <dd>CEP: {delivery.adress.zipcode}</dd>
                <dt><b>Transportadora:</b></dt>
                <dd>{delivery.carrier.name}</dd>
                <dt><b>Caixas</b></dt>
                {
                  delivery.Boxes.map((box) => {
                    return(
                      <div>
                        <dd>Tamanho: {box.type}</dd>
                        <dd>Itens: {box.itemsQty}</dd>
                        <dd>Pedidos: {box.ordersId}</dd>
                        <p></p>
                      </div>
                  )            
                  })
                }
              </dl>
              <br/>
          </div>
          )
          })
      }
    </div>
    
  );
}

export default App;
