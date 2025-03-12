import Header from "../components/Header";
import Footer from "../components/Footer"

import Hotel from "../components/Hotel";
import Hotel1 from "../assets/hoteis1.jpg"
import Hotel2 from "../assets/hoteis2.jpg"
import Hotel3 from "../assets/hoteis3.jpg"
import Hotel4 from "../assets/hoteis4.jpg"

import Luanda from "../assets/Viagem5.jpg"

import { useEffect } from "react";

import "../styles/Page.css"
import "bootstrap/dist/css/bootstrap.min.css";

function LuandaPage() {

  useEffect(() => {
    document.title = `Luanda - Trivago`;
  }, []);

  return (
    <>
      <Header />

      <section className="Page">
        <img src={Luanda} />
        <h1>Luanda</h1>
        <p>Luanda é a capital de Angola e uma das cidades mais vibrantes da África. Localizada na costa atlântica, é um centro de negócios, cultura e história, com uma mistura única de modernidade e tradições angolanas. Para quem visita Luanda, há uma variedade de atrações turísticas, opções de lazer, gastronomia e cultura local.</p>

        <h4>O que fazer em Luanda:</h4>

        <ol>
          <li><strong>Praia do Mussulo: </strong>
            A Praia do Mussulo é uma das mais conhecidas e procuradas de Luanda, famosa pela sua beleza natural, águas calmas e quentes. É um ótimo lugar para relaxar e aproveitar o clima tropical.

            Preço de entrada: A entrada na praia é gratuita, mas alguns resorts e áreas privadas cobram uma taxa de acesso que varia entre 1.500 a 5.000 AKZ (Kwanza, moeda local), dependendo da localização e da estrutura oferecida.
            Atividades: Passeios de barco, esportes aquáticos, pesca e caminhadas na praia.</li>
          <li>
            <strong>Ilha de Luanda: </strong>
            A Ilha de Luanda é um destino turístico popular para quem deseja conhecer um pouco mais sobre o lado mais tranquilo da cidade, com belas paisagens e uma excelente infraestrutura de bares e restaurantes.

            Preço de acesso: Gratuito, mas pode haver custos com transporte, como barcos ou taxis.
            O que fazer: Visite os restaurantes de frutos do mar, como o Café de la Musique ou o Restaurante da Ilha, onde pratos típicos de Angola são servidos.
          </li>
          <li>
            <strong> Fortaleza de São Miguel: </strong>

            A Fortaleza de São Miguel é um marco histórico da cidade, construída no século XVI, durante o período colonial. Atualmente, abriga um museu que conta a história da cidade e do país.

            Preço de entrada: Aproximadamente 2.000 AKZ por pessoa.
            O que fazer: Visitar as antigas muralhas, apreciar a vista panorâmica de Luanda e explorar as exposições históricas do museu.
          </li>
          <li><strong>Museu Nacional de Antropologia: </strong>

            Este museu oferece uma excelente visão sobre as tradições culturais e a história de Angola, com exposições sobre a diversidade étnica do país e artefatos da história pré-colonial.

            Preço de entrada: Cerca de 1.000 a 2.000 AKZ.
            O que fazer: Explorar as coleções de arte africana, roupas tradicionais e utensílios do dia a dia de várias etnias angolanas.</li>
          <li><strong>Mercado de Artesanato de Luanda (Mercado do Roque): </strong>
            Se você está em busca de lembranças e produtos locais, o Mercado de Artesanato de Luanda é o lugar ideal. Lá você encontrará peças de arte, joias, roupas típicas, instrumentos musicais e muito mais.

            Preço: Depende do produto, mas um souvenir típico pode variar de 500 AKZ a 15.000 AKZ.
            O que fazer: Comprar peças de artesanato e interagir com os vendedores locais para aprender mais sobre as tradições culturais angolanas.
          </li>
          <li><strong>Museu de História Natural de Luanda: </strong>
            Localizado no centro da cidade, este museu oferece uma visão detalhada sobre a fauna e a flora angolana, além de informações sobre a biodiversidade da região.

            Preço de entrada: Aproximadamente 1.500 a 3.000 AKZ.
            O que fazer: Explorar as exposições sobre a vida selvagem e aprender sobre os ecossistemas angolanos.
          </li>
          <li><strong>Mercado de Benfica: </strong>

            Outro mercado famoso em Luanda, o Mercado de Benfica é ideal para quem deseja conhecer a vida cotidiana dos locais e comprar uma variedade de produtos, como frutas, legumes, roupas e artesanato.

            Preço: Acessível, com preços de produtos locais a partir de 100 AKZ.
            O que fazer: Passear pelos corredores do mercado e experimentar a comida local.
          </li>
          <li><strong>Restaurantes e Gastronomia: </strong>

            Luanda é famosa pela sua gastronomia rica e variada, com pratos tradicionais que refletem a diversidade cultural do país. Entre os pratos que você não pode deixar de provar estão:

            Muamba de Galinha (prato típico à base de frango com molho de amendoim e quiabo)

            Caldeirada de Peixe (prato típico com peixe fresco cozido com batatas, legumes e especiarias)

            Funje (acompanha muitos pratos e é feito de farinha de milho)

            Preços médios: Uma refeição em um restaurante de médio porte pode variar entre 3.000 a 10.000 AKZ por pessoa, dependendo da escolha do local e do prato.

          </li>
          <li>
            <strong>Vida Noturna: </strong>
            Luanda tem uma vida noturna animada, com muitos bares, clubes e espaços de música ao vivo. A cidade oferece opções para todos os gostos, desde locais tranquilos para um drink até casas noturnas agitadas com DJs e música ao vivo.

            Preço médio de uma bebida: Cerca de 1.000 a 3.000 AKZ por drink em bares e clubes.
          </li>
          <li><strong>Transportes: </strong>

            Luanda tem uma infraestrutura de transportes variados. O sistema de táxis é bastante utilizado, e o preço das corridas pode variar de acordo com a distância.

            Preço médio de uma corrida de táxi: Entre 2.000 e 5.000 AKZ para trajetos curtos dentro da cidade.
            Transporte público: A cidade também conta com um sistema de ônibus, mas a qualidade do serviço pode variar.
          </li>
        </ol>

        <article className="HoteisCards">
          <Hotel
            nome="Hotel Epic Sana Luanda"
            image={Hotel1}
            hobby="Kz 60.000,00"
            avaliacao="⭐⭐⭐⭐⭐"
          />
          <Hotel
            nome="Hotel Presidente"
            image={Hotel2}
            hobby="Kz 45.000,00"
            avaliacao="⭐⭐⭐⭐☆"
          />
          <Hotel
            nome="Hotel Tropico"
            image={Hotel3}
            hobby="Kz 35.000,00"
            avaliacao="⭐⭐⭐⭐⭐"
          />
          <Hotel
            nome="Luanda Plaza Hotel"
            image={Hotel4}
            hobby="Kz 50.000,00"
            avaliacao="⭐⭐⭐⭐☆"
          />

        </article>
      </section>

      <Footer />
    </>
  )
}
export default LuandaPage;