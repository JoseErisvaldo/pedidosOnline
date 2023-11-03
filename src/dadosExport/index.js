import Roxo from "../img/Roupas/image10.png";
import Laranja from "../img/Roupas/image11.png";
import CamisaBranca from "../img/Roupas/imagem1.png";
import CamisaManga from "../img/Roupas/imagem2.png";

const dadosExport = [
  {
    id: 1,
    name: "Jaqueta laranja",
    descricao:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley",
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
    descricao: "JLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley",
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
  {
    id: 3,
    name: "Jaqueta roxa",
    descricao: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley",
    price: 80,
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
  },
  {
    id: 4,
    name: "Camiseta Longline Manga Longa Chumbo - Fairbanks",
    descricao: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley",
    price: 80,
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
  },
];

export default dadosExport;
