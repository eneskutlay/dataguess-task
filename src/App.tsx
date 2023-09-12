import "./App.css";
//import { useQuery, gql } from '@apollo/client';
import CountryList from "./components/CountryList.tsx";

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Junior Frontend Developer Assignment</h1>
        <CountryList />
      </header>
    </div>
  );
}
