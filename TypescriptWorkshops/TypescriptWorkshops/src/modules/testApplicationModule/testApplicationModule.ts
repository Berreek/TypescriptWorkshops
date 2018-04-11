import { OnModuleInit, Module } from "@nestjs/common";
import { ModuleRef } from "@nestjs/core";
import {TestController} from "./controllers/test.controller";
import {DomesticController} from "./controllers/domestic.controller";
import {ForeignController} from "./controllers/foreign.controller";
import {TaxController} from "./controllers/tax.controller";


@Module({
    controllers: [TestController, DomesticController, ForeignController, TaxController],
    components: [],
})

export class TestApplicationModule { }