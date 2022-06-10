import './App.css';
import perfil from './img/perfil.png';

function App() {
  return (
    <div className="App">

      <header class="header">
        <nav>
          <ul class="header-menu"> 
            <li><a href='#about'>Sobre mim</a></li>
            <li><a href='#techs'>Tecnologias</a></li>
            <li><a href='#contact'>Contato</a></li>
          </ul>
        </nav>
      </header>

      <main class="about" id='about'>
          <img src={perfil} alt='imagem'></img>
          <div>
            <hr/>
            <h1>Rodrigo Wendrel<br/>Ferreira de Oliveira</h1>
            <h2>Engenharia de Software - UnB</h2>
            <p>Brasília - Distrito Federal</p>

            <p>
              <span>
                Me chamo Rodrigo. Sou estudante do curso de engenharia de software na Universidade de Brasília.<br/>
                Atualmente estudando desenvolvimento web Full Stack e músico nas horas vagas.
              </span>
            </p>
          </div>
        </main>

        <hr/>

        <section class="container techs" id="techs">
          <h3 class="subtitle">Tecnologias</h3>

        <div class="list">
          <ul>
            <li><i class="devicon-html5-plain-wordmark colored"></i><strong> HTML5</strong></li>
            <li><i class="devicon-css3-plain-wordmark colored"></i><strong> CSS3</strong></li>
            <li><i class="devicon-javascript-plain colored"></i><strong> JavaScript</strong></li>
          </ul>

          <ul>
            <li><i class="devicon-bootstrap-plain colored"></i><strong> Bootstrap</strong></li>
            <li><i class="devicon-react-original colored"></i><strong> React</strong></li>
            <li><i class="devicon-mysql-plain colored"></i><strong> SQL</strong></li>
          </ul>

        </div> 
        </section>

        <footer class="contact" id="contact">

          <div class="container">
            <h3 class="subtitle">Contato</h3>

          <div class="list">
            <ul>
              <li><i class="devicon-github-original"></i><a href='https://github.com/rodwendrel'><strong> Github</strong></a></li>
              <li><i class="devicon-linkedin-plain"></i><a href='https://www.linkedin.com/in/rodwendrel/'><strong> Linkedin</strong></a></li>
            </ul>
          </div>
          </div>
        </footer>
    </div>
  );
}

export default App;
