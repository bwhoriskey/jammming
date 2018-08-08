import React, { Component } from 'react';
import './App.css';
import Playlist from '../Playlist/Playlist';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResults: [
        {
          name: 'Rude.',
          artist: 'Eternal Youth',
          album: 'Eternal Youth',
          id: '5'
        }
      ],

      playlistName: 'Lo-fi',

      playlistTracks: [
        {
          name: 'Rude.',
          artist: 'Eternal Youth',
          album: 'Eternal Youth',
          id: '5'
        },

        {
          name: 'Rude.',
          artist: 'Eternal Youth',
          album: 'Eternal Youth',
          id: '4'
        },

        {
          name: 'Rude.',
          artist: 'Eternal Youth',
          album: 'Eternal Youth',
          id: '3'
        }
      ]
    }

    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
  }

  addTrack(track) {
    if (this.state.playlistTracks.find(savedTrack => savedTrack.id === track.id)) {
      return;
    }
  }

  removeTrack(track) {
    let newplayList = this.state.playlistTracks;
    newplayList = newplayList.filter(trackRemoved => trackRemoved.id !== track.id);
    this.setState({playlistTracks: newplayList});
  }

  render() {
    return (
      <div>
        <h1>Ja<span class="highlight">mmm</span>ing</h1>
        <div className="App">
          <SearchBar />
          <div className="App-playlist">
            <SearchResults
              searchResults={this.state.searchResults}
              onAdd={this.addTrack}
            />
            <Playlist
              playlistName={this.state.playlistName}
              playlistTracks={this.state.playlistTracks}
              onRemove={this.removeTrack}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
