import { useState } from "react";
import PlantPhotoUploader from "../../components/plantdoctor/PlantPhotoUploader";
import PlantResult from "../../components/plantdoctor/PlantResult";
import { useFetchWithAuth } from "../../tools/useFetchWithAuth";
import type { PlantIdentificationResponse } from "../../types/garden/plant";
import "./PlantDoctor.css";
import leaf from "/images/app-icon/leaf.png";

export default function PlantDoctor() {
  const [result, setResult] = useState<PlantIdentificationResponse | null>(
    null,
  );
  const [loading, setLoading] = useState(false);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const authFetch = useFetchWithAuth();

  const onImageSubmit = async (file: File) => {
    setLoading(true);

    const formData = new FormData();
    formData.append("image", file);
    formData.append("lang", "en");

    try {
      const response = await authFetch(
        `${import.meta.env.VITE_API_URL}/api/plant/identify`,
        {
          method: "POST",
          body: formData,
        },
      );

      const data: PlantIdentificationResponse = await response.json();
      setResult(data);
    } catch (err) {
      console.error("PlantDoctor is not available... :", err);
    } finally {
      setLoading(false);
    }
  };

  const reset = () => {
    setResult(null);
    setPreviewUrl(null);
  };

  return (
    <div className="plant-doctor-container">
      <img className="plant-doctor-leaf" src={leaf} alt="leaf" />
      <div className="plant-doctor-box">
        <h1 className="plant-doctor-title">Doctor Plant</h1>
        <hr className="plant-doctor-line" />
        <p className="explication-doctor">
          Doctor Plant is a smart tool that helps you take care of your plants.
          Simply take a photo of your plant and upload it to our website. In
          just a few seconds, DoctorPlant analyzes the image, identifies the
          plant, and detects any diseases.
        </p>

        {!result && (
          <>
            <div className="plant-doctor-uploader-wrapper">
              <PlantPhotoUploader
                onSubmit={onImageSubmit}
                onFileSelect={(file) =>
                  setPreviewUrl(URL.createObjectURL(file))
                }
              />
            </div>

            {previewUrl && (
              <div className="plant-doctor-preview-container">
                <img
                  className="plant-doctor-preview-image"
                  src={previewUrl}
                  alt="preview"
                />
              </div>
            )}

            {loading && (
              <p className="plant-doctor-loading-text">
                Analysis in progress...
              </p>
            )}
          </>
        )}

        {result && (
          <div className="plant-doctor-content">
            {previewUrl && (
              <div className="plant-doctor-preview-container">
                <img
                  className="plant-doctor-preview-image"
                  src={previewUrl}
                  alt="preview"
                />
              </div>
            )}
            <div className="plant-doctor-result-wrapper">
              <PlantResult result={result} onReset={reset} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
