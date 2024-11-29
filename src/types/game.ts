export interface Position {
  x: number;
  y: number;
}

export interface Character {
  position: Position;
  direction: 'up' | 'down' | 'left' | 'right';
}

export interface NPC {
  id: string;
  name: string;
  position: Position;
  sprite: string;
  dialogue: string[];
}