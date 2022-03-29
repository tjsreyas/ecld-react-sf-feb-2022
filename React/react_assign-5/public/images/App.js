import React from "react";
import Card from './component/Card';

function App() {
  return (
    <div className="App">
      <h1>Zomato</h1>
      <Card restaurant="Dwaraka Family Restaurant" cuisines="Biriyani, North Indian, Chin.."
            image="/images/card1.jpg" rating="4.2"/>
      <Card restaurant="Dwaraka Family Restaurant" cuisines="Biriyani, North Indian, Chin.."
            image="/images/card2.jpg" rating="4.2"/>
      <Card restaurant="Dwaraka Family Restaurant" cuisines="Biriyani, North Indian, Chin.."
            image="./card1.jpg" rating="4.2"/>
      <Card restaurant="Dwaraka Family Restaurant" cuisines="Biriyani, North Indian, Chin.."
            image="./card1.jpg" rating="4.2"/>
      <Card restaurant="Dwaraka Family Restaurant" cuisines="Biriyani, North Indian, Chin.."
            image="./card1.jpg" rating="4.2"/>
      <Card restaurant="Dwaraka Family Restaurant" cuisines="Biriyani, North Indian, Chin.."
            image="./card1.jpg" rating="4.2"/>
      <Card restaurant="Dwaraka Family Restaurant" cuisines="Biriyani, North Indian, Chin.."
            image="./card1.jpg" rating="4.2"/>
      <Card restaurant="Dwaraka Family Restaurant" cuisines="Biriyani, North Indian, Chin.."
            image="./card1.jpg" rating="4.2"/>

    </div>
  );
}

export default App;
