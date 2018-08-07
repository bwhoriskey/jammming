import React, { Component } from 'react';
import './App.css';
import Playlist from '../Playlist/Playlist';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResults: {
        name: 'Rude.',
        artist: 'Eternal Youth',
        album: 'Eternal Youth',
        id: '5'
      }
    }
  }

  render() {
    return (
      <div>
        <h1>Ja<span class="highlight">mmm</span>ing</h1>
        <div className="App">
          <SearchBar />
          <div className="App-playlist">
            <SearchResults searchResults={this.state.SearchResults}/>
            <Playlist />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
