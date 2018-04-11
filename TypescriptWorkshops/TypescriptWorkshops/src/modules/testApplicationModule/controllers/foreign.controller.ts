import { Controller, Get, Query } from "@nestjs/common";
import {ForeignTransferParams} from "../models/foreignTransferParams";

@Controller("foreign")
export class ForeignController {

    @Get()
    get(@Query() queryParams : ForeignTransferParams) {
        return null;
    }
}