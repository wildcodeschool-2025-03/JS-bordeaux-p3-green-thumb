import { useEffect, useState } from "react";
import type { Tutorials } from "../../types/tutorials/tutorials.ts";
import TutorialList from "../../components/tutorial/TutorialList";
import TutorialVideo from "../../components/tutorial/TutorialVideo";
import "./Tutorial.css";
import leaf from "../../assets/images/leaf.png";

export default function Tutorial() {
  const [tutorials, setTutorials] = useState<Tutorials[]>([]);
  const [selectedTutorial, setSelectedTutorial] = useState<Tutorials | null>(
    null,
  );

  useEffect(() => {
    const fetchTutorials = async () => {
      try {
        const res = await fetch(
          `${import.meta.env.VITE_API_URL}/api/tutorials`,
        );
        if (!res.ok) throw new Error("Erreur serveur");
        const tutorials = await res.json();
        setTutorials(tutorials);
      } catch (err) {
        console.error("Erreur lors du fetch des tutoriels :", err);
      }
    };

    fetchTutorials();
  }, []);

  const tutorialsgardening = tutorials.filter(
    (t) => t.category === "gardening",
  );
  const tutorialsplants = tutorials.filter((t) => t.category === "plant");

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
            tutorials={tutorialsgardening}
            onSelect={setSelectedTutorial}
          />

          <TutorialList
            title="Flowers and Plants 🌸"
            tutorials={tutorialsplants}
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
