import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import Player from './components/Players/Player';
import Cart from './components/cart/Cart';

function App() {
  
 const [players, setPlayers] = useState([]);
 const [cart, setCart] = useState([]);


 useEffect(()=>{
   fetch('https://www.json-generator.com/api/json/get/cpUmxDOYya?indent=2')
   .then(res => res.json())
   .then(data=>setPlayers(data))
   .catch(error => console.log(error))
 }, [])
  
 const handleAddPlayer = (player) =>{
  const newCart = [...cart, player];
  setCart(newCart);
}

  return (
    <div className="App bg-warning">
      <h1>Total player:{players.length}</h1>
      <h3>Player Added: {cart.length}</h3>
      <Cart cart = {cart}></Cart>
      <ul>
        {
          players.map(player =><Player player = {player} handleAddPlayer = {handleAddPlayer}></Player> )
        }
      </ul>
    </div>
  );
}

export default App;
