import { useState } from 'react'
import { countriesEndPoint } from '../../endpoints'
import axios, { AxiosResponse } from "axios";

const GetCountryById = () => {
  type CountryObject = {
    name: string;
    id: number;
  };

  const [id, setId] = useState(0);
  const [country, setCountry] = useState<CountryObject | null>(null);
  const [initiallyClicked, setInitiallyClicked] = useState(false);

  const onChange = (e: any) => {
    setId(e.target.value);
  }

  const getCountryByIdAsync = async () => {
    await axios
      .get(`${countriesEndPoint}/${id}`)
      .then((res: AxiosResponse<CountryObject>) => {
        setCountry(res.data);
        !initiallyClicked ? setInitiallyClicked(true) : ""
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <div className="container">
        <div className='container-child-1'>
          <input name='id' onChange={onChange} type='number' placeholder='ID goes here' />
          <button className='get' onClick={getCountryByIdAsync}>Get country by ID</button>
        </div>

        <div className='container-child-2'>
          {initiallyClicked ? (
            <table>
              <thead>
                <tr>
                  <th>Country</th>
                  <th>ID</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{country?.name}</td>
                  <td>{country?.id}</td>
                </tr>
              </tbody>
            </table>
          ) : (
            ""
          )}
        </div>
      </div >
    </>
  )
}

export default GetCountryById