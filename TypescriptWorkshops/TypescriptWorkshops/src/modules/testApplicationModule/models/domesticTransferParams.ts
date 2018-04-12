import {IBasicParams} from "./basicParams";

export class DomesticTransferParams implements IBasicParams {
    public readonly description?: string;
    public readonly account?: string;
    public readonly amount?: number;
    public readonly isInternal?: boolean;

    constructor(description?: string, account?: string, amount?: number, isInternal? : boolean) {
        this.description = description;
        this.account = account;
        this.amount = amount;
        this.isInternal = isInternal;
    }
}