import Home from './pages/Home';
import Products from './pages/Products';
import Contact from './pages/Contact';

import Header from './components/Header';
import Footer from './components/Footer';
import mysql from 'mysql2'

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import './App.css';

function App() {

  // var con = mysql.createConnection({
  //   host: "localhost",
  //   user: "root",
  //   password: "Popcorn01"
  // });
  // con.connect(function (err) {
  //   if (err) throw err;
  //   console.log("Connected!");
  //   con.query('SELECT * FROM products', function (err, result) {
  //     if (err) throw err;
  //     console.log("Result: " + result);
  //   });
  // });
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
