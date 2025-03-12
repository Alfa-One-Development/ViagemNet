import Header from "../components/Header";
import Footer from "../components/Footer"
import Viagens from "../components/Viagens";

import { Carousel } from "react-bootstrap";

import Lisboa from "../assets/Viagem1.webp"
import Balneario from "../assets/Viagem2.jpg"
import Indianapolis from "../assets/Viagem3.jpg"
import Novadeli from "../assets/Viagem4.jpg"
import Luanda from "../assets/Viagem5.jpg"

import "bootstrap/dist/css/bootstrap.min.css";

function Home() {

  return (
    <>
      <Header />
      <section className="Main">
        <Carousel >
          <Carousel.Item>
            <iframe src="https://www.youtube.com/embed/vwon_RDHylA?autoplay=1&loop=1&playlist=vwon_RDHylA&controls=0&rel=0&showinfo=0&"
              title="YouTube video player"
              frameborder="0"
              allow="autoplay; encrypted-media"
              allowfullscreen>
            </iframe>
          </Carousel.Item>
          <Carousel.Item>
            <img
              src={Balneario}
              loading="lazy"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              src={Lisboa}
              loading="lazy"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              src={Novadeli}
              loading="lazy"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              src={Indianapolis}
              loading="lazy"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              src={Luanda}
              loading="lazy"
            />
          </Carousel.Item>
        </Carousel>

        <Viagens />

      </section>

      <Footer />
    </>
  )
}
export default Home;