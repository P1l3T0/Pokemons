import { useState } from 'react'
import axios, { AxiosResponse } from 'axios';
import { ownersEndPoint } from '../../../endpoints';
import ResponseMessages from '../../ResponseMessages';

const GetAllOwners = () => {
  type OwnerObject = {
    id: number,
    firstName: string,
    lastName: string,
    gym: string
  }

  const [error, setError] = useState(false);
  const [owner, setOwner] = useState<OwnerObject[]>([]);
  const [initiallyClicked, setInitiallyClicked] = useState(false);

  const getAllCountriesAsync = async () => {
    await axios
      .get(ownersEndPoint)
      .then((res: AxiosResponse<OwnerObject[]>) => {
        setOwner(res.data);
        setError(false);
        !initiallyClicked ? setInitiallyClicked(true) : "";
      })
      .catch((err) => {
        setError(true);
        console.log(err);
      });
  };

  return (
    <>
      <div className="container">
        <div className="container-child-1">
          <button className="get" onClick={getAllCountriesAsync}>
            Get all Owners
          </button>
        </div>

        <ResponseMessages
          error={error}
          data={owner}
          initiallyClicked={initiallyClicked}
          errorMessage="Unexpected server error!"
        />
      </div>
    </>
  );
};

export default GetAllOwners