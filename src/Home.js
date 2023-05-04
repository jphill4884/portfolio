import './App.css';
import MainMenu from './MainMenu';
import NavBar from './NavBar';
import Footer from './Footer';
import './Footer.css';

function Home() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
      </header>
        <MainMenu />
        <Footer />
    </div>
  );
}

export default Home;