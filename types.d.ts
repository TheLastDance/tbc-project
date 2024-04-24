type ErrorProps = {
  error?: string;
  reset: () => void;
  message?: string;
  href: string;
};

type FormStatesType = {
  firstName: string;
  lastName: string;
  email: string;
  tel: string;
  question: string;
};

interface InputProps {
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
  onChange?: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
}

type ChildrenProps = { children: React.ReactNode };

type LoaderProps = { size?: string };

type ArrowNavigationProps = {
  hrefPrev: string;
  hrefNext: string;
};

// get any data function

type RequestOptions = RequestInit | undefined;

type ResponseData = {
  [key: string]: object[];
};

// posts type

interface PostItem {
  id: number;
  title: string;
  body: string;
  tags: string[];
  reactions: number;
}

interface PostProps {
  item: {
    id: number;
    title: string;
    body: string;
    tags: string[];
    reactions: number;
  };
}

type postId = {
  id: number;
};

// image types

declare module "*.jpeg" {
  const src: string;
  export = src;
}
// pending button prop

type ButtonProp = {
  type: "submit" | "reset" | "button" | undefined;
  children: JSX.Element;
};

// children type
type CardProps = { children: React.ReactNode };

interface IMiddlewareConfig {
  matcher: string[]
}

interface IError {
  // ერორის კომპონენტი სტანდარტულია და იღებს გარკვეულ პროპებს რომელიც გამოყენების მიხედვით optional ტაიპად დაემატება
  reset?: () => void;
}

type ChildrenProp = { children: React.ReactNode }
type UserLoginType = { username: string, password: string }
type UserInfoType = { token: string, message: string }
type MetadataType = { title: string, description: string }
type MetaDataTranslationsType = Record<string, Record<string, MetadataType>>
type IPost = {
  id: number, title: string,
  body: string,
  tags: Array<string>,
  reactions: number
}
type IPostArr = { posts: Array<IPost> }

interface NavLinkInterface {
  href: string,
  children: React.ReactNode,
  [key: string]: any
}

interface SingleShopItem {
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
