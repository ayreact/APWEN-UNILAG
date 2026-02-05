
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Events from './components/Events';
import Leadership from './components/Leadership';
import Register from './components/Register';
import Footer from './components/Footer';

function App() {
  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col bg-background-light dark:bg-background-dark text-[#181019] overflow-x-hidden font-display">
      <Header />
      <Hero />
      <div className="layout-container flex h-full grow flex-col max-w-7xl mx-auto w-full px-6 lg:px-20">
        <About />
        <Events />
        <Leadership />
        <Register />
      </div>
      <Footer />
    </div>
  );
}

export default App;
