import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Products from './components/Products/Products';


function App() {
  return (
    <div >

      <Router>
        <Header></Header>
        <Switch>
          <Route path='/'>
            <Products></Products>
          </Route>
          <Route path='/home'>
            <Products></Products>
          </Route>

        </Switch>
      </Router>

    </div>

  );
}

export default App;
