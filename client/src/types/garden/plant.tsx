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
  plant_garden_id: number;
};

export type PlantCardProps = {
  plant: {
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
};

export type PlantListItem = {
  plant: {
    name: string;
    icon: string;
  };
  quantity: number;
  onAdd: () => void;
  onRemove: () => void;
};
