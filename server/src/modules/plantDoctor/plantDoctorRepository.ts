interface PlantSuggestion {
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

interface PlantIdResponse {
  suggestions: PlantSuggestion[];
}

class PlantDoctorRepository {
  private apiKey = process.env.PLANT_ID_API_KEY;

  async identifyPlant(imageBase64: string): Promise<PlantIdResponse> {
    const response = await fetch("https://api.plant.id/v2/identify", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        api_key: this.apiKey,
        images: [imageBase64],
        modifiers: ["health_all"],
        plant_language: "fr",
        plant_details: ["common_names", "url", "wiki_description", "taxonomy"],
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Plant.id API error: ${response.status} - ${errorText}`);
    }

    const data: PlantIdResponse = await response.json();
    return data;
  }
}

export default new PlantDoctorRepository();
