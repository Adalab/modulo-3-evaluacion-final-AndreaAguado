import '../styles/App.scss';
import logo from '../images/Rick_and_Morty_logo.png';

import callToApi from '../services/callToApi';

import { useState, useEffect } from 'react';

import Filters from './Filters';
import CharacterList from './CharacterList';
import CharacterCard from './CharacterCard';

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
        <CharacterCard character={character}></CharacterCard>
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
        <CharacterList renderCharacters={renderCharacters}></CharacterList>
        {/* <section className="characters_list_section" >
          <ul className="characters_list">
            {renderCharacters()}
          </ul>
        </section> */}
      </main>
      <footer className="footer">
        <small className="footer_small"> &copy; Andrea Aguado 2021</small>

      </footer>
    </div>
  );
}

export default App;
