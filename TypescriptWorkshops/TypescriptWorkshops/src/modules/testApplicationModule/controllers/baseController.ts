import {TransferResult} from "../models/transferResult";
import {ErrorResult} from "../models/errorResult";

export abstract class BaseController {
    protected handleTransfer<T>(handleFunction: () => TransferResult<T>) : T | ErrorResult {
        try {
            let result = handleFunction();

            if (result.errorResult) {
                return result.errorResult;
            }

            return result.result;

        } catch (exception) {
            if (exception instanceof RangeError) {
                return new ErrorResult(exception.message);
            }

            throw exception;
        } 
    }
}