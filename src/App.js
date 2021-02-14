import Form from './ui/form';
import Show from './ui/show';
import './App.css';
import Land from './ui/land';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'; 
import About from './ui/about';



function App() {
  return (
    <Router>
      <div className="App bg">
        <Route exact path='/' component={Land}></Route> 
        <Route exact path='/memes' component={Show}></Route> 
        <Route exact path='/post' component={Form}></Route>
        <Route exact path='/about' component={About}></Route>
      </div>
    </Router>
  );
}

export default App;
