import React, { useEffect, useState } from 'react';
import { npcs } from '../data/npcs';
import Player from './Player';
import NPC from './NPC';
import '../styles/sprites.css';

interface Flower {
  x: number;
  y: number;
}

const GameMap: React.FC = () => {
  const [flowers, setFlowers] = useState<Flower[]>([]);
  const [trees, setTrees] = useState<Flower[]>([]);

  useEffect(() => {
    // Generate random flowers
    const newFlowers = Array.from({ length: 50 }, () => ({
      x: Math.random() * 100,
      y: Math.random() * 100
    }));
    setFlowers(newFlowers);

    // Generate random trees along the edges
    const newTrees = [];
    for (let i = 0; i < 20; i++) {
      if (i < 10) {
        // Left and right edges
        newTrees.push({
          x: i < 5 ? 5 : 95,
          y: Math.random() * 90 + 5
        });
      } else {
        // Top and bottom edges
        newTrees.push({
          x: Math.random() * 90 + 5,
          y: i < 15 ? 5 : 95
        });
      }
    }
    setTrees(newTrees);
  }, []);

  return (
    <div className="relative w-[800px] h-[600px] overflow-hidden rounded-lg">
      <div className="absolute inset-0 grass-tile">
        {/* Flowers */}
        {flowers.map((flower, i) => (
          <div
            key={i}
            className="flower"
            style={{
              left: `${flower.x}%`,
              top: `${flower.y}%`
            }}
          />
        ))}

        {/* Trees */}
        {trees.map((tree, i) => (
          <div
            key={i}
            className="tree pixel-art"
            style={{
              left: `${tree.x}%`,
              top: `${tree.y}%`
            }}
          />
        ))}

        {/* NPCs */}
        {npcs.map(npc => (
          <NPC key={npc.id} npc={npc} />
        ))}
        
        <Player />
      </div>
    </div>
  );
};

export default GameMap;