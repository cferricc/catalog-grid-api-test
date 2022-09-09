import React from 'react';
import "./App.css";
import Card from "./components/card";

function App() {
  return (
    <div className="container">
      <div className="row">
        <Card
          title="What is Lorem Ipsum?"
          exp_date="25-10-2020"
        />
        <Card
          title="What is Lorem Ipsum?"
          exp_date="25-10-2020"
        />
        <Card
          title="What is Lorem Ipsum?"
          exp_date="25-10-2020"
        />
        <Card
          title="What is Lorem Ipsum?"
          exp_date="25-10-2020"
        />
      </div>
    </div>
  );
}
export default App;