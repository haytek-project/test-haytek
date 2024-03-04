import logo from './logo.svg';
import './App.css';
import axios from 'axios'
import React, { useEffect, useState } from "react";


function App() {
  const [posts, setPosts] = useState([]);

  console.log(process.env.REACT_APP_DELIVERY_API_URL)

  useEffect(() => {
    axios.get(process.env.REACT_APP_DELIVERY_API_URL)
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
                <dt><b>Transportadora:</b></dt>
                <dd>{delivery.carrier.name}</dd>
                {/* <dt><b>Total de itens:</b> {delivery.totalQuantity}</dt> */}
                <dt><b>Endereço:</b></dt>
                <dd>Cidade: {delivery.adress.city}</dd>
                <dd>Bairro: {delivery.adress.neighborhood}</dd>
                <dd>Rua: {delivery.adress.street}</dd>
                <dd>Complemento: {delivery.adress.complement}</dd>
                <dd>Estado: {delivery.adress.state}</dd>
                <dd>CEP: {delivery.adress.zipcode}</dd>
                <dt><b>Caixas</b></dt>
                {
                  delivery.Boxes.map((box) => {
                    return(
                      <div>
                        <dd>Tamanho: {box.type}</dd>
                        <dd>Itens: {box.itemsQty}</dd>
                        <dd>Pedidos: </dd>
                        <dd>
                        {
                          box.ordersId.map((pedido) => {
                            return (
                              <div>
                                <dd>{pedido}</dd>
                              </div>
                            )
                          })

                        }
                        </dd>
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
