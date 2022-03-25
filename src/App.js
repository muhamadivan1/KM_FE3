// import logo from './logo.svg';
import './App.css';
import data from "./data.js";
import Track from "./components/Track";

function App() {
  return (
    <div className="container">
      <h1>My Playlist</h1>
      <Track
        url={data.album.images[0].url}
        title={data.album.name}
        artist={data.album.artists[0].name}
      />
    </div>
  );
}

export default App;
