import { Controller, Get, Query } from "@nestjs/common";

@Controller("domestic")
export class DomesticController {

    @Get()
    get(@Query() queryParams) {
        return null;
    }
}