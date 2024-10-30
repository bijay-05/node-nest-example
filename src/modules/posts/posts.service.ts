import { PrismaService } from "src/prisma/prisma.service";
import { Injectable, NotFoundException, BadRequestException } from "@nestjs/common";
import { IPosts } from "./interface/posts.interface";

@Injectable()
export class PostsService {
    constructor(private prismaService: PrismaService) {}


    async getAllPosts(userId: string): Promise<IPosts[]> {
        try {
            const allPosts = await this.prismaService.posts.findMany({
                where: { userId: userId }
            });

            if (!allPosts) throw new NotFoundException("Posts not found");

            return allPosts;

        } catch (error) {
            console.log("Error from getAllPosts service: ", error);
            throw error;
        }
    }
}

