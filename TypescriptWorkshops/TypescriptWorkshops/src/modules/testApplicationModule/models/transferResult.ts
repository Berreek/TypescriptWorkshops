import {ErrorResult} from "./errorResult";

export class TransferResult<T> {
    public readonly result: T;
    public readonly errorResult?: ErrorResult;

    private constructor(result?: T, errorResult?: ErrorResult) {
        this.result = result;
        this.errorResult = errorResult;
    }

    public static createForSuccess<T>(result: T): TransferResult<T> {
        return new TransferResult<T>(result, null);
    }

    public static createForError<T>(errorResult: ErrorResult): TransferResult<T> {
        return new TransferResult<T>(null, errorResult);
    }
}