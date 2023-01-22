import "./NavBar.css"

function NavBar(){
    return (
         <nav className="navbar">
            <a className="name_logo" href="#home">Victor Azzolini</a>
            <ul className="list">
                <li className="list_item"><a href="#home">Home</a></li>
                <li className="list_item"><a href="#sobre">Sobre</a></li>
                <li className="list_item"><a href="#portfolio">Portfolio</a></li>
                <li className="list_item"><a href="#contato">Contato</a></li>
            </ul>
        </nav>
    )
};

export default NavBar;