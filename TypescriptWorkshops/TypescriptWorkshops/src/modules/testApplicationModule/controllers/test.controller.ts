import { Controller, Get } from "@nestjs/common";
import {TestDto} from "../models/testDto";

@Controller("test")
export class TestController {

    @Get()
    getTest(): TestDto {
        return new TestDto("Hello world");
    }
}