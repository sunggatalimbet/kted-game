import React from 'react';
import { NPC as NPCType } from '../types/game';

interface NPCProps {
  npc: NPCType;
}

const NPC: React.FC<NPCProps> = ({ npc }) => {
  return (
    <div
      className="absolute w-12 h-12 transition-all duration-200"
      style={{
        left: `${npc.position.x * 32}px`,
        top: `${npc.position.y * 32}px`,
        transform: 'translate(-50%, -50%)'
      }}
    >
      <img
        src={npc.sprite}
        alt={npc.name}
        className="w-full h-full object-cover rounded-full border-2 border-yellow-400 shadow-lg"
      />
    </div>
  );
};

export default NPC;