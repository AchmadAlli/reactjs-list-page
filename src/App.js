import React from 'react';
import Navbar from './components/navbar/navbar.component';
import ListWrapper from './components/list-wrapper/list-wrapper.component';
import './App.scss';

function App() {
  return (
    <div className="App">
      <Navbar />
      <main className="app-wrapper">
        <ListWrapper title="Pembayaran lunas" />
        <ListWrapper title="Pembayaran pending" />
      </main>
    </div>
  );
}

export default App;
