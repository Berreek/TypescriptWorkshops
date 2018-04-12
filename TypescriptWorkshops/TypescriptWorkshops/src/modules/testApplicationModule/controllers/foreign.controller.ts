import { Controller, Get, Query } from "@nestjs/common";
import {ForeignTransferParams} from "../models/foreignTransferParams";
import {BaseController} from "./baseController";
import {ForeignTransferResult} from "../models/foreignTransferResult";
import {ErrorResult} from "../models/errorResult";
import {TransfersService} from "../services/TransfersService";

@Controller("foreign")
export class ForeignController extends BaseController {
    private readonly transfersService: TransfersService;

    constructor(transfersService: TransfersService) {
        super();
        this.transfersService = transfersService;
    }

    @Get()
    public get(@Query() queryParams : ForeignTransferParams) : ForeignTransferResult | ErrorResult  {
        return this.handleTransfer(() => this.transfersService.createForForeign(queryParams));
    }
}