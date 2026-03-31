export interface Track {
  id: string;
  title: string;
  url: string;
}

export const AUDIO_PLAYLIST: Track[] = [
  {
    id: "1",
    title: "Corporate Focus",
    url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
  },
  {
    id: "2",
    title: "Ambient Horizon",
    url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-12.mp3",
  },
  {
    id: "3",
    title: "Lounge Elegance",
    url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-15.mp3",
  }
];
