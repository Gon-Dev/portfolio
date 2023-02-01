import { useState } from "react";
import expandIcon from "../../assets/symbols/expand-more.svg";

function AboutCard({ icon, role, description }) {
  const [isExpanded, setIsExpanded] = useState(false);
  return (
    <aside
      className="about-card-wrapper flex-column-center"
      style={{
        maxHeight: `${isExpanded ? "20rem" : "13rem"}`,
      }}
    >
      <img className="about-card-icon" src={icon} alt={`${role} icon`} />
      <h3 className="about-card-role">{role}</h3>
      <p
        className="about-card-description"
        style={{
          WebkitLineClamp: `${isExpanded ? "10" : "2"}`,
        }}
      >
        {description}
      </p>
      <button
        className="about-card-expand-button"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <img
          className="about-card-expand-icon"
          src={expandIcon}
          alt="arrow down, expand icon"
          style={{
            transform: `${isExpanded ? "rotate(180deg)" : "rotate(0deg)"}`,
          }}
        />
      </button>
    </aside>
  );
}

export default AboutCard;
