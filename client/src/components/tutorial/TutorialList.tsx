import type { Tutorial } from "../../pages/Tutorial";
import "./TutorialList.css";

type PreviewTutorial = {
  title: string;
  tutorials: Tutorial[];
  onSelect: (Tutorial: Tutorial) => void;
};

function getYoutubeThumbnail(url: string): string | null {
  const regex =
    /(?:youtube\.com.*(?:v=|\/embed\/|watch\?v=)|youtu\.be\/)([^&?/]+)/;
  const match = url.match(regex);
  return match ? match[1] : null;
}

export default function TutorialList({
  title,
  tutorials,
  onSelect,
}: PreviewTutorial) {
  return (
    <section className="section-tutorial">
      <h2 className="section-title">{title}</h2>
      <div className="carousel-box">
        <div className="gallery-video">
          {tutorials.map((tutorial) => (
            <div
              key={tutorial.id}
              className="thumbnail"
              onClick={() => onSelect(tutorial)}
              onKeyDown={(e) => e.key === "o"}
            >
              <img
                src={`https://img.youtube.com/vi/${getYoutubeThumbnail(
                  tutorial.url,
                )}/mqdefault.jpg`}
                alt={`Miniature de ${tutorial.title}`}
              />
              <div className="thumbnail-title">{tutorial.title}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
