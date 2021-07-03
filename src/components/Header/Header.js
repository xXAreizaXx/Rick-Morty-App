import './Header.css'
import CV from '../../media/files/CV.pdf'

export default function Header() {
    return (
        <header id="navBar">
            <><img src={require(`../../media/images/Rick.png`).default} alt="Rick" id="rickLogo" /></>
            <div id="phraseDiv"><h1 id="phrase">Rick & Morty</h1></div>
            <></>
            <><a href={CV} download="CV" title="CV" target="_blank" rel="noreferrer"><button id="iconCV">CV<i className="fas fa-download" /></button></a></>
            <><a href="https://github.com/xXAreizaXx" target="_blank" rel="noreferrer"><button id="iconGitHub">GitHub<i className="fab fa-github" /></button></a></>
            <><a href="https://www.linkedin.com/in/jorge-areiza-141488199/" target="_blank" rel="noreferrer"><button id="iconLinkedin">LinKedin<i className="fab fa-linkedin" /></button></a></>
        </header>
    )
}