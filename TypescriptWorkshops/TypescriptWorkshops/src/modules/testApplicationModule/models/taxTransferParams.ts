import {PeriodType} from "./periodType";
import {IBasicParams} from "./basicParams";

export class TaxTransferParams implements IBasicParams {
    public readonly description?: string;
    public readonly account?: string;
    public readonly amount?: number;
    public readonly type: PeriodType;

    constructor(type: PeriodType, description?: string, account?: string, amount?: number) {
        this.description = description;
        this.account = account;
        this.amount = amount;
        this.type = type;
    }
}