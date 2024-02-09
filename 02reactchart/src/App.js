import logo from './logo.svg';
import './App.css';
import BarChart from './components/BarChart';
import LineChart from './components/LineChart';
import PieChart from './components/PieChart';

function App() {
  return (
    <div className="App">
      <BarChart/>
      <LineChart/>
      <PieChart/>
    </div>
  );
}

export default App;
