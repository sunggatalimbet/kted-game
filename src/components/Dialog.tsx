import React, { useState } from 'react';
import { useGameStore } from '../store/gameStore';

const Dialog: React.FC = () => {
  const { activeNPC, showDialog, closeDialog } = useGameStore();
  const [dialogIndex, setDialogIndex] = useState(0);

  if (!showDialog || !activeNPC) return null;

  const handleNext = () => {
    if (dialogIndex < activeNPC.dialogue.length - 1) {
      setDialogIndex(dialogIndex + 1);
    } else {
      setDialogIndex(0);
      closeDialog();
    }
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 mx-auto max-w-2xl p-4">
      <div className="bg-[#2A2A2A] border-2 border-[#4A4A4A] rounded-lg p-4 text-white shadow-lg">
        <div className="flex items-start gap-4">
          <img
            src={activeNPC.sprite}
            alt={activeNPC.name}
            className="w-16 h-16 object-cover rounded-full border-2 border-yellow-400"
          />
          <div className="flex-1">
            <h3 className="text-xl font-pixel mb-2 text-yellow-400">{activeNPC.name}</h3>
            <p className="font-pixel text-lg leading-relaxed mb-4">{activeNPC.dialogue[dialogIndex]}</p>
          </div>
        </div>
        <div className="flex justify-end">
          <button
            onClick={handleNext}
            className="px-4 py-2 bg-[#4A4A4A] hover:bg-[#5A5A5A] rounded font-pixel text-sm transition-colors"
          >
            {dialogIndex < activeNPC.dialogue.length - 1 ? 'Next ▶' : 'Close ✕'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dialog;