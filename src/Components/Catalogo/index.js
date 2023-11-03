import { Link } from "react-router-dom";
import Roxo from "../../img/Roupas/image10.png";
import Laranja from "../../img/Roupas/image11.png";
import CamisaBranca from "../../img/Roupas/imagem1.png";
import CamisaManga from "../../img/Roupas/imagem2.png";

import { useParams } from "react-router-dom";
import "./index.css";
function Catalogo() {
  const catalogo = [
    {
      id: 1,
      name: "Jaqueta laranja",
      descricao: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley",
      price: 124,
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
      descricao: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley",
      price: 90,
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
    {
      id: 3,
      name: "Jaqueta roxa",
      descricao: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley",
      price: 70,
      img: CamisaBranca,
      tamanho: {
        p: "P",
        m: "M",
        g: "G",
      },
      qtd: {
        p: 15,
        m: 0,
        g: 5,
      },
    },{
      id: 4,
      name: "Camiseta Longline Manga Longa Chumbo - Fairbanks",
      descricao: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley",
      price: 99,
      img: CamisaManga,
      tamanho: {
        p: "P",
        m: "M",
        g: "G",
      },
      qtd: {
        p: 6,
        m: 4,
        g: 7,
      },
    }
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
                  <br></br>
                  <span>
                    R$:{item.price}
                    <div className="price-antigo">De R$: 120</div>
                  </span>
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
                          {item.tamanho.g} - {item.qtd.g} Unidades disponivel
                        </>
                      ) : (
                        <>{item.tamanho.g} - Indisponivel</>
                      )}
                    </li>
                  </ul>
                </div>
              </div>
              <div>
                <button  key={item.id}>-</button>
                <span>0</span>
                <button key={item.id}>+</button>
                <Link to={`/detalhes/${item.id}`} className="detalhes" >Ver detalhes</Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default Catalogo;
