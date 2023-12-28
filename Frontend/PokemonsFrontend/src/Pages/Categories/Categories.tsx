import CreateCategory from "./CategoriesCRUD/CreateCategory";
import DeleteCategory from "./CategoriesCRUD/DeleteCategory";
import GetAllCategories from "./CategoriesCRUD/GetAllCategories";
import GetCategoryById from "./CategoriesCRUD/GetCategoryByID";
import UpdateCategory from "./CategoriesCRUD/UpdateCategory";

const Categories = () => {
  return (
    <>
      <div>
        <div>
          <h1>Categories</h1>
          <GetAllCategories />
          <GetCategoryById />
          <CreateCategory />
          <UpdateCategory />
          <DeleteCategory />
        </div>
      </div>
    </>
  );
};

export default Categories;
