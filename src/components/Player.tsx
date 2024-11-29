import React from "react";
import { useGameStore } from "../store/gameStore";

const Player: React.FC = () => {
	const player = useGameStore((state) => state.player);

	return (
		<div
			className="absolute w-8 h-8 transition-all duration-200 pixel-art"
			style={{
				left: `${player.position.x * 32}px`,
				top: `${player.position.y * 32}px`,
				transform: `scale(${player.direction === "left" ? -1 : 1}, 1)`,
			}}
		>
			<img
				src="/sprites/player.png"
				alt="Player"
				className="w-full h-full pixel-art"
			/>
		</div>
	);
};

export default Player;
