import '../styles/App.scss';
import logo from '../images/Rick_and_Morty_logo.png';

import callToApi from '../services/callToApi';

import { useState, useEffect } from 'react';

import Filters from './Filters';

function App() {

  const [charactersData, setCharactersData] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    callToApi().then(response => {
      console.log(response);
      setCharactersData(response);
    });
  }, []);

  const renderCharacters = () => {
    const filteredData = charactersData.filter((character) => {
      return character.name.toLocaleLowerCase().includes(search.toLocaleLowerCase());
    })
    return filteredData.map((character) => {
      return (
        <li key={character.id} id={character.id} className="character_card">
          <img className="character_img" src={character.photo} alt={character.name} />
          <div className="character_info">
            <p className="info_item">{character.name}</p>
            <p className="info_item">{character.species}</p>
          </div>
        </li>
      )
    })
  }

  const handleSearch = (ev) => {
    ev.preventDefault();
    setSearch(ev.target.value);
  }

  return (
    <div className="page">
      <header className="header">
        <img className="header_logo" src={logo} alt="Rick and Morty logo" />
      </header>
      <main className="main">
        <Filters handleSearch={handleSearch}></Filters>
        {/* <form action="">
          <input onKeyUp={handleSearch} className="text_input" type="text" />
        </form> */}
        <section className="characters_list_section" >
          <ul className="characters_list">
            {renderCharacters()}
          </ul>
        </section>
      </main>
      <footer className="footer">
        <small className="footer_small"> &copy; Andrea Aguado 2021</small>

      </footer>
    </div>
  );
}

export default App;
