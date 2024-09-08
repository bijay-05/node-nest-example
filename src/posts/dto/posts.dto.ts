import { IPosts } from "../interface/posts.interface";

export class PostsResponseDto implements IPosts {
    id: string;
    title: string;
    content: string;
    createdOn: Date;
}

export class CreatePostsDto implements Omit<IPosts, 'id'|'createdOn'> {
    title: string;
    content: string;
}