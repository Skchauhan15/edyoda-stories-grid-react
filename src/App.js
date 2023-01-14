import './App.css';
import React from 'react';
import Header from './Header';
import Bodies  from './Bodies';
import Footer from './Footer';

class App extends React.Component {
  render(){
  return (
    <>
    <Header></Header>
    <Bodies></Bodies>
    <Footer></Footer>
    </>
  );
}
}
export default App;
