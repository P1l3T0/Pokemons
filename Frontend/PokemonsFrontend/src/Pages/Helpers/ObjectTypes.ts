type CountryObject = {
  id?: number;
  name?: string;
  type?: "Country";
};

type CategoryObject = {
  id?: number,
  name?: string
  type?: "Category"
}

type OwnerObject = {
  id?: number,
  firstName?: string,
  lastName?: string,
  gym?: string
  type?: "Owner"
}

type ReviewerObject = {
  id?: number,
  firstName?: string,
  lastName?: string,
  type?: "Reviewer"
}

type ReviewObject = {
  id?: number,
  title?: string,
  text?: string,
  rating?: number,
  type?: "Review";
}

type PokemonObject = {
  id?: number,
  name?: string,
  birthDate?: string,
  type?: "Pokemon"
}

type Rating = {
  rating?: number,
  type?: "Rating"
}

type BaseObject =
  Rating |
  OwnerObject | OwnerObject[] |
  ReviewObject | ReviewObject[] |
  CountryObject | CountryObject[] |
  PokemonObject | PokemonObject[] |
  CategoryObject | CategoryObject[] |
  ReviewerObject | ReviewerObject[];

type CombinedMessagesProps = {
  error: boolean;
  errorMessage: string;
  successMessage?: string;
  initiallyClicked: boolean;
  data?: BaseObject;
};