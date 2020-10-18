import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Header from './components/Header'
import Home from './components/Home'
import Generos from './components/Generos'

function App() {
	return (
		<BrowserRouter>
			<Switch>
				<div className="App">
					<Header />
					<Route path="/" exact component={Home} />
					<Route path="/generos" component={Generos} />
				</div>
			</Switch>
		</BrowserRouter>
	)
}

export default App
