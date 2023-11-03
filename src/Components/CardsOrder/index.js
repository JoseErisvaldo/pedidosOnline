import "./style.css";
import Imagem from "../../img/Roupas/imagem1.png";
function CardOrders() {
  return (
    <div>
      <div className="title-order">
        <h1>Seus pedidos!</h1>
        <hr></hr>
      </div>
      <div id="container-orders">
        <div className="container-card-order">
          <h3>Pedido: 1236468426</h3>
          <div className="cards-order">
            <div className="order">
              <div className="img-desc-order">
                <div className="info-order">
                  <div>
                    <img src={Imagem} alt="foto" />
                  </div>
                  <div className="dados-order">
                    <div className="descricao-order">
                      <h2>Jaqueta roxa</h2>
                      <h3>Tamanho: P</h3>
                      <h3>Quantidade: 1</h3>
                    </div>
                  </div>
                </div>
                <div className="info-order">
                  <div>
                    <img src={Imagem} alt="foto" />
                  </div>
                  <div className="dados-order">
                    <div className="descricao-order">
                      <h2>Jaqueta roxa</h2>
                      <h3>Tamanho: P</h3>
                      <h3>Quantidade: 1</h3>
                    </div>
                  </div>
                </div>
              </div>
              <div className="status-order">
                <div>
                  <h3>Status</h3>
                  <div className="info-status-order">
                    <div>Pagamento aprovado: Sim - 01/11/2023</div>
                    <div>Em produção: Sim - 01/11/2023</div>
                    <div>Faturado: Sim - 01/11/2023</div>
                    <div>Expedido: Sim - 01/11/2023</div>
                    <div>Rota de entrega: Sim - 02/11/2023</div>
                    <div>Entregue: Sim - 02/11/2023</div>
                    <div>Data entrega: 02/11/2023</div>
                  </div>
                </div>
                <div className="transporte-order">
                  <div>Transportadora: JoséExpress</div>
                </div>
              </div>
            </div>
          </div>
          <div className="price-order">
            <div className="total-items">Itens: 2 </div>
            <div className="price-order-buy"> Valor: R$:90</div>
            <div className="price-frete"> Frete: R$:11</div>
            <div className="subtotal-order">Total: R$:101</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardOrders;
