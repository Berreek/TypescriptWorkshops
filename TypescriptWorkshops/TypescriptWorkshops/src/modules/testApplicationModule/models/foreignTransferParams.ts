export class ForeignTransferParams {
    private readonly description?: string;
    private readonly account?: string;
    private readonly amount?: number;
    private readonly type?: TransferType;

    constructor(description?: string, account?: string, amount?: number, type?: TransferType) {
        this.description = description;
        this.account = account;
        this.amount = amount;
        this.type = type;
    }
}

export enum TransferType {
    Sepa,
    NonSepa
}