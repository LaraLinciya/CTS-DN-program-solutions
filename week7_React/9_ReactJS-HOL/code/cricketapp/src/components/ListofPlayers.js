// src/components/ListofPlayers.js
import React from 'react';

const ListofPlayers = () => {
  const players = [
    { name: 'Ms. Lara', score: 50 },
    { name: 'Mr. Kevin', score: 70 },
    { name: 'Mr. Arjun', score: 40 },
    { name: 'Ms. Diya', score: 61 },
    { name: 'Mr. Ethan', score: 61 },
    { name: 'Mr. Karan', score: 95 },
    { name: 'Ms. Tara', score: 100 },
    { name: 'Mr. Rohan', score: 84 },
    { name: 'Ms. Nisha', score: 64 },
    { name: 'Mr. Aryan', score: 75 },
    { name: 'Ms. Kiara', score: 80 },
  ];

  const below70 = players.filter(player => player.score < 70);

  return (
    <div>
      <h2><strong>List of Players</strong></h2>
      <ul>
        {players.map((player, index) => (
          <li key={index}>{player.name} {player.score}</li>
        ))}
      </ul>

      <hr />

      <h2><strong>List of Players having Scores Less than 70</strong></h2>
      <ul>
        {below70.map((player, index) => (
          <li key={index}>{player.name} {player.score}</li>
        ))}
      </ul>
    </div>
  );
};

export default ListofPlayers;
