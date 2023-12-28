type DataIDProps = {
  httpMethod: string,
  buttonText: string,
  setId: React.Dispatch<React.SetStateAction<number>>,
  onClick: React.MouseEventHandler<HTMLButtonElement> | undefined
}

const GetDataByID: React.FC<DataIDProps> = ({ setId, httpMethod, onClick, buttonText }) => {
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const id = parseInt(e.target.value, 10);

    if (isNaN(id) || id < 0) {
      setId(1);
      return;
    }

    setId(id)
  };

  return (
    <>
      <div className="container-child-1">
        <input
          name="id"
          type="number"
          min={1}
          onChange={onChange}
          placeholder="ID goes here"
        />
        <button className={httpMethod} onClick={onClick}>
          {buttonText}
        </button>
      </div>
    </>
  )
}

export default GetDataByID