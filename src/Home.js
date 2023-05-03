import './App.css';
import MainMenu from './MainMenu';
import NavBar from './NavBar';
import Footer from './Footer';

function Home() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
      </header>
      <main>
        <MainMenu />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default Home;