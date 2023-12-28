type CountryObject = {
  id?: number;
  name?: string;
};

type CategoryObject = {
  id?: number,
  name?: string
}

type OwnerObject = {
  id?: number,
  firstName?: string,
  lastName?: string,
  gym?: string
}

type ReviewerObject = {
  id?: number,
  firstName?: string,
  lastName?: string,
}


type BaseObject =
  OwnerObject | OwnerObject[] |
  CountryObject | CountryObject[] |
  CategoryObject | CategoryObject[] |
  ReviewerObject | ReviewerObject[];

type CombinedMessagesProps = {
  error: boolean;
  errorMessage: string;
  successMessage?: string;
  initiallyClicked: boolean;
  data?: BaseObject;
};