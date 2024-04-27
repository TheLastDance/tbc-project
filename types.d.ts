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

interface IPostItem {
  id: number;
  title: string;
  body: string;
  tags: string[];
  reactions: number;
}

type ErrorMessage = {
  message: string;
}

type UserToken = {
  token: string;
} & ErrorMessage;


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
  onChange?: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
}

interface ISearchProps {
  inputID: string;
  buttonContent: string | React.ReactNode;
  inputValue: string;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleButtonClick: () => void;
}

interface IErrorPage {
  error?: Error & { digest?: string }
  reset: () => void;
}