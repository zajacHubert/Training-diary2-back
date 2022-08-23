import { createParamDecorator, ExecutionContext } from "@nestjs/common";
import { UsersEntity } from "./user.entity";

export const GetUser = createParamDecorator((_data, ctx: ExecutionContext): UsersEntity => {
    const req = ctx.switchToHttp().getRequest();
    return req.user;
});