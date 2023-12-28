const baseURL: string | undefined = process.env.REACT_APP_API_URL;

export const ownersEndPoint = `${baseURL}/Owner`;
export const countriesEndPoint = `${baseURL}/Country`;
export const reviewersEndPoint = `${baseURL}/Reviewer`;
export const categoriesEndPoint = `${baseURL}/Category`;