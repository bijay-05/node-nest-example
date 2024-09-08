import { PrismaService } from "src/prisma/prisma.service";
import { Injectable, NotFoundException, BadRequestException } from "@nestjs/common";
import { IPosts } from "./interface/posts.interface";

@Injectable()
export class PostsService {
    constructor(private readonly prismaService: PrismaService) {}


    getAllPosts = async (): Promise<IPosts[]> => {
        try {
            const allPosts = await this.prismaService.posts.findMany();

            if (!allPosts) throw new NotFoundException("Posts not found");

            return allPosts;

        } catch (error) {
            console.log("Error from getAllPosts service: ", error);
            throw error;
        }
    }

    createPost = async (createPostDto): Promise<IPosts> => {
        try {
            const createdPost = await this.prismaService.posts.create({
                data: createPostDto
            })
            if (!createdPost) throw new BadRequestException("Post could not be created")

            return createdPost

        } catch (error) {
            console.log("Error from createPost service: ", error);
            throw error;
        }
    }
}

