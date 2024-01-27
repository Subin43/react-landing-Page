
import './App.css';
import Analytics from './components/Analytics';
import Here from './components/Here';
import Navigation from './components/navigation';
import Card from './components/Card';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Here />
      <Analytics />
      <Newsletter />
      <Card />
      <Footer />
      
    </div>
  );
}

export default App;
