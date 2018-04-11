import { Controller, Get, Query } from "@nestjs/common";

@Controller("foreign")
export class ForeignController {

    @Get()
    get(@Query() queryParams) {
        return null;
    }
}