const baseURL: string | undefined = process.env.REACT_APP_API_URL;

export const allPokemonCategories = `${baseURL}/Category`;

export const getAllCountries = `${baseURL}/Country`;
export const getCountryById = `${baseURL}/Country`;