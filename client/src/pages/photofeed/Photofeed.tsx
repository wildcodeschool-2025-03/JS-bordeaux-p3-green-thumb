import "./Photofeed.css";
import leaf from "/images/app-icon/leaf.png";

export default function Photofeed() {
  return (
    <div className="photofeed-responsive">
      <img className="leaf-decor" src={leaf} alt="This is a leaf" />
      <div className="photofeed-box">
        <h1>Photofeed</h1>
        <hr />
        <p className="photofeed-alert">🚧 Page under construction 🚧</p>
      </div>
    </div>
  );
}
