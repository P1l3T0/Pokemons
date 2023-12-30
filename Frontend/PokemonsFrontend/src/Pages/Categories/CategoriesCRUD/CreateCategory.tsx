import axios from "axios";
import { useState } from "react";
import { categoriesEndPoint } from "../../../endpoints";
import ResponseMessages from "../../Helpers/ResponseMessages";

const CreateCategory = () => {
  const [error, setError] = useState(false);
  const [initiallyClicked, setInitiallyClicked] = useState(false);
  const [category, setCategory] = useState<CategoryObject>();

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const trimmedValue = e.target.value.trim();

    setCategory({
      ...category,
      [e.target.name]: trimmedValue,
    });
  };

  const createCategoryAsync = async () => {
    if (!category?.name?.trim()) {
      setError(true);
      return;
    }

    await axios
      .post(`${categoriesEndPoint}`, category)
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
            name="name"
            onChange={onChange}
            placeholder="Category name goes here"
          />
          <button className="post" onClick={createCategoryAsync}>
            Create a category
          </button>
        </div>

        <ResponseMessages
          error={error}
          initiallyClicked={initiallyClicked}
          errorMessage="Invalid or duplicate value!"
          successMessage={"Category succesfully created!"}
        />
      </div>
    </>
  );
};

export default CreateCategory;
