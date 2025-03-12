import Header from "../components/Header";
import Footer from "../components/Footer"

import Hotel from "../components/Hotel";
import Hotel1 from "../assets/hoteis1.jpg"
import Hotel2 from "../assets/hoteis2.jpg"
import Hotel3 from "../assets/hoteis3.jpg"
import Hotel4 from "../assets/hoteis4.jpg"

import Novadeli from "../assets/Viagem4.jpg"

import "../styles/Page.css"
import "bootstrap/dist/css/bootstrap.min.css";

function NovaDeliPage() {
    return (
        <><Header />

            <section className="Page">
                <img src={Novadeli} alt="" />
                <h1>Nova Deli</h1>
                <p>
                    Nova Deli é um destino que explode em cores, sabores e cultura! Imagine chegar em uma cidade onde história e modernidade se misturam em cada esquina.
                    Você começa explorando lugares incríveis, como o imponente Forte Vermelho e a Jama Masjid, uma das maiores mesquitas da Índia.
                    Depois, se perde nos bazares vibrantes de Chandni Chowk, cheios de especiarias, tecidos coloridos e artesanato único.
                    E a comida? Um verdadeiro espetáculo! Desde o famoso butter chicken até os petiscos de rua cheios de tempero e tradição.
                    Quer um toque moderno? O bairro de Hauz Khas tem cafés charmosos, galerias de arte e uma vida noturna incrível.
                    E para fechar com chave de ouro, o Portão da Índia iluminado à noite e a paz do Templo de Lótus vão te deixar apaixonado por esse lugar.
                    Se você quer uma viagem cheia de história, cultura e experiências inesquecíveis, Nova Deli é o seu destino! 🌍✨
                </p>

                <h4>O que fazer em Nova Deli: </h4>

                <ol>
                    <li>Fortaleza Vermelha : A Fortaleza Vermelha (Lal Qila) é um dos monumentos mais emblemáticos da Índia, localizada em Nova Délhi.
                        Construída no século XVII pelo imperador Shah Jahan, da dinastia Mogol, a fortaleza serviu como residência oficial dos imperadores mogóis por quase 200 anos.
                        Feita de arenito vermelho, a estrutura impressiona por sua arquitetura grandiosa,
                        que combina elementos persas, islâmicos e hindus. Dentro da fortaleza, há palácios, jardins e salões de audiência.
                        Hoje, a Fortaleza Vermelha é um símbolo da independência da Índia, sendo o local onde o primeiro-ministro faz seu discurso no Dia da Independência,
                        em 15 de agosto. O local é Patrimônio Mundial da UNESCO e uma das atrações mais visitadas do país. </li>
                    <br></br>
                    <li>Jama Masjid : A Jama Masjid de Nova Délhi é uma das maiores e mais importantes mesquitas da Índia.
                        Construída entre 1650 e 1656 pelo imperador Shah Jahan, o mesmo que mandou erguer o Taj Mahal, a mesquita é um exemplo magnífico da arquitetura mogol.
                        Feita de mármore branco e arenito vermelho, a Jama Masjid possui três grandes cúpulas,
                        dois minaretes de 40 metros de altura e um vasto pátio que pode acomodar até 25 mil fiéis.
                        Localizada no coração de Old Delhi, perto do movimentado mercado Chandni Chowk,
                        a mesquita é um importante centro religioso e um dos pontos turísticos mais visitados da capital indiana.</li>
                    <br></br>
                    <li>Chandni Chowk : Chandni Chowk é um dos mercados mais antigos e movimentados de Nova Délhi,
                        localizado no coração de Old Delhi, próximo à Jama Masjid e à Fortaleza Vermelha. Fundado no século XVII pelo imperador Shah Jahan,
                        o mercado já foi um dos centros comerciais mais importantes do Império Mogol.
                        Hoje, Chandni Chowk é famoso por suas ruas estreitas e vibrantes, repletas de lojas que vendem de tudo: especiarias, tecidos, joias, eletrônicos e comida de rua.
                        É um paraíso para quem busca a autêntica cultura indiana, com sabores e aromas únicos.
                        Apesar do trânsito caótico e da multidão, o mercado é um destino imperdível para turistas e locais,
                        oferecendo uma experiência inesquecível da vida e do comércio tradicional de Délhi.</li>
                    <br></br>
                    <li>Templo de Lótus : O Templo de Lótus, localizado em Nova Délhi, é um dos marcos arquitetônicos mais impressionantes da Índia.
                        Inaugurado em 1986, ele foi projetado pelo arquiteto Fariborz Sahba e tem um formato inspirado em uma flor de lótus, símbolo de pureza e paz.
                        O templo pertence à Fé Bahá'í, uma religião que promove a unidade entre os povos, e está aberto a pessoas de todas as crenças.
                        Composto por 27 pétalas de mármore branco, sua estrutura se destaca pela beleza e simplicidade, sem imagens ou símbolos religiosos no interior.
                        Cercado por nove espelhos d’água, o local é um refúgio de tranquilidade em meio ao agito da cidade, sendo um dos pontos turísticos mais visitados de Nova Délhi.</li>
                </ol>

                <article className="HoteisCards">
                    <Hotel
                        nome="The Imperial New Delhi"
                        image={Hotel1}
                        hobby="₹18,000.00"
                        avaliacao="⭐⭐⭐⭐⭐"
                    />
                    <Hotel
                        nome="Taj Palace, New Delhi"
                        image={Hotel2}
                        hobby="₹12,500.00"
                        avaliacao="⭐⭐⭐⭐⭐"
                    />
                    <Hotel
                        nome="The Leela Palace New Delhi"
                        image={Hotel3}
                        hobby="₹14,000.00"
                        avaliacao="⭐⭐⭐⭐⭐"
                    />
                    <Hotel
                        nome="ITC Maurya, a Luxury Collection Hotel"
                        image={Hotel4}
                        hobby="₹16,000.00"
                        avaliacao="⭐⭐⭐⭐⭐"
                    />

                </article>
            </section>

            <Footer />
        </>

    )
}

export default NovaDeliPage;