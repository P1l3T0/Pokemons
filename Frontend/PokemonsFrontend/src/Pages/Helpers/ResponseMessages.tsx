import Data from "./Data";
import { hasProperty } from "./ObjectBools";

const ResponseMessages: React.FC<CombinedMessagesProps> = ({
  error,
  errorMessage,
  successMessage,
  initiallyClicked,
  data
}) => {
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

                {hasProperty(data, "rating") && <th>Rating</th>}
                <th>ID</th>

                {hasProperty(data, "gym") && <th>Gym</th>}
              </tr>
            </thead>
            <tbody>
              <Data data={data} />
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
