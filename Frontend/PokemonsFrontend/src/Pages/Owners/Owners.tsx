import GetAllOwners from "./OwnersCRUD/GetAllOwners";

const Owners = () => {


  return (
    <>
      <div className="container">
        <div>
          <h1>Owners</h1>
          <GetAllOwners />
        </div>
      </div>
    </>
  )
}

export default Owners;