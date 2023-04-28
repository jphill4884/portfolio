import React from "react";
import "./App.css";
import MainMenu from "./MainMenu";
import NavBar from "./NavBar";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar></NavBar>
      </header>
      <main>
        <MainMenu></MainMenu>
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
}

export default App;
