import GetAllCountries from "./GetAllCountries";
import CreateCountry from "./CreateCountry";
import GetCountryById from "./GetCountryById";
import UpdateCountry from "./UpdateCountries";

const Countries = () => {
  return (
    <>
      <GetAllCountries />
      <GetCountryById />
      <CreateCountry />
      <UpdateCountry />
    </>
  );
};

export default Countries;
