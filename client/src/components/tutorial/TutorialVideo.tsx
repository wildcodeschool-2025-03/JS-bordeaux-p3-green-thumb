import type { Tutorial } from "../../pages/tutorial/Tutorial";
import "./TutorialVideo.css";

type YTVideo = {
  tutorial: Tutorial;
  onClose: () => void;
};

function getYoutubeId(url: string): string | null {
  const regex =
    /(?:youtube\.com.*(?:v=|\/embed\/|watch\?v=)|youtu\.be\/)([^&?/]+)/;
  const match = url.match(regex);
  return match ? match[1] : null;
}

function formatDuration(seconds: number): string {
  const min = Math.floor(seconds / 60);
  const sec = seconds % 60;
  return `${min} min ${sec.toString().padStart(2, "0")} sec`;
}

export default function TutorialVideo({ tutorial, onClose }: YTVideo) {
  const videoId = getYoutubeId(tutorial.url);

  return (
    <div
      className="close-video"
      onKeyDown={(e) => e.key === "o"}
      onClick={onClose}
    >
      <div
        className="content-video"
        onKeyDown={(e) => e.key === "o"}
        onClick={(e) => e.stopPropagation()}
      >
        {videoId && (
          <iframe
            className="frame-video"
            src={`https://www.youtube.com/embed/${videoId}`}
            title={tutorial.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        )}

        <div className="info-tutorial">
          <h2 className="title-tutorial">{tutorial.title}</h2>
          <hr />
          <p className="description-tutorial">{tutorial.description}</p>
          <p>
            {tutorial.author} – {formatDuration(tutorial.duration)}
          </p>
        </div>
      </div>
    </div>
  );
}
