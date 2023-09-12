// { GroupField }
import React from "react";
import useCustomData from "../lib/useCustomData";
import CountryCard from "./CountryCard";
import "./styles/CountryList.css";

const CountryList: React.FC = () => {
  const {
    query,
    setQuery,
    //groupField,
    //setGroupField,
    filteredData,
    loading,
    error,
  } = useCustomData();

  const filteredResults = query
    ? filteredData.filter((country) =>
        country.name.toLowerCase().includes(query.toLowerCase())
      )
    : filteredData;

  const first10Results = filteredResults.slice(0, 10);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <div className="countryList">
      <h1>Country List</h1>
      <div className="countrySearch">
        <input
          type="text"
          placeholder="Search by name"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>
      <div className="countryListModal">
        <ul className="countryResults">
          {first10Results.map((country) => (
            <li key={country.code} className="countryResult">
              <CountryCard
                name={country.name}
                capital={country.capital}
                emoji={country.emoji}
                currency={country.currency}
                languages={country.languages}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CountryList;
