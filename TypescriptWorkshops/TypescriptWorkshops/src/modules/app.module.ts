import { Module } from '@nestjs/common';
import {TestApplicationModule} from "./testApplicationModule/testApplicationModule";

@Module({
    modules: [TestApplicationModule],
})
export class ApplicationModule { }