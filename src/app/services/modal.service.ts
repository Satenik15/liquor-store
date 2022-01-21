import { Injectable } from "@angular/core";
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';

@Injectable({
    providedIn: 'root',
})

export class ModalService {
    constructor(public dialog: MatDialog) {}

    openPopup(component) {
        let config = new MatDialogConfig();
        config.width = '500px';
        this.dialog.open(component, config);
    }

    closePopup() {
        this.dialog.closeAll();
    }
}