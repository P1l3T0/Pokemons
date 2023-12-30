import { useState } from 'react'
import axios, { AxiosResponse } from 'axios';
import { ownersEndPoint } from '../../../endpoints';
import ResponseMessages from '../../Helpers/ResponseMessages';

const GetAllOwners = () => {
  const [error, setError] = useState(false);
  const [owner, setOwner] = useState<OwnerObject[]>([]);
  const [initiallyClicked, setInitiallyClicked] = useState(false);

  const getAllOwnersAsync = async () => {
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
          <button className="get" onClick={getAllOwnersAsync}>
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