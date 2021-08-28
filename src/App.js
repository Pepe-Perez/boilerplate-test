// @see https://create-react-app.dev/docs/adding-images-fonts-and-files/#adding-svgs
import { Switch, Route } from 'react-router-dom';

import './App.scss';

import Header from './components/header/header.component';
import Footer from './components/footer/footer.component';

import HomePage from './pages/home/home.component';
import Portfolio from './pages/portfolio/portfolio.component';
import Process from './pages/process/process.component';
import Journal from './pages/journal/journal.component';
import ContactInfo from './pages/contact-info/contact-info.component';

function App() {
	return (
		<div>
			<Header />
			<Switch>
				<Route exact path="/" component={HomePage}/>
				<Route exact path="/portfolio" component={Portfolio} />
				<Route exact path="/process" component={Process} />
				<Route exact path="/journal" component={Journal} />
				<Route exact path="/contact-info" component={ContactInfo} />
			</Switch>
			<Footer />
		</div>
	);
}

export default App;
