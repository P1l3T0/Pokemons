const Data = ({ data }: { data: BaseObject }) => {
  const dataArray = Array.isArray(data) ? data : [data];

  const formatDateManually = (dateString: string): string => {
    const date = new Date(dateString).toLocaleDateString("en-GB");

    return date;
  }

  return dataArray.map(item => {
    switch (item.type) {
      case "Country":
        return (
          <tr key={item.id}>
            <td>{item.name}</td>
            <td>{item.id}</td>
          </tr>
        );
      case "Pokemon":
        return (
          <tr key={item.id}>
            <td>{item.name}</td>
            <td>{item.id}</td>
            <td>{formatDateManually(item.birthDate)}</td>
          </tr>
        );
      case "Rating":
        return (
          <tr key={1}>
            <td>{item.rating}</td>
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

export default Data;