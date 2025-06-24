import type { Tutorial } from "../../../pages/Tutorial";
import "./TutorialVideo.css";

function getYoutubeId(url: string): string | null {
  const regex =
    /(?:youtube\.com.*(?:v=|\/embed\/|watch\?v=)|youtu\.be\/)([^&?/]+)/;
  const match = url.match(regex);
  return match ? match[1] : null;
}

type YTVideo = {
  tutorial: Tutorial;
  onClose: () => void;
};

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
            {tutorial.author} – {tutorial.newduration} min
          </p>
        </div>
      </div>
    </div>
  );
}
