import "./dashboard.css";

export default function Dashboard() {
  return (
    <div className="dashboard">
      {/* User Info Component */}
      <div className="header">
        <div className="user-info">
          <img src="/user-avatar.png" alt="User" />
          <span>User_420</span>
        </div>

        {/* Weather Component */}
        <div className="weather">
          <div>24°C</div>
          <div className="small-text">Partiellement nuageux</div>
        </div>
      </div>

      <article>
        <h2>
          Dashboard <span className="info-icon">ℹ️</span>
        </h2>
      </article>

      {/* PlantCards / PlantCarousel Component */}
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
        <h2>Recommandations</h2>
      </article>

      {/* Recommandations Component */}
      <div className="recommended">
        <div className="recommended-images">
          <img src="/recommended/1.jpg" alt="Recommandation 1" />
          <img src="/recommended/2.jpg" alt="Recommandation 2" />
        </div>
      </div>

      <article>
        <h2>About Plants </h2>
      </article>

      {/* FactBox Component */}
      <div className="fact-box">
        The largest individual flower in the world is the rafflesia (Rafflesia
        arnoldii). It can reach up to 1 meter in diameter and weigh up to 11
        kilograms.
      </div>

      {/* Navigation Component */}
      <nav className="navigation">{/* TODO: Insert Navigation here */}</nav>
    </div>
  );
}
