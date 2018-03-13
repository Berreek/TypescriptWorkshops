import { Controller, Get, Post, Delete, Next, HttpStatus, Req, Res, Body, Query, Head, Headers } from "@nestjs/common";
import {TestDto} from "../models/testDto";

@Controller("test")
export class TestController {

    @Get()
    getTest(): TestDto {
        return new TestDto("Hello world");
    }
}