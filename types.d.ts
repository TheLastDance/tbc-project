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
  gender: string;
  average: number;
  images: string[];
}

interface IProductRating {
  total_points: string;
  average_points: string;
  rating_count: string;
  user_exists?: 0 | 1;
  user_point?: number | null;
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
  likes_count: number;
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

interface IUserAndPosts extends IUser {
  posts: { id: number, title: string }[],
}

interface IPostLike {
  like_count: number,
  user_liked: boolean,
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

interface IOrder {
  id: number,
  user_id: string,
  payment_intent: string,
  products: IStorageCart,
  refund: boolean,
  status: boolean,
  user_picture: string,
  user_given_name: string,
  user_family_name: string,
  user_serial: number,
  address: string,
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
  ref?: RefObject<HTMLInputElement>;
  checked?: boolean;
  defaultChecked?: boolean;
  readOnly?: boolean;
  onChange?: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
}

interface IErrorPage {
  error?: Error & { digest?: string }
  reset: () => void;
}

type ButtonMode = "glitch" | "glitchHover" | "none";

interface IImageWithFallbackProps {
  src: string,
  fallbackSrc: string | StaticImageData,
  alt: string,
  fill?: boolean
  priority?: boolean,
  sizes?: string,
  width?: number,
  height?: number,
}

//searchParams

interface IProductParams {
  searchParams?: {
    searchText?: string,
    page?: string,
    category?: string,
    brand?: string,
    gender?: string,
    sortBy?: string,
    price?: string,
  }
}

interface ITableParams {
  searchParams?: {
    searchText?: string,
    page?: string,
  }
}

interface IOrderParams {
  searchParams?: {
    page?: string,
  }
}