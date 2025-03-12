import Header from "../components/Header";
import Footer from "../components/Footer"

import Hotel from "../components/Hotel";
import Hotel1 from "../assets/hoteis1.jpg"
import Hotel2 from "../assets/hoteis2.jpg"
import Hotel3 from "../assets/hoteis3.jpg"
import Hotel4 from "../assets/hoteis4.jpg"

import Balneario from "../assets/Viagem2.jpg"


import "../styles/Page.css"
import "bootstrap/dist/css/bootstrap.min.css";

function BalnearioPage() {

  return (
    <>
      <Header />

      <section className="Page">
        <img src={Balneario} />
        <h1>Balneário Camburiú</h1>
        <p>   Balneário Camboriú é uma das cidades mais visitadas e conhecidas do
          litoral catarinense, no sul do Brasil. Localizada no estado de Santa
          Catarina, é famosa por sua infraestrutura moderna, belas praias e vida
          noturna animada, atraindo turistas de todo o Brasil e do exterior,
          especialmente durante a alta temporada. Com suas imponentes
          construções à beira-mar, exuberante vegetação e uma atmosfera de
          cidade cosmopolita, Balneário Camboriú é um destino que combina o
          charme natural com o dinamismo urbano.</p>

        <h4>O que fazer em Balneário Camburiú:</h4>

        <ol>
        <li><strong>Praia de Balneário: </strong>
                É a principal praia da cidade, com uma extensa faixa de
                areia e um calçadão repleto de quiosques, restaurantes e lojas.
                Ideal para caminhar e aproveitar a vista.
              </li>
              <li><strong>Cristo Luz: </strong>
                Um dos cartões-postais mais reconhecíveis de
                Balneário Camboriú é o Cristo Luz, uma estátua de 33 metros de
                altura que, iluminada à noite, forma um espetáculo visual
                imponente. O Cristo fica localizado em um morro, de onde é
                possível apreciar uma vista de 360 graus da cidade e da região.
                À noite, o Cristo Luz é iluminado por uma série de cores que
                tornam o monumento ainda mais grandioso.
              </li>
              <br></br>

              <li><strong>Teleféricos: </strong>
                O teleférico de Balneário Camboriú é uma das formas
                mais emocionantes de apreciar a cidade de cima. Ele liga o
                centro da cidade à Praia de Laranjeiras e oferece vistas
                deslumbrantes.
              </li>
              <br></br>

              <li><strong>Praia das Laranjeiras: </strong>
                A Praia das Laranjeiras, Localizada mais
                ao norte, essa praia se destaca pela beleza e tranquilidade. Sua
                infraestrutura de bares e restaurantes com vista para o mar
                também contribui para a experiência única, combinando o sossego
                com o lazer.
              </li>
              <br></br>

              <li><strong>Morro do Careca: </strong>
                Uma das atrações mais emblemáticas de Balneário
                Camboriú é o Morro do Careca, um ponto de observação natural que
                oferece uma vista panorâmica incrível da cidade. A partir do
                alto do morro, é possível ver a cidade se estendendo ao longo da
                costa, com o mar em azul vibrante contrastando com os
                arranha-céus e as montanhas que cercam a região.
              </li>
              <br></br>

              <li><strong>Ilha da Cabra: </strong>
                Um dos pontos turísticos mais procurados é a Ilha
                das Cabras, um pequeno pedaço de terra no meio do mar, acessível
                por barco. Embora seja pequena, a ilha possui águas claras e é
                um excelente local para a prática de esportes aquáticos, como
                mergulho e stand-up paddle. A ilha é cercada por um ecossistema
                marinho riquíssimo, o que torna o local ideal para quem aprecia
                a vida submarina.
              </li>
              <br></br>

              <li><strong>Parque Natural: </strong>
                Esse parque é uma das áreas verdes mais
                importantes de Balneário Camboriú. Com trilhas que atravessam a
                mata atlântica, o parque é um verdadeiro oásis no meio da
                cidade. A vegetação nativa, composta por árvores imponentes e
                rica fauna, oferece um ambiente perfeito para caminhadas e
                passeios ao ar livre.
              </li>
              <br></br>

              <li><strong> Lugares Noturnos: </strong>
               À noite, Balneário Camboriú se transforma em
                um dos destinos mais animados do litoral brasileiro. Os bares e
                restaurantes da cidade, especialmente na região da Praia
                Central, oferecem uma infinidade de opções gastronômicas, desde
                pratos típicos da culinária local até opções internacionais. Os
                bares e clubes, muitos deles localizados nos modernos
                arranha-céus, mantêm a cidade pulsante durante a noite. Além
                disso, o cenário de Balneário Camboriú à noite, com seus
                edifícios iluminados, é de uma beleza única, refletindo-se nas
                águas tranquilas da orla.
              </li>
        </ol>

        <article className="HoteisCards">
          <Hotel
            nome="Hotel Palmas Execultivo"
            image={Hotel1}
            hobby="A partir de R$376,00 por noite"
            avaliacao="⭐⭐⭐⭐★"
          ></Hotel>
          <Hotel
            nome="Hotel Mercure"
            image={Hotel2}
            hobby="A partir de R$482,00 por noite"
            avaliacao="⭐⭐★★★"
          ></Hotel>
          <Hotel
            nome="Hotel Plaza Camboriu"
            image={Hotel3}
            hobby="A partir de R$648,00 por noite"
            avaliacao="⭐⭐⭐★★"
          ></Hotel>
          <Hotel
            nome="Hotel Plaza Camboriu"
            image={Hotel4}
            hobby="A partir de R$860,00 por noite"
            avaliacao="⭐⭐⭐⭐⭐"
          ></Hotel>
        </article>
      </section>

      <Footer />
    </>
  )
}
export default BalnearioPage;