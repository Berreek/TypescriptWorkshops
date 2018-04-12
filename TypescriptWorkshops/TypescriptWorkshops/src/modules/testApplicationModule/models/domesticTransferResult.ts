import { Guid } from "guid-typescript";

export class DomesticTransferResult {
    private readonly amount: number;
    private readonly id: Guid;
    private readonly description: string;
    private readonly account: string;
    private readonly executionDate: Date;

    constructor(amount: number, id: Guid, description: string, account: string, executionDate: Date) {
        this.amount = amount;
        this.id = id;
        this.description = description;
        this.account = account;
        this.executionDate = executionDate;
    }
}