import GetAllOwners from "./OwnersCRUD/GetAllOwners";
import GetOwnerById from "./OwnersCRUD/GetOwnerByID";

const Owners = () => {


  return (
    <>
      <div className="container">
        <div>
          <h1>Owners</h1>
          <GetAllOwners />
          <GetOwnerById />
        </div>
      </div>
    </>
  )
}

export default Owners;