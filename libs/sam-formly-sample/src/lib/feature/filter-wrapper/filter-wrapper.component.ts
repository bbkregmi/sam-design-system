import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';
import { BehaviorSubject } from 'rxjs';
import { maxDateValidator, minDateValidator } from '@gsa-sam/sam-formly';
import { FormControl, ValidationErrors } from '@angular/forms';


@Component({
  selector: 'sds-filter-wrapper',
  templateUrl: './filter-wrapper.component.html',

})
export class FilterWrapperComponent implements OnInit {

  constructor(private change: ChangeDetectorRef) {

  }
  results: any = {};
  form = new FormGroup({});
  model: any = {
    searchEntity: {
      uniqueEntityIdSam: 20
    }
  };
  options: FormlyFormOptions = {};
  /**
 * Event when something is checked/selected in the grid
 */
  public filterChange$ = new BehaviorSubject<object>(null);


  fields: FormlyFieldConfig[] = [
    {
      key: 'filter.searchKeyword',
      wrappers: ['filterwrapper'],
      templateOptions: {
        label: 'Keyword (with label)',
        ariaHidden: true
      },
      fieldGroup: [{
        key: 'keyword',
        type: 'input',
        templateOptions: {
          type: 'text',
          label: 'Keyword'
        },

      }]
    },

    {
      key: 'filter.searchEntity',
      wrappers: ['accordionwrapper'],
      templateOptions: {
        label: 'Entity',
        expand: false,
      },
      fieldGroup: [
        {
          key: 'uniqueEntityIdSam',
          type: 'input',
          templateOptions: {
            tagText: 'DUNS',
            tagClass: 'sds-tag--info-purple',
            label: 'Unique Entity ID',
            placeholder: '',
            min: 13,
            max: 40,
            inputType: 'number',
            inputStyle: 'error',
          },
        },
        {
          key: 'legalBusinessName',
          type: 'input',
          templateOptions: {
            tagText: 'SAM',
            label: 'Unique Entity ID',
            placeholder: '',
            inputType: 'text',
          },
        },
      ],
    },

    {
      key: 'filter.entityStatus',
      wrappers: ['accordionwrapper'],

      templateOptions: {
        label: 'Entity Status',
        expand: true,
      },
      fieldGroup: [
        {
          key: 'statusCheckbox',
          type: 'multicheckbox',
          templateOptions: {
            label: 'Status Select',
            options: [
              {
                key: 'Active',
                value: 'Active'
              },
              {
                key: 'Draft',
                value: 'Draft'
              },
              {
                key: 'Expired',
                value: 'Expired'
              },
              {
                key: 'InProgress',
                value: 'In Progress'
              }
            ]
          },
        },
      ]
    },
    {
      key: 'filter.expirationDate',
      wrappers: ['accordionwrapper'],
      templateOptions: { label: 'Expiration Date' },
      fieldGroup: [
        {
          key: 'expirationDateOpen',
          type: 'datepicker',
          templateOptions: {
            label: 'Expiration Date (no validation)',
          }
        },
        {
          key: 'expirationDateMin',
          type: 'datepicker',
          templateOptions: {
            label: 'Expiration Date (Min only Validation)',
            minDate: new Date(2019, 9, 5)
          }
        },
        {
          key: 'expirationDatemax',
          type: 'datepicker',
          templateOptions: {
            label: 'Expiration Date (Max only Validation)',
            maxDate: new Date(2019, 9, 25)
          }
        },
        {
          key: 'expirationDateboth',
          type: 'datepicker',
          templateOptions: {
            label: 'Expiration Date (Min and Max Validation)',
            minDate: new Date(2019, 9, 5),
            maxDate: new Date(2019, 9, 25)
          }
        },
        {
          key: 'expirationDateRangeEx',
          type: 'daterangepicker',
          templateOptions: {
            label: 'Expiration Date Range',
            minDate: new Date(2019, 9, 5),
            maxDate: new Date(2019, 9, 25)
          }
        },
        {
          key: 'expirationDateOption',
          type: 'radio',
          templateOptions: {
            label: 'Expiration Date',
            options: [
              { label: '30 Days', value: '30' },
              { label: '60 Days', value: '60' },
              { label: '90 Days', value: '90' },

            ]
          },
        },
      ]
    },
    {
      key: 'filter.entityType',
      wrappers: ['filterwrapper'],
      templateOptions: { label: 'Entity Types' },
      fieldGroup: [
        {
          key: 'entityType',
          type: 'select',
          templateOptions: {
            label: 'Type',
            multiple: false,
            options: [
              { label: 'Contract Opportunities', value: 'co' },
              { label: 'Entity Information', value: 'ei' },
              { label: 'Assitance Listings', value: 'al' },
              { label: 'Contract Data', value: 'cd' },
              { label: 'Federal Heirarchy', value: 'fh' },
              { label: 'Wage Determination', value: 'wd' },
            ],
          },
        },
    
      ]
    },


    
  ];
  public ngOnInit() {
    this.filterChange$.subscribe(
      res => {
        this.results = res;
        //  this.change.detectChanges();
      }
    );
  }

}
