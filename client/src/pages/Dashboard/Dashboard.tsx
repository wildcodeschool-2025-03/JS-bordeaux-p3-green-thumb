import "./dashboard.css";
import type { KeyboardEvent } from "react";
import { useState } from "react";
import Weather from "../../components/meteo/Weather";

export default function Dashboard() {
  const [open, setOpen] = useState(false);

  const handleKeyDown = (e: KeyboardEvent<HTMLButtonElement>) => {
    if (e.key === "o") {
      setOpen((prev) => !prev);
    }
  };

  return (
    <>
      <Weather />
      <div className="legal-notice-container">
        <div className="legal-notice-box">
          <button
            type="button"
            className="legal-notice-toggle"
            onClick={() => setOpen(!open)}
            onKeyDown={handleKeyDown}
          >
            {open ? "Hide Legal Notice" : "Show Legal Notice"}
          </button>

          <div className={`legal-notice-content ${open ? "open" : ""}`}>
            <section className="legal-notice-section">
              <h2 className="legal-notice-subtitle">1. Website Publisher</h2>
              <p className="legal-notice-text">
                Name / Company: Greenthumb
                <br />
                Address: 6 rue du Général de Gaulle
                <br />
                Phone: +33 5 98 42 00 98
                <br />
                Email: contact-service-client@greenthumb.com
              </p>
            </section>

            <section className="legal-notice-section">
              <h2 className="legal-notice-subtitle">2. Hosting Provider</h2>
              <p className="legal-notice-text">Name: OVH</p>
            </section>

            <section className="legal-notice-section">
              <h2 className="legal-notice-subtitle">
                3. Intellectual Property
              </h2>
              <p className="legal-notice-text">
                All elements present on the website (texts, images, logos, etc.)
                are protected by copyright laws. Any reproduction, even partial,
                is prohibited without prior authorization.
              </p>
            </section>

            <section className="legal-notice-section">
              <h2 className="legal-notice-subtitle">4. Personal Data</h2>
              <p className="legal-notice-text">
                In accordance with the General Data Protection Regulation
                (GDPR), any person has the right to access, rectify, and delete
                their personal data. To exercise this right:
                contact-service-client@greenthumb.com.
                <br />
                The collected data will never be sold to third parties.
              </p>
            </section>

            <section className="legal-notice-section">
              <h2 className="legal-notice-subtitle">5. Cookies</h2>
              <p className="legal-notice-text">
                This website uses cookies (e.g., to measure audience, improve
                navigation). You can configure their use in your browser
                settings.
              </p>
            </section>

            <section className="legal-notice-section">
              <h2 className="legal-notice-subtitle">6. Liability</h2>
              <p className="legal-notice-text">
                The publisher disclaims all responsibility for the use of the
                information provided on the website or for any potential damages
                resulting from such use.
              </p>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}
