import './Header.css'

export default function Header() {
    return (
        <header id="navBar">
            <><img src={require(`../../media/images/Rick.png`).default} alt="Rick" id="rickLogo" /></>
            <><h1 id="phrase">Rick & Morty</h1></>
            <></>
            <><button id="iconCV">CV<i className="fas fa-download" /></button></>
            <><button id="iconGitHub">GitHub<i className="fab fa-github" /></button></>
            <><button id="iconLinkedin">LinKedin<i className="fab fa-linkedin" /></button></>
        </header>
    )
}