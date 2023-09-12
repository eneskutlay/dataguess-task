import React from "react";
import useCustomData, { GroupField } from "../lib/useCustomData";

const CountryList: React.FC = () => {
  const {
    query,
    setQuery,
    groupField,
    setGroupField,
    filteredData,
    loading,
    error,
  } = useCustomData(); // useCustomData hook'unu kullanın

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <div>
      <h1>Country List</h1>
      <div>
        <input
          type="text"
          placeholder="Search by name"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>
      <div>
        <select
          value={groupField}
          onChange={(e) => setGroupField(e.target.value as GroupField)}
        >
          <option value="name">Group by Name</option>
          <option value="capital">Group by Capital</option>
        </select>
      </div>
      <ul>
        {filteredData.map((country) => (
          <li key={country.code}>
            {country.name} - {country.capital}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CountryList;
