import { Controller, Get, Query } from "@nestjs/common";
import {DomesticTransferParams} from "../models/domesticTransferParams";
import {BaseController} from "./baseController";
import {DomesticTransferResult} from "../models/domesticTransferResult";
import {ErrorResult} from "../models/errorResult";
import {TransfersService} from "../services/TransfersService";

@Controller("domestic")
export class DomesticController extends BaseController {
    private readonly transfersService: TransfersService;

    constructor(transfersService: TransfersService) {
        super();
        this.transfersService = transfersService;
    }

    @Get()
    public get(@Query() queryParams : DomesticTransferParams) : DomesticTransferResult | ErrorResult {
        return this.handleTransfer(() => this.transfersService.createForDomestic(queryParams));
    }
}