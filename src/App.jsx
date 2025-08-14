import './App.css';
import About from './components/About/About';
import Footer from './components/Footer/Footer';
import Guests from './components/Guests/Guests';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Marketing from './components/Marketing/Marketing';
import Playlists from './components/Playlists/Playlists';
import Podcasts from './components/Podcasts/Podcasts';
import Transfers from './components/Transfers/Transfers';

function App() {
  return (
    <div className="App">
      <Header />
      <main className="main">
        <Hero />
        <Podcasts />
        <Transfers />
        <Guests />
        <Playlists />
        <Marketing />
        <About />
      </main>
      <Footer />
    </div>
  );
}

export default App;
