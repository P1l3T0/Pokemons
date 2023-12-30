import { hasProperty } from "./ObjectBools";

const ResponseMessages: React.FC<CombinedMessagesProps> = ({
  error,
  errorMessage,
  successMessage,
  initiallyClicked,
  data
}) => {
  const renderRows = (data: BaseObject) => {
    const dataArray = Array.isArray(data) ? data : [data];

    return dataArray.map(item => {
      switch (item.type) {
        case "Country":
          return (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.id}</td>
            </tr>
          );
        case "Category":
          return (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.id}</td>
            </tr>
          );
        case "Owner":
          return (
            <tr key={item.id}>
              <td>{item.firstName}</td>
              <td>{item.lastName}</td>
              <td>{item.lastName}</td>
              <td>{item.id}</td>
            </tr>
          );
        case "Review":
          return (
            <tr key={item.id}>
              <td>{item.title}</td>
              <td>{item.text}</td>
              <td>{item.rating}</td>
              <td>{item.id}</td>
            </tr>
          );
        case "Reviewer":
          return (
            <tr key={item.id}>
              <td>{item.firstName}</td>
              <td>{item.lastName}</td>
              <td>{item.id}</td>
            </tr>
          );
      }

      return null;
    });
  };

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
                {hasProperty(data, "name") && <th>Name</th>}

                {hasProperty(data, "title") && <th>Pokemon</th>}
                {hasProperty(data, "title") && <th>Text</th>}
                {hasProperty(data, "title") && <th>Rating</th>}

                {hasProperty(data, "firstName") && <th>First Name</th>}
                {hasProperty(data, "firstName") && <th>Last Name</th>}

                <th>ID</th>

                {hasProperty(data, "gym") && <th>Gym</th>}
              </tr>
            </thead>
            <tbody>
              {renderRows(data)}
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
}

export default ResponseMessages;
