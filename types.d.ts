// locale
type LocaleTuple = ["en", "ka"];
type Locale = LocaleTuple[number];


// metadata
type MetadataType = { title: string, description: string }


// base
interface ILocaleParam {
  params: {
    locale: Locale;
  }
}

type idParam = {
  id: number;
};

interface IIdParamProps {
  params: idParam
}

interface IUserLogin {
  username: string;
  password: string;
}

type RequestOptions = RequestInit | undefined;


// forms states
interface IAskQuestionState {
  firstName: string;
  lastName: string;
  email: string;
  tel: string;
  question: string;
};

interface IChangePasswordState {
  password: string,
  confirmPassword: string,
}

interface IEditProfileState {
  firstName: string;
  lastName: string;
  email: string;
}

type ContactFormState = {
  message: ContactPageMessages,
  error?: string,
}

// fetched data items
interface IProductItem {
  id: number;
  title: string;
  description: string;
  brand: string;
  category: string;
  rating: number;
  price: number;
  thumbnail: string;
  images: string[];
}

interface IProductItemCart extends IProductItem {
  quantity: number;
}

interface ICartProduct {
  id: number,
  quantity: number,
}

interface ICartTable {
  id: number,
  user_id: number,
  products: ICartProduct[],
  added_on: string,
}

interface IStorageCart {
  count: number;
  price: number;
  products: IProductItemCart[]
}

interface IPostItem {
  id: number;
  title: string;
  body: string;
  user_id: string;
  added_on: string;
  user_picture: string;
  user_serial: number;
}

type ErrorMessage = {
  message: string;
}

type UserToken = {
  token: string;
} & ErrorMessage;

interface IUser {
  id: string;
  given_name: string;
  family_name: string;
  email: string;
  birth_date: string;
  role: string,
  registration_date: string,
  picture: string,
  app_metadata: {
    role: "admin" | "user",
  }
}

interface IUserDatabase {
  users: {
    rows: IUser[]
  }
}

interface IMessage {
  id: number,
  firstname: string,
  lastname: string,
  email: string,
  tel: string,
  body: string,
  added_on: string,
}


// component props
type ChildrenProps = { children: React.ReactNode };

interface IInputProps {
  label?: React.ReactNode;
  id?: string;
  type?: string;
  name?: string;
  placeholder?: string;
  required?: boolean;
  textArea?: boolean;
  value?: string;
  pattern?: string | RegExp;
  rows?: number;
  maxLength?: number,
  minLength?: number,
  defaultValue?: string;
  accept?: string;
  multiple?: boolean;
  title?: string;
  min?: string;
  step?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
}

interface IErrorPage {
  error?: Error & { digest?: string }
  reset: () => void;
}

type ButtonMode = "glitch" | "glitchHover" | "none";

//searchParams

interface IProductParams {
  searchParams?: {
    searchText?: string,
    page?: string,
    isAsc?: string | boolean,
  }
}

interface ITableParams {
  searchParams?: {
    searchText?: string,
    page?: string,
  }
}