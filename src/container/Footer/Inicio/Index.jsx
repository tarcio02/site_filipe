import { StyleFooter } from "./Style"

function Footer(){
    return (
        <StyleFooter>
            <h1>Filipe <span>Lima</span></h1>
            <p>Acesse minhas redes sociais</p>
            <div className="social">
                <i className="fa-brands fa-whatsapp"></i>
                <i className="fa-brands fa-instagram"></i>
            </div>
            <p>&copy; 2025 Filipe Lima - Todos os direitos reservados - Desenvolvido por <a href="https://www.instagram.com/star_teix/">Tárcio Teixeira</a></p>
        </StyleFooter>
    )
}

export default Footer