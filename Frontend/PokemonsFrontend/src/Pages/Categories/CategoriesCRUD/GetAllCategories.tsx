import { useState } from "react";
import axios, { AxiosResponse } from "axios";
import { categoriesEndPoint } from "../../../endpoints";
import ResponseMessages from "../../Helpers/ResponseMessages";

const GetAllCategories = () => {
  const [error, setError] = useState(false);
  const [category, setCategory] = useState<CategoryObject[]>([]);
  const [initiallyClicked, setInitiallyClicked] = useState(false);

  const getAllCategoriesAsync = async () => {
    await axios
      .get(categoriesEndPoint)
      .then((res: AxiosResponse<CategoryObject[]>) => {
        setCategory(res.data);
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
          <button className="get" onClick={getAllCategoriesAsync}>
            Get all categories
          </button>
        </div>

        <ResponseMessages
          error={error}
          data={category}
          initiallyClicked={initiallyClicked}
          errorMessage="Unexpected server error!"
        />
      </div>
    </>
  );
};

export default GetAllCategories;
