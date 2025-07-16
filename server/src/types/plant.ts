export interface Plant {
  id: number;
  name: string;
  icon: string;
  description: string;
  plant_exposition: string;
  sowing: string;
  watering: number;
  harvesting: string;
  toxic: boolean;
  edible: boolean;
  born_at: string;
}

export interface GardenPlant {
  image: string;
  name: string;
  toxic: boolean;
  nickname: string;
  born_at: string;
}
