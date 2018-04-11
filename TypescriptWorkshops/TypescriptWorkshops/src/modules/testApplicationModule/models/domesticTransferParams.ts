export class DomesticTransferParams {
    private readonly description?: string;
    private readonly account?: string;
    private readonly amount?: number;
    private readonly isInternal?: boolean;

    constructor(description?: string, account?: string, amount?: number, isInternal? : boolean) {
        this.description = description;
        this.account = account;
        this.amount = amount;
        this.isInternal = isInternal;
    }
}