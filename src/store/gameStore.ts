import { create } from 'zustand';
import { Position, Character, NPC } from '../types/game';
import { npcs } from '../data/npcs';

interface GameState {
  player: Character;
  activeNPC: NPC | null;
  showDialog: boolean;
  movePlayer: (direction: 'up' | 'down' | 'left' | 'right') => void;
  interactWithNPC: () => void;
  closeDialog: () => void;
}

export const useGameStore = create<GameState>((set, get) => ({
  player: {
    position: { x: 12, y: 9 },
    direction: 'down'
  },
  activeNPC: null,
  showDialog: false,

  movePlayer: (direction) => {
    const { player } = get();
    const newPosition = { ...player.position };
    const TILE_SIZE = 1;

    switch (direction) {
      case 'up':
        newPosition.y -= TILE_SIZE;
        break;
      case 'down':
        newPosition.y += TILE_SIZE;
        break;
      case 'left':
        newPosition.x -= TILE_SIZE;
        break;
      case 'right':
        newPosition.x += TILE_SIZE;
        break;
    }

    // Check boundaries (adjusted for new map size)
    if (newPosition.x < 1 || newPosition.x > 23 || newPosition.y < 1 || newPosition.y > 17) {
      return;
    }

    set({ player: { position: newPosition, direction } });

    // Check for nearby NPCs
    const nearbyNPC = npcs.find(npc => 
      Math.abs(npc.position.x - newPosition.x) <= 1.5 && 
      Math.abs(npc.position.y - newPosition.y) <= 1.5
    );

    set({ activeNPC: nearbyNPC || null });
  },

  interactWithNPC: () => {
    const { activeNPC } = get();
    if (activeNPC) {
      set({ showDialog: true });
    }
  },

  closeDialog: () => {
    set({ showDialog: false });
  }
}));