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