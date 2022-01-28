import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './Components/Footer';
import PrincipalReceitas from './Pages/PrincipalReceitas';

function App() {
  return (
    <div>
      <Footer />
      <PrincipalReceitas />
    </div>
  );
}

export default App;
