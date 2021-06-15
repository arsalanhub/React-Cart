import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';

const App = () => {
	return (
		<>
		  <Router>
             <Switch> 
                <Route path="/" component={Home} exact></Route>
                <Route path="/about" component={About}></Route>
             </Switch>
		  </Router>
		</>	
	) 
}

export default App;