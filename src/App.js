import "./App.css";
import Countries from "./component/Countries/Countries";
import Country from "./component/Country/Country";

function App() {
  return (
    <div className="App">
      <Countries></Countries>
      <Country></Country>
    </div>
  );
}







/* function LoadCountries() {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);
  return (
    <div>
      <h1>Visiting Every Country in The World!!!!</h1>
      <b>Available Countries : {countries.length}</b>
      {countries.map((country) => (
        <Country
          name={country.name.common}
          capital={country.capital}
          population={country.population}
        ></Country>
      ))}
    </div>
  );
}
function Country(props) {
  return (
    <div className="details">
      <h2>Name:{props.name}</h2>
      <h4>Capital:{props.capital}</h4>
      <p>Population:{props.population}</p>
    </div>
  );
} */
export default App;
