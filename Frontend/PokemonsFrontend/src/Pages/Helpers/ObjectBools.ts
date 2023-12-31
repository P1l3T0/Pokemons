export const hasProperty = (data: BaseObject, property: string) => {
  if (Array.isArray(data)) {
    return data.some(item => property in item);
  }
  return property in data;
};

export const stringToDate = (dateString: string): string => {
  const date = new Date(dateString).toLocaleDateString("en-GB");

  return date;
}