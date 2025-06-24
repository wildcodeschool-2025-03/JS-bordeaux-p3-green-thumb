export type Plant = {
  id: number;
  name: string;
  icon: string;
  created_at: string;
  edible: boolean;
  toxic: boolean;
  plant_exposition: "north" | "south" | "east" | "west";
  born_at: string;
  nickname: string;
  avatar: string;
};
