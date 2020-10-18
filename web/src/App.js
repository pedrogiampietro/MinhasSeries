import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Header from './components/Header'
import Home from './components/Home'
import Generos from './components/Generos'
import NovoGenero from './components/Generos/NovoGenero'
import EditarGenero from './components/Generos/EditarGenero'

function App() {
	return (
		<BrowserRouter>
			<Switch>
				<>
					<Header />
					<Route path="/" exact component={Home} />
					<Route path="/generos" exact component={Generos} />
					<Route path="/generos/:id" exact component={EditarGenero} />
					<Route path="/generos/novo" exact component={NovoGenero} />
				</>
			</Switch>
		</BrowserRouter>
	)
}

export default App
