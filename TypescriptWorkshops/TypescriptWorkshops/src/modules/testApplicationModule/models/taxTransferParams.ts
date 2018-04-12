import {PeriodType} from "./periodType";
import {IBasicParams} from "./basicParams";

export class TaxTransferParams implements IBasicParams {
    public readonly description?: string;
    public readonly account?: string;
    public readonly amount?: number;
    public readonly type?: PeriodType;

    constructor(description?: string, account?: string, amount?: number, type?: PeriodType) {
        this.description = description;
        this.account = account;
        this.amount = amount;
        this.type = type;
    }
}