import { useState } from "react";
import { countriesEndPoint } from "../../endpoints";
import axios, { AxiosResponse } from "axios";

const GetAllCountries = () => {
  type CountryObjects = {
    name: string;
    id: number;
  };

  const [data, setData] = useState<CountryObjects[] | null>(null);
  const [initiallyClicked, setInitiallyClicked] = useState(false);

  const getAllCountriesAsync = async () => {
    await axios
      .get(countriesEndPoint)
      .then((res: AxiosResponse<CountryObjects[]>) => {
        setData(res.data);
        !initiallyClicked ? setInitiallyClicked(true) : ""
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <div className="container">
        <div className="container-child-1">
          <button className="get" onClick={getAllCountriesAsync}>Get all Countries</button>
        </div>

        <div className="container-child-2">
          {initiallyClicked ? (
            <table>
              <thead>
                <tr>
                  <th>Countries</th>
                  <th>IDs</th>
                </tr>
              </thead>
              <tbody>
                {data?.map((response) => (
                  <tr key={response?.id}>
                    <td>{response?.name}</td>
                    <td>{response?.id}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            ""
          )}
        </div>
      </div>
    </>
  );
};

export default GetAllCountries