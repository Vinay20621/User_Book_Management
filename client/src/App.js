import React from 'react'
import './App.css'
import { BrowserRouter, Route,Routes } from 'react-router-dom'
import Login from './pages/Login'
import NoPages from './pages/NoPages'
import SpecificBook from './Component/Special'
import Register from './pages/Register'
import Home from './pages/Home'
import AddBook from './pages/AddPage'
import EditBook  from './pages/EditPage'












const App = () => {
	return (
		<div>
			
			<BrowserRouter>
       <Routes>
				
				
				<Route path="/" element={<Login/>} />
				<Route path="/signin" element={<Register/>} />	
				<Route path="/home" element={<Home active="home"/>} />			
				<Route path="/view/:id" element={<SpecificBook active="home"/>} />
				<Route path="/updatebook/:id" element={<EditBook active="home"/>} />	

				<Route path="/addbook" element={<AddBook active="addbook"/>} />
				

        <Route path="*" element={<NoPages/>}/>
        </Routes>
			</BrowserRouter>
			

      
		</div>
	)
}

export default App
