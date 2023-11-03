import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import dadosExport from "../../dadosExport";
import Card from "../../Components/Cards";

function Detalhes() {
  const { id } = useParams(null);
  const [dados, setDados] = useState();

  useEffect(() => {
    const item = dadosExport.find((item) => item.id === parseInt(id));

    if (item) {
      setDados(item);
    }
  }, [id]);

  return (
    <div>
      {dados ? (
        <div>
          <Card imagem={dados.img} name={dados.name} descricao={dados.descricao} tamanhoP={dados.tamanho.p} tamanhoM={dados.tamanho.m} tamanhoG={dados.tamanho.g}/>
        </div>
      ) : (
        <>Item não localizado</>
      )}
    </div>
  );
}

export default Detalhes;
