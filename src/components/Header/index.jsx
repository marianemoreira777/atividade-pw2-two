import Style from "./style.module.css"

function Header (){
    return (
        <div className={Style.titulo}>
            <p>Minha lista de Tecnologias</p>
        </div>
    );
}

export default Header;