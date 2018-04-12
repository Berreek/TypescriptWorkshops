import { Guid } from "guid-typescript";

export class NotificationResult<T> {
    public readonly input: T;
    public readonly id: Guid;

    constructor(input: T, id: Guid) {
        this.input = input;
        this.id = id;
    }
}