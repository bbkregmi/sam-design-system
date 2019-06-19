import {
    Component,
    Input,
    ChangeDetectionStrategy,
    OnChanges
  } from '@angular/core';
  import { FormGroup } from '@angular/forms';
  import { FormlyFieldConfig } from '@ngx-formly/core';
 
  @Component({
    selector: 'sds-filters',
    template: `
    <sds-accordion multi="true">
        <sds-accordion-item>
            <sds-accordion-item-header> Filters </sds-accordion-item-header>
            <formly-form [form]="form" [fields]="fields" [model]="model"></formly-form>
        </sds-accordion-item>
    </sds-accordion>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush
  })
  export class SdsFiltersComponent implements OnChanges{
    @Input() public form: FormGroup;
    @Input() public fields: FormlyFieldConfig[];
    @Input() public model: any;

    public ngOnChanges () {
    
    }
  }
  