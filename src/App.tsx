import React from 'react';
import GameMap from './components/GameMap';
import Dialog from './components/Dialog';
import Controls from './components/Controls';

function App() {
  return (
    <div className="min-h-screen bg-[#1a1a1a] flex items-center justify-center p-8">
      <div className="relative">
        <div className="absolute -top-12 left-0 right-0 text-center">
          <h1 className="text-3xl font-pixel text-white mb-2">Geography Explorer</h1>
          <p className="text-gray-400 font-pixel">Use arrow keys to move, press E to interact</p>
        </div>
        <GameMap />
        <Dialog />
        <Controls />
      </div>
    </div>
  );
}

export default App;