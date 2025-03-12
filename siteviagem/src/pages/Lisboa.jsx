import Header from "../components/Header";
import Footer from "../components/Footer";
import Lisboa from "../assets/Viagem1.webp"


import Hotel from "../components/Hotel";
import Hotel1 from "../assets/hoteis1.jpg"
import Hotel2 from "../assets/hoteis2.jpg"
import Hotel3 from "../assets/hoteis3.jpg"
import Hotel4 from "../assets/hoteis4.jpg"

import "../styles/Page.css";
import "bootstrap/dist/css/bootstrap.min.css";

function LisboaPage() {
    return (
        <>
            <Header />

            <section className="Page">
                <img src={Lisboa} />
                <h1>Lisboa</h1>
                <p className="SubTitle">
                    Lisboa é a capital e a maior cidade de Portugal, localizada na região
                    Oeste do país, às margens do Rio Tejo. Conhecida pela sua rica história,
                    cultura vibrante e arquitetura única, Lisboa é um destino turístico popular.
                    A cidade tem sido um importante centro comercial, cultural e histórico,
                    sendo também um ponto de encontro entre culturas europeias, africanas e
                    brasileiras. Lisboa é famosa pelas suas colinas, ruas estreitas e miradouros
                    com vistas deslumbrantes da cidade e do rio.
                </p>

                <h4>O que fazer em Lisboa:</h4>

                <ol>
                    <li>
                        <strong> Torre de Belém: </strong>
                        Visite a icônica Torre de Belém, um símbolo histórico de Lisboa. Construída no século XVI, esta fortaleza foi originalmente projetada para defender a cidade e é agora um dos monumentos mais emblemáticos de Portugal. Não deixe de visitar o Mosteiro dos Jerónimos nas proximidades, um exemplo impressionante de arquitetura manuelina.
                    </li>
                    <li>
                        <strong>Monumento aos Descobrimentos: </strong>
                        Localizado à beira do Rio Tejo, o Monumento aos Descobrimentos celebra os navegadores portugueses que exploraram o mundo durante a Era dos Descobrimentos. Suba até o topo para uma vista panorâmica de Lisboa e do rio.
                    </li>
                    <li>
                        <strong> Baixa e Chiado: </strong>
                        Explore os bairros históricos de Baixa e Chiado, que são o coração comercial e cultural de Lisboa. A Baixa é famosa pelas suas largas avenidas e praças, enquanto Chiado é o local ideal para lojas de luxo, cafés históricos e teatros.
                    </li>
                    <li>
                        <strong> Museu Nacional de Arte Antiga: </strong>
                        Mergulhe na história da arte portuguesa e europeia no Museu Nacional de Arte Antiga, que alberga uma vasta coleção de obras-primas, incluindo pinturas, esculturas e artes decorativas, de artistas como Bosch, Dürer e Zurbarán.
                    </li>
                    <li>
                        <strong>Gastronomia e Restaurantes: </strong>
                        Lisboa tem uma cena gastronômica rica, com destaque para pratos tradicionais como bacalhau à brás, pastéis de nata e o famoso ginjinha. Os mercados, como o Mercado da Ribeira (Time Out Market), oferecem uma mistura de sabores locais e internacionais. Não perca os restaurantes de peixe e frutos do mar, como o Cervejaria Ramiro e o Sea Me.
                    </li>
                    <li>
                        <strong>Vida Noturna: </strong>A vida noturna em Lisboa é animada e variada, com opções para todos os gostos. Bairros como o Bairro Alto, Cais do Sodré e LX Factory são famosos pelos seus bares, discotecas e casas de fado. O Rio Tejo também oferece opções de bares flutuantes e embarcações para quem quer curtir a vista à noite.
                    </li>
                    <li>
                        <strong>Transportes: </strong>Lisboa tem um excelente sistema de transporte público, incluindo uma extensa rede de ônibus, trens, metrô e elétricos (o famoso "bonde"). O sistema de metrô é eficiente e conecta vários pontos importantes da cidade. Para quem gosta de explorar a cidade de forma mais descontraída, o aluguel de bicicletas e scooters elétricas também é uma ótima opção.
                    </li>
                </ol>

                <article className="HoteisCards">
                    <Hotel
                        nome="Hotel Avenida Palace"
                        image={Hotel1}
                        hobby="€176,00"
                        avaliacao="⭐⭐⭐⭐⭐"
                    />
                    <Hotel
                        nome="Hotel Mundial"
                        image={Hotel2}
                        hobby="€182,00"
                        avaliacao="⭐⭐⭐⭐☆"
                    />
                    <Hotel
                        nome="Hotel Lisboa Plaza"
                        image={Hotel3}
                        hobby="€228,00"
                        avaliacao="⭐⭐⭐⭐⭐"
                    />
                    <Hotel
                        nome="Hotel Altis Belém"
                        image={Hotel4}
                        hobby="€320,00"
                        avaliacao="⭐⭐⭐⭐⭐"
                    />
                </article>
            </section>

            <Footer />
        </>
    );
}

export default LisboaPage;
