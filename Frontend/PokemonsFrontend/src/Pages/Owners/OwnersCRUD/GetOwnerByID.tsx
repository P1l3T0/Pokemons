import { useState } from "react";
import axios, { AxiosResponse } from "axios";
import { ownersEndPoint } from "../../../endpoints";
import GetDataByID from "../../Helpers/GetDataByID";
import ResponseMessages from "../../Helpers/ResponseMessages";

const GetOwnerById = () => {
  const [id, setId] = useState(0);
  const [error, setError] = useState(false);
  const [owner, setOwner] = useState<OwnerObject>();
  const [initiallyClicked, setInitiallyClicked] = useState(false);

  const getOwnerByIdAsync = async () => {
    await axios
      .get(`${ownersEndPoint}/${id}`)
      .then((res: AxiosResponse<OwnerObject>) => {
        setOwner(res.data);
        setError(false);
        !initiallyClicked ? setInitiallyClicked(true) : "";
      })
      .catch((err) => {
        console.log(err);
        setError(true);
      });
  };

  return (
    <>
      <div className="container">
        <GetDataByID
          setId={setId}
          httpMethod={"get"}
          buttonText={"Get owner by ID"}
          onClick={getOwnerByIdAsync}
        />

        <ResponseMessages
          error={error}
          data={owner}
          initiallyClicked={initiallyClicked}
          errorMessage="Enter a valid ID!"
        />
      </div>
    </>
  );
};

export default GetOwnerById;
