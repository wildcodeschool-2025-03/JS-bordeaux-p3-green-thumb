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
    <div className="plant-result-container">
      <h2 className="plant-result-title">Analysis Result</h2>
      <hr className="plant-result-line" />

      {filteredSuggestions.length === 0 && (
        <p className="plant-result-empty">
          Sorry, the plant could not be reliably identified.
        </p>
      )}

      {filteredSuggestions.map((s) => (
        <div key={s.plant_name} className="plant-result-card">
          <h3 className="plant-result-common-name">
            {s.plant_details.common_names?.[0] || s.plant_name}
          </h3>
          <p className="plant-result-scientific-name">
            <strong>Scientific Name:</strong> {s.plant_name}
          </p>

          {s.plant_details.wiki_description?.value && (
            <p className="plant-result-description">
              {s.plant_details.wiki_description.value}
            </p>
          )}
          {s.plant_details.url && (
            <a
              className="plant-result-link"
              href={s.plant_details.url}
              target="_blank"
              rel="noreferrer"
            >
              Learn more
            </a>
          )}
        </div>
      ))}

      {health && (
        <div className="plant-result-health">
          <h3 className="plant-result-health-title">Health Assessment</h3>
          <p className="plant-result-health-status">
            Status:{" "}
            {health.is_healthy ? "Healthy" : "Potential Issues Detected ⚠️"}
          </p>
          <p className="plant-result-health-confidence">
            Confidence: {(health.is_healthy_probability * 100).toFixed(1)}%
          </p>

          {!health.is_healthy &&
            health.diseases?.map((disease) => (
              <p key={disease.name} className="plant-result-disease">
                - {disease.disease_details.local_name} (
                {(disease.probability * 100).toFixed(1)}%)
              </p>
            ))}
        </div>
      )}

      <button
        onClick={onReset}
        className="plant-result-reset-button"
        type="button"
      >
        Analyze another plant
      </button>
    </div>
  );
}
