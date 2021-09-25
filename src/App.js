import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import CountryData from './components/CountryData';
import Filter from './components/Filter';
import Header from './components/Header'
import Country from './components/Country';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Route exact path='/'>
          
          <CountryData />
        </Route>
        <Route path='/countries/:name' children={ <Country /> }></Route>
      </Router>
    </div>
  );
}

export default App;
