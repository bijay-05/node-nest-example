import { Module } from "@nestjs/common";
import { UsersModule } from "src/users/users.module";
import { AuthService } from "./auth.service";
import { AuthController } from "./auth.controller";
import { JwtModule } from "@nestjs/jwt";

@Module({
    imports: [
        UsersModule,
        JwtModule.register({
            global: true,
            secret: 'TOPSECRET',
            signOptions: { expiresIn: '300s' }
        })
    ],
    controllers: [AuthController],
    providers: [AuthService]
})
export class AuthModule {}