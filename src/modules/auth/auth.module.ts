import { Module } from "@nestjs/common";
import { UsersModule } from "src/modules/users/users.module";
import { AuthService } from "./auth.service";
import { AuthController } from "./auth.controller";
import { JwtModule } from "@nestjs/jwt";

@Module({
    imports: [
        UsersModule,
        JwtModule.register({
            global: true,
            verifyOptions: { ignoreExpiration: false }
        })
    ],
    controllers: [AuthController],
    providers: [AuthService]
})
export class AuthModule {}