import GetAllCountries from "./CountriesCRUD/GetAllCountries";
import CreateCountry from "./CountriesCRUD/CreateCountry";
import GetCountryById from "./CountriesCRUD/GetCountryById";
import UpdateCountry from "./CountriesCRUD/UpdateCountry";
import DeleteCountry from "./CountriesCRUD/DeleteCountry";

const Countries = () => {
  return (
    <>
      <div>
        <div>
          <h1>Countries</h1>
          <GetAllCountries />
          <GetCountryById />
          <CreateCountry />
          <UpdateCountry />
          <DeleteCountry />
        </div>
      </div>
    </>
  );
};

export default Countries;
