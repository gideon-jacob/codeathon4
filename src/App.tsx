import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Timeline from './components/Timeline';

function App() {
  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-red-900 selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Timeline />
      </main>
    </div>
  );
}

export default App;
