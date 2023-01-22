import img from "../img/victor_image.png"

import {FaRegFileAlt} from "react-icons/fa"

import "./Home.css"

function Home(){
    return (
        <section id="home">
            <h2>Home</h2>
            <div className="container">
                <div className="container_apresentation">
                    <h3>Olá, Sou Victor Azzolini!</h3>
                    <p>Desenvolvedor Front-End</p>
                    <a href="portfolio\src\assets\Curriculo_Victor_Azzolini.pdf">
                        Download CV <FaRegFileAlt />
                    </a>
                </div>
                <div>
                    <img className="image_victor" src={img} alt="minha imagem" />
                </div>
            </div>
        </section>
            
            
    )
};

export default Home;