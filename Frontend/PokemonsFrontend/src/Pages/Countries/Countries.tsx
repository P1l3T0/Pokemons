import GetAllCountries from "./CountriesCRUD/GetAllCountries";
import CreateCountry from "./CountriesCRUD/CreateCountry";
import GetCountryById from "./CountriesCRUD/GetCountryById";
import UpdateCountry from "./CountriesCRUD/UpdateCountries";
import DeleteCountry from "./CountriesCRUD/DeleteCountry";

const Countries = () => {
  return (
    <>
      <GetAllCountries />
      <GetCountryById />
      <CreateCountry />
      <UpdateCountry />
      <DeleteCountry />
    </>
  );
};

export default Countries;
