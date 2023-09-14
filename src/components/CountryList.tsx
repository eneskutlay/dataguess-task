import React, { useState } from "react";
import useCustomData from "../lib/useCustomData";
import CountryCard from "./CountryCard";
import "./styles/CountryList.css";

const CountryList: React.FC = () => {
  const { query, setQuery, filteredData, loading, error } = useCustomData();
  const [openCardIndex, setOpenCardIndex] = useState(0);

  const filteredResults = query
    ? filteredData.filter((country) =>
        country.name.toLowerCase().includes(query.toLowerCase())
      )
    : filteredData;

  const first10Results = filteredResults.slice(0, 10);

  if (loading) {
    return <p className="loadingString">Loading...</p>;
  }

  if (error) {
    return <p className="errorString">Error: {error.message}</p>;
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    if (inputValue && openCardIndex !== -1) {
      setOpenCardIndex(-1); // Tüm kartları kapat
    }
    setQuery(inputValue);
  };

  return (
    <div className="countryList">
      <h2>Country List</h2>
      <div className="countrySearch">
        <input
          type="text"
          placeholder="Search by name"
          value={query}
          //onChange={(e) => setQuery(e.target.value)}
          onChange={handleInputChange}
        />
      </div>
      <div className="countryListModal">
        <ul className="countryResults">
          {first10Results.map((country, index) => (
            <li key={country.code} className="countryResult">
              <CountryCard
                name={country.name}
                capital={country.capital}
                emoji={country.emoji}
                currency={country.currency}
                languages={country.languages}
                isOpen={index === openCardIndex}
                toggleCard={() => setOpenCardIndex(index)}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CountryList;
