import { Controller, Get, Query } from "@nestjs/common";
import {ForeignTransferParams} from "../models/foreignTransferParams";

@Controller("tax")
export class TaxController {

    @Get()
    get( @Query() queryParams: ForeignTransferParams) {
        return null;
    }
}