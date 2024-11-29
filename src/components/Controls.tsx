import React, { useEffect } from 'react';
import { useGameStore } from '../store/gameStore';

const Controls: React.FC = () => {
  const { movePlayer, interactWithNPC, activeNPC } = useGameStore();

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      switch (e.key) {
        case 'ArrowUp':
          movePlayer('up');
          break;
        case 'ArrowDown':
          movePlayer('down');
          break;
        case 'ArrowLeft':
          movePlayer('left');
          break;
        case 'ArrowRight':
          movePlayer('right');
          break;
        case 'e':
        case 'E':
          interactWithNPC();
          break;
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [movePlayer, interactWithNPC]);

  return (
    <div className="fixed bottom-4 left-4">
      {activeNPC && (
        <div className="mb-4 bg-white px-4 py-2 rounded-lg shadow-lg">
          Press <kbd className="px-2 py-1 bg-gray-100 rounded">E</kbd> to talk
        </div>
      )}
    </div>
  );
};

export default Controls;