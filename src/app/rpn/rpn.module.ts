import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';

import { RPNComponent } from './rpn.component';
import { JWBootstrapSwitchModule } from 'jw-bootstrap-switch-ng2';

import { ComponentsModule } from '../components/components.module';

@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        FormsModule,
        NgbModule,
        RouterModule,
        JWBootstrapSwitchModule,
        ComponentsModule
    ],
    declarations: [ RPNComponent ],
    exports:[ RPNComponent ],
    providers: []
})
export class RPNModule { }
