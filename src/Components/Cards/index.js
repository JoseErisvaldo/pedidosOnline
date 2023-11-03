import "./index.css";
import dadosExport from '../../dadosExport'
function Card({ imagem, name, descricao, tamanhoP, tamanhoM, tamanhoG }) {

    console.log(dadosExport)

  return (
    <div>
      <div id="container-card">
        <img src={imagem} />
        <h3>{name}</h3>
        <h4>{descricao}</h4>
        <div>
          
        </div>
      </div>
    </div>
  );
}

export default Card;
