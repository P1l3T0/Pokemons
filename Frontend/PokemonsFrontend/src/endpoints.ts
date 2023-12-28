const baseURL: string | undefined = process.env.REACT_APP_API_URL;

export const categoriesEndPoint = `${baseURL}/Category`;

export const countriesEndPoint = `${baseURL}/Country`;
export const ownersEndPoint = `${baseURL}/Owners`;