import { useEffect, useState } from "react";
import "./style.css";
import dadosOrder from "../../dadosExport/dadosOrder";
import Users from "../../dadosExport/Users";


function CardOrders() {
  const autenticadoUser = 3;
  const [orders, setOrders] = useState([]);

  useEffect(() => {
      const mapOrders = dadosOrder.map((order) => {
      const mapUsers = Users.find((item) => item.id_user === order.id_user);
      if (mapUsers) {
        return {
          ...order,
          user: { ...mapUsers },
        };
      }

      return order;
    });
    setOrders(mapOrders);
  }, []);
  
  
  return (
    <div>
      <div className="title-order">
        <h1>Seus pedidos!</h1>
        <hr></hr>
      </div>
      <div>
        {orders.filter((item) => item.id_user === autenticadoUser).map((orderFil) => (
            <div key={orderFil.id_user} id="container-orders">
              <div className="container-card-order">
                <h3>Pedido: {orderFil.pedido}</h3>
                <div className="cards-order">
                  <div className="order">
                    <div className="img-desc-order">
                      <div className="info-order">
                        <div>
                          <img src={orderFil.img} alt={orderFil.name} />
                        </div>
                        <div className="dados-order">
                          <div className="descricao-order">
                            <h2>{orderFil.name}</h2>
                            <h5>Quantidade/Tamanho:
                              <br></br> 
                              {orderFil.qtdComp.p ? <span> {orderFil.tamanhoComp.p} {orderFil.qtdComp.p}</span>: null}
                              <br></br>
                              {orderFil.qtdComp.m ? <span> {orderFil.tamanhoComp.m} </span>:null}
                              <br></br>
                              {orderFil.qtdComp.g ? <span> {orderFil.tamanhoComp.g} {orderFil.qtdComp.g} </span>: null}
                            </h5>   
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="status-order">
                      <div>
                        <h3>Status</h3>
                        <div className="info-status-order">
                          <div>Pagamento aprovado: {orderFil.pagamento_aprovado.status} - {orderFil.pagamento_aprovado.data}</div>
                          <div>Em produção: {orderFil.em_producao.status} - {orderFil.em_producao.data}</div>
                          <div>Faturado: {orderFil.faturado.status} - {orderFil.faturado.data}</div>
                          <div>Expedido: {orderFil.expedido.status} - {orderFil.expedido.data}</div>
                          <div>Rota de entrega: {orderFil.rota_entrega.status} - {orderFil.rota_entrega.data}</div>
                          <div>Entregue: {orderFil.entregue.status} - {orderFil.entregue.data} </div>
                          <div>Data entrega: {orderFil.data_entrega.status} - {orderFil.data_entrega.data}</div>
                        </div>
                      </div>
                      <div className="transporte-order">
                        <div>Transportadora: {orderFil.transportadora}</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="price-order">
                  <div className="total-items">Qtd:1</div>
                  <div className="price-order-buy"> Valor: R$:90</div>
                  <div className="price-frete"> Frete: R$:11</div>
                  <div className="subtotal-order">Total: R$:101</div>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default CardOrders;
