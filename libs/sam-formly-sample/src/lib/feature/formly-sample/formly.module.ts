import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormlyInputComponent } from './formly-input.component';
import { FormlyModule } from '@ngx-formly/core';
import { SdsFiltersModule } from '@gsa-sam/sam-formly';
import { SdsAccordionModule } from '@gsa-sam/components';
@NgModule({
    declarations: [FormlyInputComponent],
    imports: [
        CommonModule,
        FormsModule,
        SdsAccordionModule,
        SdsFiltersModule,
        FormlyModule.forRoot(),
        ReactiveFormsModule

    ], exports: [FormlyInputComponent]
})
export class FormlySampleModule { }