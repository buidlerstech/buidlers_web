import { Venue } from '@/types/venue';

export const venues: Venue[] = [
  {
    title: "La birreria 2019",
    description: "Annual technology conference",
    location: "Buenos Aires, Argentina",
    assistants: 150,
    m2: 200,
    icon: "🍻🌱",
    public: "crypto enthusiasts",
    year: 2019
  },
  {
    title: "MusicFest 2020",
    description: "International music festival",
    location: "London, UK",
    assistants: 7100,
    m2: 600,
    icon: "👔",
    public: "devs",
    year: 2020
  },
  {
    title: "ArtExpo 2021",
    description: "Contemporary art exhibition",
    location: "Paris, France",
    assistants: 7100,
    m2: 600,
    icon: "👔",
    public: "degens",
    year: 2021
  },
  {
    title: "SportsSummit 2022",
    description: "Global sports industry meeting",
    location: "Tokyo, Japan",
    assistants: 7100,
    m2: 600,
    icon: "👔",
    public: "OGs",
    year: 2022
  },
  {
    title: "EcoForum 2023",
    description: "Environmental sustainability conference",
    location: "Rio de Janeiro, Brazil",
    assistants: 7100,
    m2: 600,
    icon: "👔",
    public: "communities",
    year: 2023
  },
  {
    title: "Devcon SEA 2024",
    description: "Emerging technologies showcase",
    location: "Bangkok, Thailand",
    assistants: 7100,
    m2: 600,
    icon: "👔",
    public: "frens, OGs & newcomers",
    year: 2024
  }
];

export const getYears = (): number[] => {
  return [...new Set(venues.map(venue => venue.year!))].sort();
}; 