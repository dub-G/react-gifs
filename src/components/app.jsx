import React, { Component } from 'react';
import giphy from 'giphy-api';
import SearchBar from './search_bar';
import Gif from './gif';
import GifList from './gif_list';

const GIPHY_API_KEY = 'vFusqklPlk3PMVIyTTYhCsaFVT8MoWft';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      gifs: [],
      selectedGifId: "ASd0Ukj0y3qMM"
    };
  }

  search = (query) => {
    giphy({ apiKey: GIPHY_API_KEY, https: true }).search({
      q: query,
      rating: 'g',
      limit: 10
    }, (err, res) => {
      this.setState({
        gifs: res.data
      });
    });
  }

  updateGif = (id) => {
    this.setState({
      selectedGifId: id
    });
  }

  render() {
    return (
      <div>
        <div className="left-scene">
          <SearchBar searchFn={this.search} />
          <div className="selected-gif">
            <Gif id={this.state.selectedGifId} />
          </div>
          <div className="link-gif">
            <p>
            https://media.giphy.com/media/
              {this.state.selectedGifId}
            /giphy.gif
            </p>
          </div>
        </div>
        <div className="right-scene">
          <GifList gifs={this.state.gifs} updateFn={this.updateGif} />
        </div>
      </div>
    );
  }
}

export default App;
