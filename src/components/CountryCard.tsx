/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import "./styles/CountryCard.css";

interface CountryCardProps {
  name: string;
  capital: string;
  emoji: string;
  currency: string;
  languages: { code: string; name: string }[];
  isOpen: boolean;
  toggleCard: () => void;
}

const countryDataNotFound = "Data not available";

const CountryCard: React.FC<CountryCardProps> = ({
  name,
  capital,
  emoji,
  currency,
  languages,
  isOpen,
  toggleCard,
}) => {
  return (
    <div className={`countryCard ${isOpen ? "open" : ""}`} onClick={toggleCard}>
      <div className="countryHeader">
        <h4>{name}</h4>
      </div>
      {isOpen && (
        <div className="countryDetails">
          <p>
            <strong>Capital:</strong> {capital ? capital : countryDataNotFound}
          </p>
          <p>
            <strong>Emoji:</strong> {emoji}
          </p>
          <p>
            <strong>Currency:</strong>{" "}
            {currency ? currency : countryDataNotFound}
          </p>
          <p>
            <strong>Languages:</strong>{" "}
            {languages.map((lang) => lang.name).join(", ")
              ? languages.map((lang) => lang.name).join(", ")
              : countryDataNotFound}
          </p>
        </div>
      )}
    </div>
  );
};

export default CountryCard;
