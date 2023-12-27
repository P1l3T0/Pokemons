type CountryIDProps = {
  httpMethod: string,
  buttonText: string,
  setId: React.Dispatch<React.SetStateAction<number>>,
  onClick: React.MouseEventHandler<HTMLButtonElement> | undefined
}

const CountryID: React.FC<CountryIDProps> = ({ setId, httpMethod, onClick, buttonText }) => {
  const onChange = (e: any) => {
    if (e.target.value !== "" && e.target.value > 0) {
      setId(e.target.value)
    }
  };

  return (
    <>
      <div className="container-child-1">
        <input
          name="id"
          type="number"
          onChange={onChange}
          placeholder="Country ID goes here"
        />
        <button className={httpMethod} onClick={onClick}>
          {buttonText}
        </button>
      </div>
    </>
  )
}

export default CountryID