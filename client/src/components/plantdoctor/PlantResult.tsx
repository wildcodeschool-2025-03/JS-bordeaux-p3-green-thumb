import "../../components/plantdoctor/PlantResult.css";

interface PlantResultProps {
  result: PlantApiResponse;
  onReset: () => void;
}

interface PlantApiResponse {
  suggestions: Suggestion[];
  health_assessment?: HealthAssessment;
}

interface Suggestion {
  plant_name: string;
  probability: number;
  plant_details: {
    common_names?: string[];
    wiki_description?: {
      value: string;
    };
    url?: string;
  };
}

interface HealthAssessment {
  is_healthy: boolean;
  is_healthy_probability: number;
  diseases?: {
    name: string;
    probability: number;
    disease_details: {
      local_name: string;
    };
  }[];
}

export default function PlantResult({ result, onReset }: PlantResultProps) {
  const filteredSuggestions = result.suggestions.filter(
    (s) => s.probability >= 0.3,
  );

  const health = result.health_assessment;

  return (
    <div className="result-container">
      <h2>Analysis Result</h2>
      <hr className="line-decor" />

      {filteredSuggestions.length === 0 && (
        <p>Sorry, the plant could not be reliably identified.</p>
      )}

      {filteredSuggestions.map((s) => (
        <div key={s.plant_name} className="suggestion-card">
          <h3>{s.plant_details.common_names?.[0] || s.plant_name}</h3>
          <p>
            <strong>Scientific Name:</strong> {s.plant_name}
          </p>

          {s.plant_details.wiki_description?.value && (
            <p>{s.plant_details.wiki_description.value}</p>
          )}
          {s.plant_details.url && (
            <a href={s.plant_details.url} target="_blank" rel="noreferrer">
              Learn more
            </a>
          )}
        </div>
      ))}

      {health && (
        <div className="health-info">
          <h3>Health Assessment</h3>
          <p>
            Status:{" "}
            {health.is_healthy ? "Healthy" : "Potential Issues Detected ⚠️"}
          </p>
          <p>Confidence: {(health.is_healthy_probability * 100).toFixed(1)}%</p>

          {!health.is_healthy &&
            health.diseases?.map((disease) => (
              <p key={disease.name}>
                - {disease.disease_details.local_name} (
                {(disease.probability * 100).toFixed(1)}%)
              </p>
            ))}
        </div>
      )}

      <button onClick={onReset} className="reset-button" type="button">
        Analyze another plant
      </button>
    </div>
  );
}
