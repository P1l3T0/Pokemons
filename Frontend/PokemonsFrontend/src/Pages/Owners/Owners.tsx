import CreateOwner from "./OwnersCRUD/CreateOwner";
import GetAllOwners from "./OwnersCRUD/GetAllOwners";
import GetOwnerById from "./OwnersCRUD/GetOwnerByID";
import UpdateOwner from "./OwnersCRUD/UpdateOwner";

const Owners = () => {
  return (
    <>
      <div className="container">
        <div>
          <h1>Owners</h1>
          <GetAllOwners />
          <GetOwnerById />
          <CreateOwner />
          <UpdateOwner />
        </div>
      </div>
    </>
  )
}

export default Owners;