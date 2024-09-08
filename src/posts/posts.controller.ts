import { Get, Post, Body, Controller } from '@nestjs/common'

import { PostsService } from './posts.service'
import { CreatePostsDto } from './dto/posts.dto';


@Controller('posts')
export class PostsController {
    constructor(private readonly postsService: PostsService) {}

    @Get()
    async getAllPosts() {
        const allPosts = await this.postsService.getAllPosts();

        return { allPosts, message: 'Posts list fetched successfully' }
    }

    @Post()
    async createPost(@Body() createPostDto: CreatePostsDto) {
        const createdPost = await this.postsService.createPost(createPostDto);

        return { createPostDto, message: 'Post created successfully' }
    }
}