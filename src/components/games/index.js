import React from "react";
import Game1 from "../../img/game1.jpg";
import Game2 from "../../img/game2.jpg";
import Game3 from "../../img/game3.jpg";

function Games() {
  const games = [{ imgUrl: Game1 }, { imgUrl: Game2 }, { imgUrl: Game3 }];

  return (
    <div>
      <h3>Games</h3>
      <div
        style={{
          display: "flex",
          gap: "50px",
        }}
      >
        {games.map((game) => (
          <img key={game.imgUrl} src={game.imgUrl} alt="game1" width="120" />
        ))}
      </div>
    </div>
  );
}

export default Games;
