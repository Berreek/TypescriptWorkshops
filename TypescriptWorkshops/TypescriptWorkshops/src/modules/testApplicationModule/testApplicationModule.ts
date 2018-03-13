import { OnModuleInit, Module } from "@nestjs/common";
import { ModuleRef } from "@nestjs/core";
import {TestController} from "./controllers/test.controller";


@Module({
    controllers: [TestController],
    components: [],
})

export class TestApplicationModule { }