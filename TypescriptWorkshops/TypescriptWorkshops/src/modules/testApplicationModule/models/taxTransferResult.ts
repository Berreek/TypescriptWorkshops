import {PeriodType} from "./periodType";
import { Guid } from "guid-typescript";

export class TaxTransferResult {
    private readonly amount: number;
    private readonly id: Guid;
    private readonly description: string;
    private readonly account: string;
    private readonly executionDate: Date;
    private readonly periodType: PeriodType;

    constructor(amount: number, id: Guid, description: string, account: string, executionDate: Date, periodType: PeriodType) {
        this.amount = amount;
        this.id = id;
        this.description = description;
        this.account = account;
        this.executionDate = executionDate;
        this.periodType = periodType;
    }
}