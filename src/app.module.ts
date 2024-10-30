import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/common/prisma/prisma.module';
import { PostsModule } from 'src/modules/posts/posts.module';
import { AuthModule } from 'src/modules/auth/auth.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ".env",
      isGlobal: true
    }),
    PrismaModule,
    PostsModule,
    AuthModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
