import { OnModuleInit, Module } from "@nestjs/common";
import { ModuleRef } from "@nestjs/core";
import {DomesticController} from "./controllers/domestic.controller";
import {ForeignController} from "./controllers/foreign.controller";
import {TransfersService} from "./services/TransfersService";
import {ConsoleNotificationsService} from "./services/consoleNotifactionsService";
import {TaxController} from "./controllers/tax.controller";

@Module({
    controllers: [DomesticController, ForeignController, TaxController],
    components: [TransfersService, ConsoleNotificationsService],
})

export class TestApplicationModule { }