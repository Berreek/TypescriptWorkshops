import {DomesticTransferParams} from "../models/domesticTransferParams";
import {TransferResult} from "../models/transferResult";
import {DomesticTransferResult} from "../models/domesticTransferResult";
import {ForeignTransferParams} from "../models/foreignTransferParams";
import {ForeignTransferResult} from "../models/foreignTransferResult";
import {TaxTransferParams} from "../models/taxTransferParams";
import {TaxTransferResult} from "../models/taxTransferResult";
import {IBasicParams} from "../models/basicParams";
import {ErrorResult} from "../models/errorResult";
import { Component } from "@nestjs/common";
import {ConsoleNotificationsService} from "./consoleNotifactionsService";

@Component()
export class TransfersService {
    private readonly notificationsService: ConsoleNotificationsService;

    constructor(notificationsService: ConsoleNotificationsService) {
         this.notificationsService = notificationsService;
    }

    public createForDomestic(params: DomesticTransferParams): TransferResult<DomesticTransferResult> {
        this.validateInput(params);

        if (params.account.length > 10) {
            return TransferResult.createForError<DomesticTransferResult>(new ErrorResult("Account too long"));
        }

        let notification = this.notificationsService.notify(params);

        return TransferResult.createForSuccess(
            new DomesticTransferResult(
                notification.input.amount,
                notification.id,
                notification.input.description,
                notification.input.account,
                new Date()));
    }

    public createForForeign(params: ForeignTransferParams): TransferResult<ForeignTransferResult> {
        this.validateInput(params);
        if (params.account.length > 10) {
            return TransferResult.createForError<ForeignTransferResult>(new ErrorResult("Account too long"));
        }

        let notification = this.notificationsService.notify(params);
        
        return TransferResult.createForSuccess(
            new ForeignTransferResult(
                notification.input.amount,
                notification.id,
                notification.input.description,
                notification.input.account,
                new Date(),
                notification.input.type));
    }

    public createForTax(params: TaxTransferParams): TransferResult<TaxTransferResult> {
        this.validateInput(params);
        if (params.account.length > 10) {
            return TransferResult.createForError<TaxTransferResult>(new ErrorResult("Account too long"));
        }

        let notification = this.notificationsService.notify(params);
        
        return TransferResult.createForSuccess(
            new TaxTransferResult(
                notification.input.amount,
                notification.id,
                notification.input.description,
                notification.input.account,
                new Date(),
                notification.input.type));
    }

    private validateInput(input: IBasicParams): void {
        if (input.account == null || input.amount == null || input.description == null) {
            throw new RangeError("Argument missing exception");
        }
    }
}