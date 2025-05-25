
import React, { useEffect, useState } from "react";
import "./pacmanstyle.css";
import pmo from "./pmo.png";
import pmc from "./pmc.png";

import apple from './apple.png';
import burger from './dot.png';

import dot from "./dot.png";

const pacmanStates = [pmo,pmc];
const foodItems = [burger];

const generateInitialFoodQueue = () => {
  const initialQueue = [];
  for (let i = 0; i < 2; i++) {
    initialQueue.push(dot);
    initialQueue.push(foodItems[Math.floor(Math.random() * foodItems.length)]);
  }
  return initialQueue;
};

const EatAnimation = () => {
  const [pacmanIndex, setPacmanIndex] = useState(0);
  const [foodQueue, setFoodQueue] = useState(generateInitialFoodQueue());

  useEffect(() => {
    const pacmanInterval = setInterval(() => {
      setPacmanIndex((prevIndex) => (prevIndex + 1) % pacmanStates.length);
    }, 200);

    const foodInterval = setInterval(() => {
      setFoodQueue((prevQueue) => {
        const newQueue = [...prevQueue.slice(1)];
        var i=false;
        if (newQueue.filter((item) => item !== dot).length < 3) {
          var a = Math.floor(Math.random() * foodItems.length);
          newQueue.push(foodItems[a]);
        } else {
          newQueue.push(dot);
          i=false;
        }
        return newQueue;
      });
    }, 500);

    return () => {
      clearInterval(pacmanInterval);
      clearInterval(foodInterval);
    };
  }, []);

  return (
    <div className="pacman-container">
      <div >
        <img className="pacman" src={pacmanStates[pacmanIndex]} alt="Pacman" />
      </div>
      <div className="food-queue">
        {foodQueue.map((item, index) => (
          <img key={index} src={item} alt="Food item" />
        ))}
      </div>
    </div>
  );
};

export default EatAnimation;
