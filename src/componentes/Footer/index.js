import './footer.css'

const Footer = () => {
    return (
        <footer className='footer'>
            <div className='redes'>
            <a href=""><img src='./imagens/fb.png' alt='Logo do Facebook' /></a>
            <a href=""><img src='./imagens/ig.png' alt='Logo do Instagram' /></a>
            <a href=""><img src='./imagens/tw.png' alt='Logo do Twitter' /></a>
            </div>
            <div className='logo'>
            <a href=""><img src='./imagens/logo.png' alt='Logo do Youtube' /></a>
            </div>
            <p>Desenvolvido por Alura</p>
        </footer>
    )
}

export default Footer