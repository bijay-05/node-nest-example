import { Get, Post, Body, Controller, UseGuards, Req } from '@nestjs/common'
import { AuthGuard } from 'src/auth/auth.guard';
import { PostsService } from './posts.service'
import { CreatePostsDto } from './dto/posts.dto';
import { Request } from 'express';

@Controller('posts')
@UseGuards(AuthGuard)
export class PostsController {
    constructor(private readonly postsService: PostsService) {}

    @Get()
    async getAllPosts(@Req() req: Request) {
        const allPosts = await this.postsService.getAllPosts(req["user"].sub);

        return { allPosts, message: 'Posts list fetched successfully' }
    }
}