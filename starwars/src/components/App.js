import React, { useState, useEffect } from 'react';
import './../styles/App.scss';
import Card from '../components/Card';
import Button from '../components/Button';

function App() {
  const [data, setData] = useState('');
  const [animate, setAnimate] = useState(false);
  const [planet, setPlanet] = useState(1);

  useEffect(() => {
    const url = `https://swapi.dev/api/planets/${planet}/`;

    fetch(url)
      .then(response => response.json())
      .then(data => {
        setData(data);
        setAnimate(false);
      })
      .catch(err => {
        setAnimate(false);
        console.log(err, 'error');
      })

  }, [planet])

  const RandomPlanet = () => {
    const min = 1;
    const max = 60;
    let rand = Math.floor(Math.random() * (max - min)) + min;
    setAnimate(true);
    setPlanet(Math.ceil(min + rand));
  }
  return (
    <div className="container">
      <div className={`container__bg ${animate ? 'container__bg--travel': '' }`}> </div>
      <main>
        <Card data={data} />
        <Button RandomPlanet={RandomPlanet}/>
      </main>
    </div>
  );
}

export default App;
