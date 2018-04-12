import { Guid } from "guid-typescript";
import {TransferType} from "./transferType";

export class ForeignTransferResult {
    private readonly amount: number;
    private readonly id: Guid;
    private readonly description: string;
    private readonly account: string;
    private readonly executionDate: Date;
    private readonly transferType: TransferType;

    constructor(amount: number, id: Guid, description: string, account: string, executionDate: Date, transferType: TransferType) {
        this.amount = amount;
        this.id = id;
        this.description = description;
        this.account = account;
        this.executionDate = executionDate;
        this.transferType = transferType;
    }
}