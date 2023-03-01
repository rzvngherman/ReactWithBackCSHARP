import logo from './logo.svg';
import './App.css';
//import "./jquery/jquery-3.2.1.slim.min.js"
//import './bootstrap/bootstrap.min.css';
//import "./bootstrap/bootstrap.min.js"

//import './bootstrap/bootstrap.min.css'
//import './bootstrap/bootstrap.bundle.min.js'

import { Home } from './pages/Home';
import { Employee } from './pages/Employee/Employee';
import { WeatherForecast } from './pages/WeatherForecast/WeatherForecast';

import { BrowserRouter, Route, Routes, NavLink } from 'react-router-dom';

function App() {
    return (
        <BrowserRouter>
            <div className="App container">
                <h3 className="d-flex justify-content-center m-3">
                    My React App
                </h3>

                <nav className="navbar navbar-expand-sm bg-light navbar-dark">
                    <ul className="navbar-nav">
                        <li className="nav-item m-1">
                            <NavLink className="btn btn-light btn-outline-primary" to="/home">
                                Home
                            </NavLink>
                        </li>
                        <li className="nav-item m-1">
                            <NavLink className="btn btn-light btn-outline-primary" to="/employee">
                                Employee
                            </NavLink>
                        </li>
                        <li className="nav-item m-1">
                            <NavLink className="btn btn-light btn-outline-primary" to="/weatherforecast">
                                WeatherForecast
                            </NavLink>
                        </li>
                    </ul>
                </nav>

                <Routes>
                    <Route path="/home" element={<Home />}></Route>
                    <Route path="/employee" element={<Employee />}></Route>
                    <Route path="/weatherforecast" element={<WeatherForecast />}></Route>
                </Routes>
            </div>
        </BrowserRouter>
    );
}
export default App;