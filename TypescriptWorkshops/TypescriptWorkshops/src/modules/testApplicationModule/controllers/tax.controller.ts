import { Controller, Get, Query } from "@nestjs/common";

@Controller("tax")
export class TaxController {

    @Get()
    get( @Query() queryParams) {
        return null;
    }
}