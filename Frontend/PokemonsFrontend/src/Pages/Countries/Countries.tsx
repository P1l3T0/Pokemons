import GetAllCountries from "./GetAllCountries";
import CreateCountry from "./CreateCountry";
import GetCountryById from "./GetCountryById";

const Countries = () => {
  return (
    <>
      <GetAllCountries />
      <GetCountryById />
      <CreateCountry />
    </>
  );
};

export default Countries;
