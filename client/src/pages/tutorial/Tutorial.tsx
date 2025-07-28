import { useEffect, useState } from "react";
import TutorialList from "../../components/tutorial/TutorialList";
import TutorialVideo from "../../components/tutorial/TutorialVideo";
import type { Tutorials } from "../../types/tutorials/tutorials.ts";
import "./Tutorial.css";
import leaf from "/images/app-icon/leaf.png";
import { useFetchWithAuth } from "../../tools/useFetchWithAuth.ts";

export default function Tutorial() {
  const fetchWithAuth = useFetchWithAuth();
  const [tutorials, setTutorials] = useState<Tutorials[]>([]);
  const [selectedTutorial, setSelectedTutorial] = useState<Tutorials | null>(
    null,
  );

  useEffect(() => {
    const fetchTutorials = async () => {
      try {
        const res = await fetchWithAuth(
          `${import.meta.env.VITE_API_URL}/api/tutorials`,
        );
        if (!res.ok) throw new Error("servor error");
        const tutorials = await res.json();
        setTutorials(tutorials);
      } catch (err) {
        console.error("error while fetching tutorials:", err);
      }
    };

    fetchTutorials();
  }, [fetchWithAuth]);

  const tutorialsgardening = tutorials.filter(
    (t) => t.category === "gardening",
  );
  const tutorialsplants = tutorials.filter((t) => t.category === "plant");

  return (
    <>
      <div className="tutorial-responsive">
        <img className="leaf-decor" src={leaf} alt="greenthumb logo" />
        <div className="tutorial-box">
          <h1>Tutorials</h1>
          <hr />

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
