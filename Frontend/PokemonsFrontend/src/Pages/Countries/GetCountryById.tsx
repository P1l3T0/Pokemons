import { useState } from 'react'
import { getCountryById } from '../../endpoints'
import axios, { AxiosResponse } from "axios";

const GetCountryById = () => {
  type CountryObjects = {
    name: string;
    id: number;
  };

  const [id, setId] = useState(0);
  const [initiallyClicked, setinitiallyClicked] = useState(false);
  const [data, setData] = useState<CountryObjects | null>(null);

  const onChange = (e: any) => {
    setId(e.target.value);
  }

  const handleClickAsync = async () => {
    await axios
      .get(`${getCountryById}/${id}`)
      .then((res: AxiosResponse<CountryObjects>) => {
        setData(res.data);
        !initiallyClicked ? setinitiallyClicked(true) : ""
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
          <button className='get' onClick={handleClickAsync}>Get country by ID: </button>
        </div>

        <div>
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
                  <td>{data?.name}</td>
                  <td>{data?.id}</td>
                </tr>
              </tbody>
            </table>
          ) : (
            ""
          )}
        </div>
      </div>
    </>
  )
}

export default GetCountryById