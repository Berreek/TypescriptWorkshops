import { OnModuleInit, Module } from "@nestjs/common";
import { ModuleRef } from "@nestjs/core";
import {TestController} from "./controllers/test.controller";
import {DomesticController} from "./controllers/domestic.controller";
import {ForeignController} from "./controllers/foreign.controller";


@Module({
    controllers: [TestController, DomesticController, ForeignController],
    components: [],
})

export class TestApplicationModule { }