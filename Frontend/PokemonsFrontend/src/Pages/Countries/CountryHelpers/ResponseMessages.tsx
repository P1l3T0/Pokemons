type Country = {
  id: number;
  name: string;
};

type CombinedMessagesProps = {
  error: boolean;
  errorMessage: string;
  successMessage?: string;
  initiallyClicked: boolean;
  countries?: Country | Country[];
};

const ResponseMessages: React.FC<CombinedMessagesProps> = ({
  error,
  errorMessage,
  successMessage,
  initiallyClicked,
  countries,
}) => {
  const renderRow = (country: Country) => (
    <tr key={country.id}>
      <td>{country.name}</td>
      <td>{country.id}</td>
    </tr>
  );

  return (
    <div className="container-child-2">
      {error ? (
        <div>
          <h3>{errorMessage}</h3>
        </div>
      ) : initiallyClicked ? (
        countries ? (
          <table>
            <thead>
              <tr>
                <th>Country</th>
                <th>ID</th>
              </tr>
            </thead>
            <tbody>
              {Array.isArray(countries)
                ? countries.map((country) => renderRow(country))
                : renderRow(countries)}
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
