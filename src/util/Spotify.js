const clientID = '1d02364c688446999d18ebcc5ad0614e'
const redirectURI = 'http://localhost:3000/'
let accessToken;

const Spotify = {
  getAccessToken() {
    if (accessToken) {
      return accessToken;
    }

    const URLToken = window.location.href.match(/access_token=([^&]*)/);
    const URLExpiry = window.location.href.match(/expires_in=([^&]*)/);

    if (URLToken && URLExpiry) {
      accessToken = URLToken[1];
      const expiresIn = Number(URLExpiry[1]);
      window.setTimeout(() => accessToken = '', expiresIn * 1000);
      window.history.pushState('Access Token', null, '/');

      return accessToken;
    } else {
      window.location = `https://accounts.spotify.com/authorize?client_id=${clientID}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirectURI}`;
    }
  },

  search(term) {
    const accessToken = Spotify.getAccessToken();
    const searchURL = `https://api.spotify.com/v1/search?type=track&q=${term}`;
    return fetch(searchURL, {headers: {Authorization: `Bearer ${accessToken}`}})
      .then(response => {
        if (response.ok) {
          return response.json();
        }
      })
      .then(jsonResponse => {
        return jsonResponse.tracks.items.map( track => ({
          id: track.id,
          name : track.name,
          artist: track.artists[0].name,
          album: track.album.name,
          uri: track.uri
      }))
    })
  }
}
// Reference snippet of returned JSON
// {
//   "tracks": {
//     "href": "https://api.spotify.com/v1/search?query=The+Railsplitters&type=track&market=US&offset=0&limit=2",
//     "items": [
//       {
//         "album": {
//           "album_type": "album",
//           "artists": [
//             {
//               "external_urls": {
//                 "spotify": "https://open.spotify.com/artist/3WK0k0njEDHpxtxYHi2pMC"
//               },
//               "href": "https://api.spotify.com/v1/artists/3WK0k0njEDHpxtxYHi2pMC",
//               "id": "3WK0k0njEDHpxtxYHi2pMC",
//               "name": "The Railsplitters",
//               "type": "artist",
//               "uri": "spotify:artist:3WK0k0njEDHpxtxYHi2pMC"
//             }

export default Spotify;
