import './App.css'
import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import SignIn from './components/pages/SignIn'
import { store } from './reducers/store'
import { Provider } from 'react-redux'

const App = props => {
  return (
		<Provider store={store}>
			<BrowserRouter>
				<Route exact path="/" component={() => <SignIn />} />
			</BrowserRouter>
		</Provider>
  )
}

export default App
