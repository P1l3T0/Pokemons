import axios from "axios";
import { useState } from "react";
import { categoriesEndPoint } from "../../../endpoints";
import ResponseMessages from "../../Helpers/ResponseMessages";

const UpdateCategory = () => {
  const [error, setError] = useState(false);
  const [initiallyClicked, setInitiallyClicked] = useState(false);
  const [category, setCategory] = useState<CategoryObject>();

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const trimmedValue = e.target.value.trim();

    setCategory({
      ...category,
      [e.target.name]: trimmedValue
    })
  };

  const updateCategoryAsync = async () => {
    if (!category?.name?.trim()) {
      setError(true);
      return;
    }

    await axios
      .put(`${categoriesEndPoint}/${category.id}`, category)
      .then(() => {
        setError(false);
        !initiallyClicked ? setInitiallyClicked(true) : ""
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
            type="number"
            name="id"
            onChange={onChange}
            placeholder="Category ID goes here"
          />
          <input
            type="text"
            name="name"
            onChange={onChange}
            placeholder="Category name goes here"
          />
          <button className="put" onClick={updateCategoryAsync}>
            Update a category
          </button>
        </div>

        <ResponseMessages
          error={error}
          initiallyClicked={initiallyClicked}
          errorMessage="Enter valid data or ID!"
          successMessage={"Category succesfully updated!"}
        />
      </div>
    </>
  );
};

export default UpdateCategory;
