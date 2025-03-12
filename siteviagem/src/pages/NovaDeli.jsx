import Imagem from '../assets/NovaDeli.jpg';
import Fortaleza from '../assets/Fortaleza.jpg';
import Hyatt from '../assets/hyatt.jpg';
import Roseate from '../assets/Roseate.jpg';
import Sheraton from '../assets/Sheraton.jpg';
import Novotel from '../assets/Novotel.jpg';
import'../styles/NovaDeli.css';
import MeioDp from '../components/NovaDeli';

function NovaDeli (){
    return (
        <>
            <section>
            <h1>Viagem para Nova Deli</h1>
            <img src={Imagem} alt="" />
            <h2>Descrição:</h2>
            <p>
                Nova Deli é um destino que explode em cores, sabores e cultura! Imagine chegar em uma cidade onde história e modernidade se misturam em cada esquina.  
               Você começa explorando lugares incríveis, como o imponente Forte Vermelho e a Jama Masjid, uma das maiores mesquitas da Índia. 
               Depois, se perde nos bazares vibrantes de Chandni Chowk, cheios de especiarias, tecidos coloridos e artesanato único. 
               E a comida? Um verdadeiro espetáculo! Desde o famoso butter chicken até os petiscos de rua cheios de tempero e tradição.  
               Quer um toque moderno? O bairro de Hauz Khas tem cafés charmosos, galerias de arte e uma vida noturna incrível. 
               E para fechar com chave de ouro, o Portão da Índia iluminado à noite e a paz do Templo de Lótus vão te deixar apaixonado por esse lugar.  
               Se você quer uma viagem cheia de história, cultura e experiências inesquecíveis, Nova Deli é o seu destino! 🌍✨
               </p>
               <article>
                <h2>Lugares para visitar:</h2>
                <p>
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
                </p>
               </article>
               <article className="meiasso">
          <MeioDp nome="Hyatt Regency Delhi" imagem={Hyatt} preco="R$ 877.00" avaliacao="⭐⭐⭐⭐⭐"></MeioDp>
          <MeioDp nome="Roseate House New Delhi" imagem={Roseate} preco="R$ 1006.93" avaliacao="⭐⭐⭐⭐⭐"></MeioDp>
          <MeioDp nome="Sheraton New Delhi Hotel" imagem={Sheraton} preco="R$ 860.04" avaliacao="⭐⭐⭐⭐⭐"></MeioDp>
          <MeioDp nome="Novotel New Delhi Aerocity" imagem={Novotel} preco="R$ 672.69" avaliacao="⭐⭐⭐⭐⭐"></MeioDp>
        </article>
             </section>         
               </>

)
}

export default NovaDeli;