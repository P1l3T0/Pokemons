import { useState } from "react";
import axios, { AxiosResponse } from "axios";
import { categoriesEndPoint } from "../../../endpoints";
import GetDataByID from "../../Helpers/GetDataByID";
import ResponseMessages from "../../Helpers/ResponseMessages";

const GetCategoryById = () => {
  const [id, setId] = useState(0);
  const [error, setError] = useState(false);
  const [initiallyClicked, setInitiallyClicked] = useState(false);
  const [category, setCategory] = useState<CategoryObject>();

  const getCategoryByIdAsync = async () => {
    await axios
      .get(`${categoriesEndPoint}/${id}`)
      .then((res: AxiosResponse<CategoryObject>) => {
        setCategory(res.data);
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
          buttonText={"Get category by ID"}
          onClick={getCategoryByIdAsync}
        />

        <ResponseMessages
          error={error}
          data={category}
          initiallyClicked={initiallyClicked}
          errorMessage="Enter a valid ID!"
        />
      </div>
    </>
  );
};

export default GetCategoryById;
