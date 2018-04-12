import { Controller, Get, Query } from "@nestjs/common";
import {TaxTransferParams} from "../models/taxTransferParams";
import {ErrorResult} from "../models/errorResult";
import {TaxTransferResult} from "../models/taxTransferResult";
import {BaseController} from "./baseController";
import {TransfersService} from "../services/TransfersService";

@Controller("tax")
export class TaxController extends BaseController {
    private readonly transfersService: TransfersService;

    constructor(transfersService: TransfersService) {
        super();
        this.transfersService = transfersService;
    }


    @Get()
    public get( @Query() queryParams: TaxTransferParams) : TaxTransferResult | ErrorResult {
        return this.handleTransfer(() => this.transfersService.createForTax(queryParams));
    }
}