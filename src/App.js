import React from "react";
import './assets/css/App.css';
import { FeedComponent } from './components/feedComponent';
import { NavbarComponent } from './components/navbarComponent';
import { TrendingComponent } from "./components/trendingComponent";
import { ProfileComponent } from "./components/profileComponent";


export const App = () => {
  const [state, setState] = React.useState(0);

  const clickIncrease = () => {
    setState(state + 1);
  }
  const clickDecrease = () => {
    setState(state - 1);
  }

  return (
    <div className="App">
      <NavbarComponent />
      <FeedComponent />
      <ProfileComponent/>
      <TrendingComponent/>
      <div>{state}</div>
      <button style={{backgroundColor:'green',borderRadius:'20%',padding:'12px',color:'white'}} onClick={clickIncrease}>Increase</button>
      <button style={{backgroundColor:'red',borderRadius:'20%',padding:'12px',color:'white'}} onClick={clickDecrease}>Decrease</button>
      
    </div>
  );
}
