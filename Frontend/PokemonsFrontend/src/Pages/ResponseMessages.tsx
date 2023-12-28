const ResponseMessages: React.FC<CombinedMessagesProps> = ({
  error,
  errorMessage,
  successMessage,
  initiallyClicked,
  data
}) => {
  const shouldShowGym = (data: BaseObject) => {
    if (Array.isArray(data)) {
      return data.some(item => 'gym' in item);
    }
    return 'gym' in data;
  };

  const renderRows = (data: BaseObject) => {
    const dataArray = Array.isArray(data) ? data : [data];

    return dataArray.map(item => {
      if ('name' in item) {
        return (
          <tr key={item.id}>
            <td>{item.name}</td>
            <td>{item.id}</td>
          </tr>
        );
      } else if ('gym' in item) {
        return (
          <tr key={item.id}>
            <td>{item.firstName} {item.lastName}</td>
            <td>{item.id}</td>
            <td>{item.gym}</td>
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
                <th>Name</th>
                <th>ID</th>
                {shouldShowGym(data) && <th>Gym</th>}
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
