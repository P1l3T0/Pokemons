import axios from "axios";
import { useState } from "react";
import { ownersEndPoint } from "../../../endpoints";
import ResponseMessages from "../../Helpers/ResponseMessages";

const CreateOwner = () => {
  const [error, setError] = useState(false);
  const [owner, setOwner] = useState<OwnerObject>()
  const [initiallyClicked, setInitiallyClicked] = useState(false);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const trimmedValue = e.target.value.trim();

    setOwner({
      ...owner,
      [e.target.name]: trimmedValue,
    });
  };

  const createOwnerAsync = async () => {
    if (!owner?.firstName?.trim() || !owner?.lastName?.trim() || !owner?.gym?.trim()) {
      setError(true);
      return;
    }

    await axios
      .post(`${ownersEndPoint}`, owner)
      .then(() => {
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
          <input
            type="text"
            name="firstName"
            onChange={onChange}
            placeholder="Owner's first name goes here"
          />
          <input
            type="text"
            name="lastName"
            onChange={onChange}
            placeholder="Owner's last name goes here"
          />
          <input
            type="text"
            name="gym"
            onChange={onChange}
            placeholder="Owner's gym goes here"
          />
          <button className="post" onClick={createOwnerAsync}>
            Create an owner
          </button>
        </div>

        <ResponseMessages
          error={error}
          initiallyClicked={initiallyClicked}
          errorMessage="Invalid or duplicate value!"
          successMessage={"Owner succesfully created!"}
        />
      </div>
    </>
  );
};

export default CreateOwner;
