type CountryObject = {
  id?: number;
  name?: string;
};

type OwnerObject = {
  id?: number,
  firstName?: string,
  lastName?: string,
  gym?: string
}

type BaseObject =
  CountryObject | CountryObject[] |
  OwnerObject | OwnerObject[];

type CombinedMessagesProps = {
  error: boolean;
  errorMessage: string;
  successMessage?: string;
  initiallyClicked: boolean;
  data?: BaseObject;
};