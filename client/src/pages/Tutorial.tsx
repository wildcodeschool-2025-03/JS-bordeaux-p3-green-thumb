import { useEffect, useState } from "react";
import TutorialList from "../components/tutorial/TutorialList";
import TutorialVideo from "../components/tutorial/TutorialVideo";
import "./Tutorial.css";
import leaf from "../assets/images/leaf.png";

export type Tutorial = {
  id: number;
  title: string;
  url: string;
  description: string;
  author: string;
  duration: number;
  category: string;
};

export default function Tutorial() {
  const [tutorials, setTutorials] = useState<Tutorial[]>([]);
  const [selectedTutorial, setSelectedTutorial] = useState<Tutorial | null>(
    null,
  );

  useEffect(() => {
    const fetchTutorials = async () => {
      try {
        const res = await fetch(
          `${import.meta.env.VITE_API_URL}/api/tutorials`,
        );
        if (!res.ok) throw new Error("Erreur serveur");
        const data = await res.json();
        setTutorials(data);
      } catch (err) {
        console.error("Erreur lors du fetch des tutoriels :", err);
      }
    };

    fetchTutorials();
  }, []);

  const gardeningBasics = tutorials.filter((t) => t.category === "gardening");
  const plantFocus = tutorials.filter((t) => t.category === "plant");

  return (
    <>
      <div className="tutorial-responsive">
        <img className="leaf-decor" src={leaf} alt="ceci est une feuille" />
        <div className="tutorial-box">
          <h1>Tutorials</h1>
          <hr />

          {/*ici viendra le composant pour les favoris US-22*/}

          <TutorialList
            title="Gardening step by step 🌱"
            tutorials={gardeningBasics}
            onSelect={setSelectedTutorial}
          />

          <TutorialList
            title="Flowers and Plants 🌸"
            tutorials={plantFocus}
            onSelect={setSelectedTutorial}
          />

          {selectedTutorial && (
            <TutorialVideo
              tutorial={selectedTutorial}
              onClose={() => setSelectedTutorial(null)}
            />
          )}
        </div>
      </div>
    </>
  );
}
