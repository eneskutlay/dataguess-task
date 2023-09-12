import React, { useState } from "react";
import "./styles/CountryCard.css";

interface CountryCardProps {
  name: string;
  capital: string;
  emoji: string;
  currency: string;
  languages: { code: string; name: string }[];
}

const CountryCard: React.FC<CountryCardProps> = ({
  name,
  capital,
  emoji,
  currency,
  languages,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCard = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="countryCard">
      <div className="countryHeader" onClick={toggleCard}>
        <h4>{name}</h4>
      </div>
      {isOpen && (
        <div className="countryDetails">
          <p>
            <strong>Capital:</strong> {capital}
          </p>
          <p>
            <strong>Emoji:</strong> {emoji}
          </p>
          <p>
            <strong>Currency:</strong> {currency}
          </p>
          <p>
            <strong>Languages:</strong>{" "}
            {languages.map((lang) => lang.name).join(", ")}
          </p>
        </div>
      )}
    </div>
  );
};

export default CountryCard;
