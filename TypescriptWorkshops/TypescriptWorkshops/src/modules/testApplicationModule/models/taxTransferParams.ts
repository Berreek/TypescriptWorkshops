export class TaxTransferParams {
    private readonly description?: string;
    private readonly account?: string;
    private readonly amount?: number;
    private readonly type?: PeriodType;

    constructor(description?: string, account?: string, amount?: number, type?: PeriodType) {
        this.description = description;
        this.account = account;
        this.amount = amount;
        this.type = type;
    }
}

export enum PeriodType {
    Monthly,
    Quarterly
}