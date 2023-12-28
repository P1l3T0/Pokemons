type CountryObject = {
  id?: number;
  name?: string;
};

type OwnerObject = {
  id?: number,
  firstName?: string,
  lastName?: string,
  gym?: string
}

type BaseObject = CountryObject | CountryObject[] | OwnerObject | OwnerObject[]

type CombinedMessagesProps = {
  error: boolean;
  errorMessage: string;
  successMessage?: string;
  initiallyClicked: boolean;
  data?: BaseObject;
};

const ResponseMessages: React.FC<CombinedMessagesProps> = ({
  error,
  errorMessage,
  successMessage,
  initiallyClicked,
  data: data,
}) => {
  const renderRow = (data: BaseObject) => {
    if (Array.isArray(data)) {
      return data.map(item => {
        if ('name' in item) {
          return (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.id}</td>
            </tr>
          );
        } else if ('firstName' in item) {
          return (
            <tr key={item.id}>
              <td>{item.firstName} {item.lastName}</td>
              <td>{item.id}</td>
              <td>{item.gym}</td>
            </tr>
          );
        }
      });
    }

    if ("name" in data) {
      return (
        <tr key={data.id}>
          <td>{data?.name}</td>
          <td>{data?.id}</td>
          <td></td>
        </tr>
      )
    }
    else if ("firstName" in data) {
      return (
        <tr key={data.id}>
          <td>{data.firstName} {data.lastName}</td>
          <td>{data.id}</td>
          <td>{data.gym}</td>
        </tr>
      );
    }
  }

  return (
    <div className="container-child-2">
      {error ? (
        <div>
          <h3>{errorMessage}</h3>
        </div>
      ) : initiallyClicked ? (
        data ? (
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>ID</th>
                {/* Add additional headers if needed for OwnerObject */}
              </tr>
            </thead>
            <tbody>
              {renderRow(data)}
            </tbody>
          </table>
        ) : (
          <div>
            <h3>{successMessage}</h3>
          </div>
        )
      ) : null}
    </div>
  );
};

export default ResponseMessages;
