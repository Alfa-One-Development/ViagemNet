import Header from "../components/Header";
import Footer from "../components/Footer"

import HelloKitty from "../assets/helokity.jpeg"

import { useEffect } from "react";

import "../styles/Page.css"

function SecretPage() {

    useEffect(() => {
        document.title = `Página do Usuário - Trivago`;
      }, []);

    return (
        <>
            <Header />

            <section className="Page">
                <img src={HelloKitty} />
                <h1>Bem Vindo á Página do Usuário(Hello Kitty)</h1>
                <p>Hello Kitty (Japanese: ハロー・キティ, Hepburn: Harō Kiti), also known by her real name Kitty White (キティ・ホワイト, Kiti Howaito), is a fictional character created by Yuko Shimizu, currently designed by Yuko Yamaguchi, and owned by the Japanese company Sanrio. Sanrio depicts Hello Kitty as a British anthropomorphized white cat with a red bow and no visible mouth. According to her backstory, she lives in a London suburb with her family, and is close to her twin sister Mimmy, who is depicted with a yellow bow.

                    Hello Kitty was created in 1974 and the first item, a vinyl coin purse, was introduced in 1975. Originally, Hello Kitty was only marketed towards pre-teenage girls, but beginning in the 1990s, the brand found commercial success among teenage and adult consumers as well. Hello Kitty's popularity also grew with the emergence of kawaii (cute) culture. The brand went into decline in Japan after the 1990s, but continued to grow in the international market. By 2010 the character was worth $5 billion a year and The New York Times called her a "global marketing phenomenon". She did about $8 billion at retail in 2013.

                    UNICEF has appointed Hello Kitty children's ambassador and the Japanese government appointed her ambassador of tourism. There are Sanrio theme parks based on Hello Kitty: Harmonyland in Hiji, Ōita, Japan, Sanrio Puroland in Tama New Town, Tokyo, Japan, and Hello Kitty Shanghai Times in Shanghai, China. The Hello Kitty media franchise has grown to include a number of animated series targeted towards children, as well as several comics, animated films, video games, books, music albums and other media productions. A variety of products have featured the character over the years, like school supplies, clothing, accessories, and toys, along with other items. In 2008, there were over 50,000 different Hello Kitty branded products.</p>
            </section>

            <Footer />
        </>
    )
}
export default SecretPage;