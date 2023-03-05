import Navbar from './components/Navbar/Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/Home/Home'
import Login from './components/Login/Login'
import Profile from './components/Profile/Profile'
import SignUp from './components/SignUp/SignUp.jsx'

function App() {
	return (
		<>
			<BrowserRouter>
				<Navbar />
				<Routes>
					<Route
						path='/'
						exact
						element={<Home />}
					/>
					<Route
						path='/signup'
						element={<SignUp />}
					/>
					<Route
						path='/login'
						element={<Login />}
					/>
					<Route
						path='/profile'
						exact
						element={<Profile />}
					/>
				</Routes>
			</BrowserRouter>
		</>
	)
}

export default App
