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
type childrenType = { children: JSX.Element };
