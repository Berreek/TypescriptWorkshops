import { Controller, Get, Query } from "@nestjs/common";
import {DomesticTransferParams} from "../models/domesticTransferParams";

@Controller("domestic")
export class DomesticController {

    @Get()
    get(@Query() queryParams : DomesticTransferParams) {
        return null;
    }
}