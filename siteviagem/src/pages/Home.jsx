import Header from "../components/Header";
import Footer from "../components/Footer";

import "../styles/Home.css";

function Home() {

  const Will = {
    nome: "William Magno",
    image: William,
    hobby: "Namorada",

    oi: {
      nome: "William Magno Bola",
    image: William,
    hobby: "Namorada",
    }
  }

  const Fc = {
    nome: "Felipe Cagnin",
    image: Felipe, 
    hobby: "Flauta"
  }

  return (
    <>
      <Header imageLogo={imageLogo} titulo="DESAFIO 1 DE PROPS - REACT" />

      <section className="main">
        <Navbar />

        <article className="meiasso">
          <MeioDP props = {Fc}>
            
          </MeioDP>
          
          <MeioDP
            props={Will}
          ></MeioDP>
        </article>

        <Lado valor1="Amizade" valor2="Proatividade" valor3="União" />
      </section>

      <Footer
        textEmail="GroupOne001@gmail.com"
        imgGmail={imgGmail}
        textInsta="GroupOneDesenvolvedor_"
        imgInsta={imgInsta}
        textGroup="Gruop AlfaOne Development"
        imgGrupo={imgGrupo}
      />
    </>
  )
}
export default Home;