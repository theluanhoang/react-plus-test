import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [points, setPoints] = useState({
    pointOfA: 1,
    pointOfB: 1,
  });

  const [message, setMessage] = useState("Same Point");
  const [isStart, setIsStart] = useState(false);

  useEffect(() => {
    if (points.pointOfA > points.pointOfB) {
      setMessage("A is winning");
    } else if (points.pointOfB > points.pointOfA) {
      setMessage("B is winning");
    } else {
      setMessage("Same Point");
    }
  }, [points]);

  const handleRace = () => {
    setIsStart(true);
    const randomNumber = Math.floor(Math.random() * 2) + 1;
    setPoints(prevPoints => {
      return randomNumber === 1
        ? { ...prevPoints, pointOfA: prevPoints.pointOfA + 1 }
        : { ...prevPoints, pointOfB: prevPoints.pointOfB + 1 };
    });
  };

  const handleReset = () => {
    setIsStart(false);
    setPoints({
      pointOfA: 1,
      pointOfB: 1,
    });
  };
  return (
    <div className="container">
      <div className="race">
        <h1 className="race__title">{message}</h1>
        <div className="race__character">
          <p className="race__character-name">Character A</p>
          <div className="race__character-stats">
          {Array.from({ length: points.pointOfA }).map((_, index) => (
              <div key={index} className="race__character-stat"></div>
            ))}          </div>
        </div>
        <div className="race__character">
          <p className="race__character-name">Character B</p>
          <div className="race__character-stats">
          {Array.from({ length: points.pointOfB }).map((_, index) => (
              <div key={index} className="race__character-stat"></div>
            ))}
          </div>
        </div>
        <div className="race__controls">
          <button className="race__button race__button--race" onClick={handleRace}>Race</button>
          {
            isStart && (
              <button className="race__button race__button--reset" onClick={handleReset}>Reset</button>
            )
          }
        </div>
      </div>
    </div>
  );
}

export default App;
