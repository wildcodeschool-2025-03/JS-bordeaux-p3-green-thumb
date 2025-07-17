import { useState } from "react";
import "./PlantPhotoUploader.css";

interface Props {
  onSubmit: (file: File) => void;
}

export default function PlantPhotoUploader({ onSubmit }: Props) {
  const [file, setFile] = useState<File | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.[0]) {
      setFile(e.target.files[0]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (file) {
      onSubmit(file);
    }
  };

  return (
    <form className="photo-uploader-form" onSubmit={handleSubmit}>
      <label htmlFor="plant-photo" className="upload-label">
        Choisir une photo de plante :
      </label>
      <input
        id="plant-photo"
        type="file"
        accept="image/*"
        onChange={handleChange}
        className="upload-input"
      />
      <button type="submit" className="upload-button" disabled={!file}>
        Analyser
      </button>
    </form>
  );
}
