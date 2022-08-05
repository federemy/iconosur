import React, {useState, useEffect} from 'react'
import './App.css';
import Article from './components/Article';
import Title from './components/Title';
import FooterMenu from './components/FooterMenu';
import banner300x250 from './images/banner300x250.jpeg';
import banner728x90 from './images/banner728x90.jpeg';

const App = () => {

  const [infos, setInfos] = useState([]);
  const [saluds, setSaluds] = useState([]);
  const [titles, setTitleSalud] = useState([]);
  const [menus, setMenu] = useState([]);

  useEffect( () => {
      getInfo()
      getMenu()
  }, [] )

  const getInfo = async () => {
      const response = await fetch(`https://api.iconosur.com/v1/json/frontend/home/`)
      const data = await response.json()
      setInfos(data.modules[0].items)
      setSaluds(data.modules[1].items)
      setTitleSalud(data.modules)
  }

    const getMenu = async () => {
      const response = await fetch(`https://api.iconosur.com/v1/json/frontend/menu/`)
      const data = await response.json()
      setMenu(data.items.footer)
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <div className="App">
      <header className="App-header">
        <nav className="padding">
          <div className="nav-container">
            <a className="App-logo" href="https://iconosur.com/" target="_blank">
              <svg xmlns="http://www.w3.org/2000/svg" width="94.361" height="22.164" viewBox="405.334 121.35 94.361 22.164"><g data-name="Group 11240"><path d="m478.19 121.35 5.589 1.675 5.585-1.675-5.585 8.583-5.59-8.583Z" fill="#fff" fill-rule="evenodd" data-name="Path 8773"/><path d="M491.116 132.911h3.241v2.002h.039c1.218-1.561 2.173-2.268 4.078-2.268.384 0 .841.018 1.221.096v3.146c-.608-.172-1.221-.304-1.848-.304-2.288 0-3.374 1.16-3.374 3.145v4.401h-3.357v-10.218Z" fill="#fff" fill-rule="evenodd" data-name="Path 8772"/><path d="M486.459 141.758h-.043c-.606.86-2.21 1.756-4.173 1.756-1.736 0-4.387-.671-4.387-3.68v-6.923h3.355v5.912c0 1.41.745 2.099 2.288 2.099 1.811 0 2.842-1.013 2.842-2.9v-5.111h3.357v10.218h-3.239v-1.371Z" fill="#fff" fill-rule="evenodd" data-name="Path 8771"/><path d="M468.201 139.969c.151.873.759 1.447 2.496 1.447 1.524 0 2.418-.363 2.418-1.107 0-.572-.285-.799-1.904-1.028l-3.051-.419c-2.135-.289-3.356-.953-3.356-2.899 0-2.769 2.802-3.432 5.587-3.432 4.709 0 5.815 1.544 6.042 3.45h-3.696c-.192-1.047-1.299-1.352-2.271-1.352-.876 0-2.194.075-2.194 1.086 0 .477.251.801 1.698.951l2.327.251c3.413.362 4.519 1.371 4.519 3.146 0 3.029-3.393 3.451-6.311 3.451-3.87 0-5.836-1.125-6.005-3.545h3.701Z" fill="#fff" fill-rule="evenodd" data-name="Path 8770"/><path d="M457.291 132.531c4.041 0 6.75 1.639 6.75 5.491 0 3.85-2.709 5.492-6.75 5.492-4.043 0-6.75-1.642-6.75-5.492 0-3.852 2.707-5.491 6.75-5.491m0 8.618c2.077 0 3.28-1.124 3.28-3.127 0-2.004-1.203-3.127-3.28-3.127-2.079 0-3.28 1.123-3.28 3.127 0 2.003 1.201 3.127 3.28 3.127Z" fill="#fff" fill-rule="evenodd" data-name="Path 8769"/><path d="M446.137 137.336c0-1.411-.744-2.098-2.25-2.098-1.563 0-2.877.78-2.877 2.956v4.935h-3.355v-10.218h3.24v1.489h.038c.607-.86 2.21-1.755 4.179-1.755 1.731 0 4.38.668 4.38 3.68v6.804h-3.355v-5.793Z" fill="#fff" fill-rule="evenodd" data-name="Path 8768"/><path d="M429.856 132.531c4.043 0 6.75 1.639 6.75 5.491 0 3.85-2.707 5.492-6.75 5.492s-6.751-1.642-6.751-5.492c0-3.852 2.708-5.491 6.751-5.491m0 8.618c2.076 0 3.278-1.124 3.278-3.127 0-2.004-1.202-3.127-3.278-3.127-2.079 0-3.281 1.123-3.281 3.127 0 2.003 1.202 3.127 3.281 3.127Z" fill="#fff" fill-rule="evenodd" data-name="Path 8767"/><path d="M419.273 136.686c-.4-1.353-1.431-1.791-2.784-1.791-2.076 0-3.281 1.123-3.281 3.127 0 2.003 1.205 3.127 3.281 3.127 1.49 0 2.613-.801 2.784-2.078h3.469c-.608 3.624-3.205 4.443-6.539 4.443-3.851 0-6.464-1.642-6.464-5.492 0-3.852 2.71-5.491 6.75-5.491 2.594 0 5.626.782 6.253 4.155h-3.469Z" fill="#fff" fill-rule="evenodd" data-name="Path 8766"/><path d="M405.334 129.289h3.356v2.366h-3.356v-2.366m0 3.622h3.356v10.218h-3.356v-10.218Z" fill="#fff" fill-rule="evenodd" data-name="Path 8765"/></g></svg>
            </a>
            
            <a
              className="nav-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            > 
              Federico Remy
            </a>
          </div>
        </nav>
      </header>
      <div className="box padding">
        {titles.slice(0, 1).map(title =>(
          <Title 
            title={title.title}
            href={title.href} 
          />
        ))}
        
        <div className="box-article">
          {saluds.map(info => (
            <Article
              key={info.id}
              id={info.id} 
              label={info.label.name} 
              labelUrl={info.label.href} 
              title={info.title}
              canonical={info.canonical}
              media={info.media.thumb}
              date={info.date}
            />
          ))}
        </div>
        
      </div>
      
      <div className="box padding">
      
        <div className="banner300x250">
          <img src={banner300x250} alt=""/>
        </div>
        <div className="banner728x90">
          <img src={banner728x90} alt=""/>
        </div>
      </div>


      <div className="box padding">
        
        {titles.slice(1, 2).map(title =>(
          <Title 
            title={title.title}
            href={title.href} 
          />
        ))}
        <div className="box-article">
          {infos.map(info =>( 
            <Article 
              key={info.id}
              id={info.id} 
              label={info.label.name} 
              labelUrl={info.label.href} 
              title={info.title}
              canonical={info.canonical}
              media={info.media.thumb}
              date={info.date}
            />
          ))}
        </div>
        
      </div>

      <div className="box padding">
        <div className="banner728x90">
          <img src={banner728x90} alt=""/>
        </div>
      </div>

      <footer>
        <button className="footer-subir" onClick={scrollToTop} title="Subir">Subir <svg xmlns="http://www.w3.org/2000/svg" width="9.345" height="9.345" viewBox="95.655 0.753 9.345 9.345"><path d="m95.655 5.426 4.672-4.673L105 5.426l-.818.818-3.27-3.271v7.126h-1.169V2.973l-3.27 3.27-.818-.817Z" fill="#f8f1e9" fill-rule="evenodd" data-name="path"/></svg></button>
        
        <div className="footer-menu padding">
          {menus.map(menu => (
            <FooterMenu
                name={menu.name}
                href={menu.href}
                target={menu.target}
              />
            ))}
        </div>
        <div className="footer-bottom padding">
          <p>Copyright © {new Date().getFullYear() }. All rights reserved  </p>
          <svg xmlns="http://www.w3.org/2000/svg" width="72.115" height="25" viewBox="1196.064 290.001 72.115 25"><path d="M1196.064 290.001v25h72.116v-25h-72.116Zm57.65 4.903 3.76-1.129-3.76 5.776-3.761-5.776 3.761 1.129Zm-50.533 13.532h-2.259v-6.88h2.259v6.88Zm0-7.724h-2.259v-1.592h2.259v1.592Zm5.246 6.388c1 0 1.762-.54 1.875-1.4h2.332c-.405 2.44-2.152 2.99-4.4 2.99-2.592 0-4.35-1.106-4.35-3.697 0-2.592 1.825-3.693 4.543-3.693 1.745 0 3.788.526 4.207 2.796h-2.332c-.27-.91-.964-1.204-1.875-1.204-1.397 0-2.206.755-2.206 2.101 0 1.35.809 2.107 2.206 2.107Zm8.994 1.59c-2.717 0-4.538-1.106-4.538-3.697 0-2.592 1.82-3.693 4.538-3.693 2.725 0 4.546 1.101 4.546 3.693 0 2.59-1.82 3.697-4.546 3.697Zm13.22-.254h-2.262v-3.902c0-.951-.495-1.412-1.513-1.412-1.053 0-1.935.525-1.935 1.992v3.322h-2.257v-6.88h2.18v1.003h.026c.41-.58 1.487-1.183 2.813-1.183 1.163 0 2.947.45 2.947 2.477v4.583Zm5.245.254c-2.72 0-4.538-1.106-4.538-3.697 0-2.592 1.818-3.693 4.538-3.693 2.722 0 4.546 1.101 4.546 3.693 0 2.59-1.824 3.697-4.546 3.697Zm8.896 0c-2.605 0-3.927-.755-4.043-2.383h2.49c.105.588.513.973 1.682.973 1.024 0 1.628-.244 1.628-.745 0-.385-.193-.537-1.283-.693l-2.052-.278c-1.44-.2-2.26-.647-2.26-1.955 0-1.86 1.887-2.309 3.76-2.309 3.17 0 3.914 1.038 4.065 2.322h-2.486c-.13-.707-.873-.911-1.528-.911-.591 0-1.474.05-1.474.731 0 .324.167.54 1.141.64l1.567.17c2.298.242 3.039.92 3.039 2.117 0 2.04-2.28 2.32-4.246 2.32Zm12.917-.254h-2.183v-.925h-.025c-.41.578-1.489 1.179-2.811 1.179-1.166 0-2.95-.45-2.95-2.475v-4.658h2.256v3.979c0 .947.505 1.411 1.542 1.411 1.218 0 1.91-.68 1.91-1.954v-3.436h2.261v6.879Zm6.728-4.877c-.407-.117-.82-.202-1.242-.202-1.543 0-2.27.777-2.27 2.113v2.966h-2.262v-6.88h2.183v1.348h.023c.824-1.053 1.461-1.528 2.748-1.528.256 0 .563.014.82.064v2.119Z" fill="#fff" fill-rule="evenodd" data-name="Path 397"/></svg>
        </div>
      </footer>
     


    </div>
  );
}

export default App;
