import CreateCategory from "./CategoriesCRUD/CreateCategory";
import GetAllCategories from "./CategoriesCRUD/GetAllCategories";
import GetCategoryById from "./CategoriesCRUD/GetCategoryByID";

const Categories = () => {
  return (
    <>
      <div>
        <div>
          <h1>Categories</h1>
          <GetAllCategories />
          <GetCategoryById />
          <CreateCategory />
        </div>
      </div>
    </>
  );
};

export default Categories;
