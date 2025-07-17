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
      <input
        id="plant-photo"
        type="file"
        accept="image/*"
        onChange={handleChange}
        className="hidden-file-input"
      />

      <label htmlFor="plant-photo" className="custom-upload-button">
        Choose a plant photo
      </label>

      <span className="file-name">{file ? file.name : "No file selected"}</span>

      <button type="submit" className="upload-button" disabled={!file}>
        Analyze
      </button>
    </form>
  );
}
