import {TransferType} from "./transferType";
import {IBasicParams} from "./basicParams";

export class ForeignTransferParams implements IBasicParams {
    public readonly description?: string;
    public readonly account?: string;
    public readonly amount?: number;
    public readonly type: TransferType;

    constructor(type: TransferType, description?: string, account?: string, amount?: number) {
        this.description = description;
        this.account = account;
        this.amount = amount;
        this.type = type;
    }
}