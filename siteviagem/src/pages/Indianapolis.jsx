import Header from "../components/Header";
import Footer from "../components/Footer";
import Indianapolis from "../assets/Viagem3.jpg";

import Hotel from "../components/Hotel";
import Hotel1 from "../assets/hoteis1.jpg"
import Hotel2 from "../assets/hoteis2.jpg"
import Hotel3 from "../assets/hoteis3.jpg"
import Hotel4 from "../assets/hoteis4.jpg"

import "../styles/Page.css";
import "bootstrap/dist/css/bootstrap.min.css";

function IndianapolisPage() {
  return (
    <>
      <Header />

      <section className="Page">
        <img src={Indianapolis} />
        <h1>Indianapolis</h1>
        <p classname="SubTitle">
          Indianápolis é a capital e a maior cidade do estado de Indiana, nos
          Estados Unidos. Localizada na região Centro-Oeste do país, a cidade é
          conhecida por ser um importante centro financeiro, cultural e
          esportivo. Fundada em 1821, Indianápolis foi planejada para ser a
          capital do estado, e seu layout foi desenhado com ruas que convergem
          para o Monument Circle, um marco central que abriga o Soldiers and
          Sailors Monument, um memorial dedicado aos veteranos de guerra.
        </p>

        <h4>O que fazer em Indianápolis:</h4>

        <ol>
          <li>
            <strong> Indianapolis Motor Speedway e Museum: </strong>
            Visite o lendário Indianapolis Motor Speedway, onde ocorrem as
            famosas 500 Milhas de Indianápolis. O museu no local exibe uma
            coleção impressionante de carros de corrida e memorabilia
            relacionada ao automobilismo
          </li>
          <li>
            <strong>Monument Circle: </strong>
            Conheça o Soldiers and Sailors Monument, um marco icônico no coração
            da cidade. Suba até o topo para uma vista panorâmica de Indianápolis
          </li>
          <li>
            <strong> White River State Park </strong>
            Um parque urbano que oferece diversas atrações, incluindo o
            Indianapolis Zoo, o Eiteljorg Museum of American Indians and Western
            Art, o Indiana State Museum e um canal onde você pode alugar
            pedalinhos ou fazer um passeio de barco.{" "}
          </li>

          <li>
            <strong>Indianapolis Museum of Art (Newfields): </strong>
            Explore uma das maiores e mais antigas instituições de arte do país.
            O complexo também inclui jardins belíssimos e uma propriedade
            histórica.
          </li>

          <li>
            <strong>Restaurantes e Gastronomia: </strong>
            Indianápolis oferece uma cena gastronômica diversificada, com opções
            que vão desde pratos tradicionais americanos até cozinhas
            internacionais. A cidade é conhecida por seus steakhouses,
            hambúrgueres artesanais e comida comfort food, como mac and cheese e
            frango frito. Além disso, há uma crescente influência de cozinhas
            étnicas, como mexicana, italiana, asiática e mediterrânea. Destaques
            incluem o St. Elmo Steak House, famoso por seus filés e molho de
            camarão picante, e o Milktooth, um café aclamado por seu brunch
            criativo. Para quem busca experiências únicas, o Bluebeard oferece
            pratos sazonais com ingredientes locais.
          </li>
          <li>
            <strong>Vida Noturna: </strong>A vida noturna em Indianápolis é
            vibrante e diversificada, com opções para todos os estilos. O centro
            da cidade e o bairro de Broad Ripple são os principais polos de
            entretenimento, oferecendo bares, clubes, casas de shows e pubs.
            Locais como o Howl at the Moon (bar com pianos ao vivo) e o Tappers
            Arcade Bar (combinação de jogos retrô e drinks) são muito populares.
          </li>
          <li>
            <strong>Transportes: </strong>O transporte em Indianápolis é
            centrado principalmente no uso de carros, mas a cidade oferece
            outras opções para locomoção. O sistema de transporte público é
            operado pela IndyGo, que inclui linhas de ônibus regulares e o Red
            Line, um serviço de ônibus rápido (BRT) que conecta áreas-chave da
            cidade. Para ciclistas, a cidade possui uma rede crescente de
            ciclovias e o Pacers Bikeshare, um sistema de compartilhamento de
            bicicletas. Caminhar é uma opção viável em áreas como o centro e
            Broad Ripple, que são mais compactas e pedestrian-friendly.
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
  );
}

export default IndianapolisPage;
