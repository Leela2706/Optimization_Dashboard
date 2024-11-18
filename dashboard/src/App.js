import './App.css';
import HorizontalBar from './Components/Horizontal_Bar';
import Table_1 from './Components/Table_1';
import Table_2 from './Components/Table_2';
import VerticalNavbar from './Components/Vertical_NavBar';
function App() {
  return (
    <div className="App">
      <VerticalNavbar/>
      <HorizontalBar/>
      {/* <Table_1/> */}
      <Table_2/>
    </div>
  );
}

export default App;
