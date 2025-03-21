import React from 'react';
import ReactDOM from 'react-dom/client';
//import './mySASS.scss';
import Calculator from './App';


const Header = () => {
  return (
    <Calculator />
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Header />);