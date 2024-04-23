type ArrowNavigationProps = {
  hrefPrev: string;
  hrefNext: string;
};

// get any data function

type RequestOptions = RequestInit | undefined;

type ResponseData = {
  [key: string]: object[];
};

// for posts
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
