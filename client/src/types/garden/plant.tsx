export type Plant = {
  id: number;
  name: string;
  icon: string;
  description: string;
  created_at: string;
  edible: boolean;
  toxic: boolean;
  plant_exposition: "north" | "south" | "east" | "west";
  watering: number;
  born_at: string;
  nickname: string | null;
  avatar: string;
  plant_garden_id: number;
  main_cause_of_decay: string;
  tip: string;
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

export interface PlantSuggestion {
  plant_name: string;
  probability: number;
  plant_details: {
    common_names?: string[];
    url?: string;
    wiki_description?: {
      value: string;
    };
    taxonomy?: Record<string, string>;
  };
  disease?: {
    name: string;
    probability: number;
    description?: string;
    treatment?: {
      chemical?: string[];
      biological?: string[];
      preventive?: string[];
    };
  };
}

export interface PlantDisease {
  name: string;
  probability: number;
  disease_details: {
    local_name: string;
    description?: string;
  };
}

export interface PlantHealthAssessment {
  is_healthy: boolean;
  is_healthy_probability: number;
  diseases?: PlantDisease[];
}

export interface PlantIdentificationResponse {
  suggestions: PlantSuggestion[];
  health_assessment?: PlantHealthAssessment;
}
