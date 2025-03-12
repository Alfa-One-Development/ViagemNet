import FotoLisba from '../assets/Lisboa.jpg'
import "../styles/Lisboa.css"
import Estrela from '../components/Estrela'

function Lisboa() {
    return (
        <div>

            <h1> Sobre Lisboa🌆</h1>

            <section>
                <article className='textinho'>
                    <img src={FotoLisba} />


                    <p>Lisboa, a capital de Portugal, é uma cidade vibrante e cheia de história, situada às margens do rio Tejo.
                        Conhecida por suas colinas, ruas de paralelepípedos e arquitetura encantadora, Lisboa combina o antigo e o moderno de maneira única.
                        Os visitantes podem explorar bairros icônicos como Alfama, com suas ruelas estreitas e casas coloridas, e Belém, famoso por seus monumentos históricos e os deliciosos pastéis de nata.
                        A cidade também é famosa por sua vida noturna animada, deliciosa gastronomia e uma rica cena cultural, incluindo museus, teatros e festivais.
                        Com um clima ameno e vistas deslumbrantes, Lisboa é um destino que encanta a todos que a visitam.</p>
                </article>
            </section>

            <br  />
            

            <h2>O que fazer 3 dias em Lisboa?🧐</h2>
            <ul className='ul1'>
                <li> Dia 1 :
                    Pode ir ao bairro Alfama, onde irá visitar a Catedral de Lisboa, 
                    Logo em seguida vá para o Castelo de São Jorge para ver uma bela vista.
                </li>
                <br  />
                <li>
                    Dia 2 :
                    Visite a Torre de Bélem, e não deixe de experimentar os pasteis de belém e de nata, 
                    Mais tarde vá no Museu Calouste Gulbenkian, 
                    pela noite vá no bairro alto conecido pela sua famosa vibe noturna.
                </li>
                <br  />
                <li>
                    Dia 3 :
                    Comece o dia visitando o Parque das Nações, onde ira ver o aquario de Lisboa, 
                    mais tarde visite o Pavilhão do Conhecimento, no fim da viajem para relaxar jante em algum restaurante com vista para o rio.
                </li>
            </ul>
<br  />
            <h3>Quanto irei gastar em Lisboa? 💸</h3>
            <ul className='ul2'>
                <li>
                    O custo de uma viagem a Lisboa pode variar dependendo do
                    tipo de acomodação escolhida, do tipo de transporte e do tipo de ativ
                    idades escolhidas, mas em média, um turista pode gastar entre
                    500 a 1000 euros por dia, dependendo do seu estilo de vida e do
                    tipo de atividades que você escolher.
                </li>
                <li>
                    No total iriamos gastar em torno de 5 mil reais em Lisboa, porque a passagem pode variar entre varios preços,
                    2.000 e 4.500 reais (ida e volta) em classe econômica, dependendo da época do ano e da companhia aérea.
                </li>
            </ul>


            <center>
                <Estrela />
            </center>
        </div>

    )
}

export default Lisboa