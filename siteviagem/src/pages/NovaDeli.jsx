import Imagem from '../assets/NovaDeli.jpg';
import Fortaleza from '../assets/Fortaleza.jpg';
import Hyatt from '../assets/hyatt.jpg';
import Roseate from '../assets/roseate.jpg';
import Sheraton from '../assets/sheraton.jpg';
import Novotel from '../assets/novotel.jpg';
import'../styles/NovaDeli.css';
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
                    <ul>
                        <li>Fortaleza Vermelha</li>
                        <img className='imgfort' src={Fortaleza} alt="" />
                        <li>Jama Masjid</li>
                        <li>Chandni Chowk</li>
                        <li>Templo de Lótus</li>
                    </ul>
                </p>
               </article>
               <article className="meiasso">
          <MeioDP nome="Hyatt Regency Delhi" image={Hyatt.jpg} preco="R$ 877"></MeioDP>
          <MeioDP nome="Roseate House New Delhi" image={Roseate.jpg} preco="R$ 1006"></MeioDP>
          <MeioDP nome="Sheraton New Delhi Hotel" image={Sheraton.jpg} preco="R$ 860"></MeioDP>
          <MeioDP nome="Novotel New Delhi Aerocity" image={Novotel.jpg} preco="R$ 672"></MeioDP>
        </article>
             </section>         
               </>

)
}

export default NovaDeli;