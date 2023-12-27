import { useState } from "react";
import { getAllCountries } from "../../endpoints";
import axios, { AxiosResponse } from "axios";

const AllCountries = () => {
  type CountryObjects = {
    name: string;
    id: number;
  };

  const [data, setData] = useState<CountryObjects[] | null>(null);
  const [clicked, setClicked] = useState(false);

  const handleClickAsync = async () => {
    if (!clicked) {
      await axios
        .get(getAllCountries)
        .then((res: AxiosResponse<CountryObjects[]>) => {
          setData(res.data);
          setClicked(true);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  return (
    <>
      <div className="container">
        <div className="container-child-1">
          <button className="get" onClick={handleClickAsync}>Get all Countries</button>
        </div>

        <div>
          {clicked ? (
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

export default AllCountries