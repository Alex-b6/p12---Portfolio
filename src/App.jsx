import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import '../src/App.scss';

function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <Header />
        <main>
          <About />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeProvider>  
  );
}

export default App;
