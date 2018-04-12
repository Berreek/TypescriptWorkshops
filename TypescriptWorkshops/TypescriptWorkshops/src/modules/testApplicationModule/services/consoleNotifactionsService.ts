import {IBasicParams} from "../models/basicParams";
import {NotificationResult} from "../models/notification";
import { Guid } from "guid-typescript";
import { Component } from "@nestjs/common";

@Component()
export class ConsoleNotificationsService {
    public notify<T extends IBasicParams>(input: T): NotificationResult<T> {
        console.log(`account: ${input.account}`);
        console.log(`ammount: ${input.amount}`);
        console.log(`description: ${input.description}`);

        var id = Guid.create();

        return new NotificationResult<T>(input, id);
    }
    
}