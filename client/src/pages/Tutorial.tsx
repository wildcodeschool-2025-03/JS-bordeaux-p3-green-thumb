import { useEffect, useState } from "react";
import TutorialList from "../components/tutorial/TutorialList";
import TutorialVideo from "../components/tutorial/modals/TutorialVideo";

export type Tutorial = {
  id: number;
  title: string;
  url: string;
  description: string;
  author: string;
  duration: number;
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

  const base = tutorials.filter((t) => t.id >= 1 && t.id <= 10);
  const themes = tutorials.filter((t) => t.id >= 11 && t.id <= 21);

  return (
    <>
      {/*<img src={leaf} alt="ceci est une feuille" />*/}
      <div className="tutorial-box">
        <h1>Tutorials</h1>

        <TutorialList
          title="Gardening step by step 🌱"
          tutorials={base}
          onSelect={setSelectedTutorial}
        />

        <TutorialList
          title="Flowers and Plants 🌸"
          tutorials={themes}
          onSelect={setSelectedTutorial}
        />

        {selectedTutorial && (
          <TutorialVideo
            tutorial={selectedTutorial}
            onClose={() => setSelectedTutorial(null)}
          />
        )}
      </div>
    </>
  );
}
