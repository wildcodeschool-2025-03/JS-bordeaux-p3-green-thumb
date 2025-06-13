import "./dashboard.css";

export default function Dashboard() {
  return (
    <div className="dashboard">
      <div className="header">
        <div className="user-info">
          <img src="/user-avatar.png" alt="User" />
          <span>User_420</span>
        </div>
        <div className="weather">
          <div>24°C</div>
          <div className="small-text">Partiellement nuageux</div>
        </div>
      </div>

      <article>
        <h2>
          Journal de bord <span className="info-icon">ℹ️</span>
        </h2>
      </article>

      <div className="journal">
        <div className="plant-carousel">
          <div className="plant-card">
            <img src="/plants/aloe.png" alt="Aloe" />
            <div>Aloe</div>
          </div>
          <div className="plant-card active">
            <img src="/plants/ficus.png" alt="Ficus" />
            <div>Ficus</div>
          </div>
          <div className="plant-card">
            <img src="/plants/aloe.png" alt="Aloe" />
            <div>Aloe</div>
          </div>
        </div>
      </div>
      <article>
        <h2>Recommandé pour toi</h2>
      </article>

      <div className="recommended">
        <div className="recommended-images">
          <img src="/recommended/1.jpg" alt="Recommandation 1" />
          <img src="/recommended/2.jpg" alt="Recommandation 2" />
        </div>
      </div>

      <article>
        <h2>A propos des plantes </h2>
      </article>

      <div className="fact-box">
        La plus grande fleur individuelle du monde est le rafflesia (Rafflesia
        arnoldii). Elle peut atteindre 1 m de diamètre et peser jusqu’à 11 kg.
      </div>

      <nav className="navigation">{/* Your navigation content */}</nav>
    </div>
  );
}
