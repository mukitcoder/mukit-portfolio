
import './App.css';
import Banner from './Banner/Banner';
import Navbar from './Shared/Navbar';

function App() {
  return (
    <div className="bg-gray-900">
      <div className=""> 
      <Navbar></Navbar>
      </div>
      <div className="pt-16">
      <Banner></Banner>
      </div>
    </div>
  );
}

export default App;
