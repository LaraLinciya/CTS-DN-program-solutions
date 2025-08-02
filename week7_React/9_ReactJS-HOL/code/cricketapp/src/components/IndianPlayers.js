// src/components/IndianPlayers.js
import React from 'react';

const IndianPlayers = () => {
  const team = ['Zara1', 'Kabir2', 'Meera3', 'Aditya4', 'Sneha5', 'Ishaan6'];

  const oddPlayers = team.filter((_, index) => index % 2 === 0);  // 0, 2, 4
  const evenPlayers = team.filter((_, index) => index % 2 !== 0); // 1, 3, 5

  const T20Players = ['Ms. Aanya', 'Mr. Krish', 'Ms. Siya'];
  const RanjiPlayers = ['Mr. Ved', 'Ms. Rhea', 'Mr. Aarav'];

  const merged = [...T20Players, ...RanjiPlayers];

  return (
    <div>
      <h2><strong>Odd Players</strong></h2>
      <ul>
        <li>First : {oddPlayers[0]}</li>
        <li>Third : {oddPlayers[1]}</li>
        <li>Fifth : {oddPlayers[2]}</li>
      </ul>

      <hr />

      <h2><strong>Even Players</strong></h2>
      <ul>
        <li>Second : {evenPlayers[0]}</li>
        <li>Fourth : {evenPlayers[1]}</li>
        <li>Sixth : {evenPlayers[2]}</li>
      </ul>

      <hr />

      <h2><strong>List of Indian Players Merged:</strong></h2>
      <ul>
        {merged.map((player, index) => (
          <li key={index}>{player}</li>
        ))}
      </ul>
    </div>
  );
};

export default IndianPlayers;
