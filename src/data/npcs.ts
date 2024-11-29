import { NPC } from "../types/game";

export const npcs: NPC[] = [
	{
		id: "magellan",
		name: "Ferdinand Magellan",
		position: { x: 5, y: 3 },
		sprite: "/sprites/fernan_magellan.jpg",
		dialogue: [
			"Greetings, young explorer! I am Ferdinand Magellan.",
			"I led the first expedition to circumnavigate the globe.",
			"Though I didn't complete the journey myself, my expedition proved that the Earth is round.",
			"The Pacific Ocean, which I named, is the largest and deepest ocean on Earth.",
		],
	},
	{
		id: "kashaubayev",
		name: "Amre Kashaubayev",
		position: { x: 8, y: 6 },
		sprite: "/sprites/amre_kashaubayev.jpg",
		dialogue: [
			"Ahoy there! I'm Amre Kashaubayev.",
			"In 1492, I sailed across the Atlantic Ocean.",
			"Though I was searching for a route to Asia, I reached the Americas instead.",
			"This journey began the age of exploration and discovery.",
		],
	},
	{
		id: "humboldt",
		name: "Alexander von Humboldt",
		position: { x: 12, y: 4 },
		sprite: "/sprites/alexandr_gumbolt.jpg",
		dialogue: [
			"Welcome! I am Alexander von Humboldt.",
			"I explored Latin America extensively in the early 19th century.",
			"My work laid the foundation for biogeography and modern naturalist studies.",
			"I discovered the magnetic equator and studied the Earth's magnetic field.",
		],
	},
	{
		id: "humboldt",
		name: "Alexander von Humboldt",
		position: { x: 12, y: 4 },
		sprite: "/sprites/alexandr_gumbolt.jpg",
		dialogue: [
			"Welcome! I am Alexander von Humboldt.",
			"I explored Latin America extensively in the early 19th century.",
			"My work laid the foundation for biogeography and modern naturalist studies.",
			"I discovered the magnetic equator and studied the Earth's magnetic field.",
		],
	},
];
