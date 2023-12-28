import CreateOwner from "./OwnersCRUD/CreateOwner";
import DeleteOwner from "./OwnersCRUD/DeleteOwner";
import GetAllOwners from "./OwnersCRUD/GetAllOwners";
import GetOwnerById from "./OwnersCRUD/GetOwnerByID";
import UpdateOwner from "./OwnersCRUD/UpdateOwner";

const Owners = () => {
  return (
    <>
      <div>
        <div>
          <h1>Owners</h1>
          <GetAllOwners />
          <GetOwnerById />
          <CreateOwner />
          <UpdateOwner />
          <DeleteOwner />
        </div>
      </div>
    </>
  )
}

export default Owners;