import Roxo from "../../img/Roupas/image10.png";
import Laranja from "../../img/Roupas/image11.png";
import "./index.css";
function Catalogo() {
  const catalogo = [
    {
      id: 1,
      name: "Jaqueta laranja",
      descricao: "Jaqueta laranja otima para o frio",
      price: 80,
      img: Laranja,
      tamanho: {
        p: "P",
        m: "M",
        g: "G",
      },
      qtd: {
        p: 0,
        m: 2,
        g: 5,
      },
    },
    {
      id: 2,
      name: "Jaqueta roxa",
      descricao: "Jaqueta roxa otima para o frio",
      price: 80,
      img: Roxo,
      tamanho: {
        p: "P",
        m: "M",
        g: "G",
      },
      qtd: {
        p: 5,
        m: 10,
        g: 0,
      },
    },
  ];

  return (
    <div>
      <div>
        <h3>Lista de produtos</h3>
      </div>
      <div>
        <div></div>
        <div id="card-catalogo">
          {catalogo.map((item) => (
            <div className="card-catalogo" key={item.id}>
              <div className="container-catalogo">
                <div>
                  <img src={item.img} />
                </div>
                <div className="dados-catalogo">
                  <h3>{item.name}</h3>
                  <div>{item.descricao}</div>
                </div>
                <div>
                  <ul>
                    <li>
                      <input type="checkbox" id={item.tamanho.p} />
                      {item.qtd.p >= 1 ? (
                        <>
                          {item.tamanho.p} - {item.qtd.p} Unidades disponivel
                        </>
                      ) : (
                        <>{item.tamanho.p} - Indisponivel</>
                      )}
                    </li>

                    <li>
                      <input type="checkbox" id={item.tamanho.m} />
                      {item.qtd.m >= 1 ? (
                        <>
                          {item.tamanho.m} - {item.qtd.m} Unidades disponivel
                        </>
                      ) : (
                        <>{item.tamanho.m} - Indisponivel</>
                      )}
                    </li>
                    <li>
                      <input type="checkbox" id={item.tamanho.g} />
                      {item.qtd.g >= 1 ? (
                        <>
                          {item.tamanho.g} - {item.qtd.g} Unidades
                        </>
                      ) : (
                        <>{item.tamanho.g} - Indisponivel</>
                      )}
                    </li>
                  </ul>
                </div>
              </div>
              <div>
                <button>-</button>
                <span>0</span>
                <button>+</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default Catalogo;
