import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { PostsModule } from './posts/posts.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [PrismaModule, PostsModule, AuthModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
