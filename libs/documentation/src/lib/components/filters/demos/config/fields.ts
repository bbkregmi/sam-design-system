import { FormlyFieldConfig } from '@ngx-formly/core';

// export let formlyFieldConfig1: FormlyFieldConfig[] = [
//   {
//     key: 'opportunitySearch',
//     templateOptions: { label: 'Opportunity Search...' },
//     fieldGroup: [
//       {
//         key: 'Authority',
//         wrappers: ['accordionwrapper'],
//         type: 'autocomplete',
//         templateOptions: {
//           label: 'authorityDictionaryService.authorityConfig.labelText',
//           service: this.service,
//           configuration: this.settings,
//           model: this.changes
//         }
//       },
//       {
//         key: 'typeOfNotice',
//         wrappers: ['accordionwrapper'],
//         type: 'autocomplete',
//         templateOptions: {
//           label: 'typeOfNoticeService.noticeTypeConfig.labelText',
//           type: 'autocomplete',
//           service: this.service,
//           configuration: this.settings,
//           model: this.changes
//         }
//       },
//       {
//         key: 'FederalOrgs',
//         wrappers: ['accordionwrapper'],
//         type: 'autocomplete',
//         templateOptions: {
//           label: 'FederalOrganizations',
//           type: 'autocomplete',
//           service: this.service,
//           configuration: this.settings,
//           model: this.changes
//         }
//       },

//       {
//         key: 'setAsideFilter',
//         wrappers: ['accordionwrapper'],
//         type: 'autocomplete',
//         templateOptions: {
//           label: 'setAsideNoticeFilterService.setAsideFilterConfig.labelText',
//           type: 'autocomplete',
//           service: this.service,
//           configuration: this.settings,
//           model: this.changes
//         }
//       },
//       {
//         key: 'initiative',
//         wrappers: ['accordionwrapper'],
//         type: 'autocomplete',
//         templateOptions: {
//           label: 'this.initativeFilterService.config.labelText',
//           type: 'autocomplete',
//           service: this.service,
//           configuration: this.settings,
//           model: this.changes
//         }
//       }
//     ]
//   }
// ];



export let formlyFieldConfig: FormlyFieldConfig[] = [
  {
    key: 'keyword',
    type: 'input',
    defaultValue: 10,
    templateOptions: {
      type: 'text',
      label: 'Keyword',
      expand: false,
      labelClass: 'usa-sr-only',
      group: 'accordion'
    }
  },
  {
    key: 'dateWrapper',
    templateOptions: {
      label: 'Date',
      group: 'accordion',
      expand: true
    },
    fieldGroup: [
      {
        key: 'modifiedDate',
        type: 'daterangepicker',

        templateOptions: {
          label: 'Modified Date'
        }
      },
      {
        key: 'signedDate',
        type: 'daterangepicker',
        templateOptions: {
          label: 'Signed Date'
        }
      },
      {
        key: 'effectiveDate',
        type: 'daterangepicker',
        templateOptions: {
          label: 'Effective Date'
        }
      }
    ]
  },
  {
    key: 'hierarchyWrapper',
    templateOptions: { label: 'Federal Organizations',
    group: 'accordion'
   },
    fieldGroup: [
      {
        key: 'hierarchyOrganization',
        type: 'input',
        defaultValue:'test',
        templateOptions: {
          hideLabel: true
        }
      }
    ]
  },
  {
    key: 'contractTypeWrapper',
    templateOptions: { label: 'Contract Type',
    group: 'accordion'
   },
    fieldGroup: [
      {
        key: 'status',
        type: 'multicheckbox',
        templateOptions: {
          options: [
            {
              key: 'Contract',
              value: 'Contract'
            },
            {
              key: 'icd',
              value: 'Interagency Contract Directory (ICD)'
            }
          ]
        }
      },
      {
        key: 'awardIdvType',
        type: 'input',
        templateOptions: {
          label: 'Award / IDV Type'
        }
      },
      {
        key: 'contractType',
        type: 'input',
        templateOptions: {
          label: 'Contract Type'
        }
      }
    ]
  },
  {
    key: 'entityWrapper',
    templateOptions: { label: 'Entity',
    group: 'accordion' },
    fieldGroup: [
      {
        key: 'legalBusinessName',
        type: 'input',
        templateOptions: {
          type: 'text',
          label: 'Entity Name'
        }
      },
      {
        key: 'uniqueEntityIdDuns',
        type: 'input',
        templateOptions: {
          tagText: 'DUNS',
          tagClass: 'sds-tag--info-purple',
          label: 'Unique Entity ID',
          placeholder: '',
          min: 13,
          max: 40,
          inputType: 'number',
          inputStyle: 'error'
        }
      },
      {
        key: 'uniqueEntityIdSam',
        type: 'input',
        templateOptions: {
          tagText: 'SAM',
          label: 'Unique Entity ID',
          placeholder: '',
          inputType: 'text'
        }
      },
      {
        key: 'cageCode',
        type: 'input',
        templateOptions: {
          type: 'text',
          label: 'CAGE / NCAGE'
        }
      }
    ]
  },
  {
    key: 'serviceClassificationsWrapper',
    templateOptions: { label: 'NAICS and Product Service Codes',
    group: 'accordion' },
    fieldGroup: [
      {
        key: 'naicsCode',
        type: 'input',
        templateOptions: {
          label: 'NAICS Code'
        }
      },
      {
        key: 'pscCode',
        type: 'input',
        templateOptions: {
          label: 'Product Service Code'
        }
      }
    ]
  },
  {
    key: 'setAsideWrapper',
    templateOptions: { label: 'Set Aside' ,
    group: 'accordion'},
    fieldGroup: [
      {
        key: 'setAside',
        type: 'input',
        templateOptions: {
          hideLabel: true
        }
      }
    ]
  },
  {
    key: 'popWrapper',

    templateOptions: { label: 'Place of Performance',
    group: 'accordion' },
    fieldGroup: [
      {
        key: 'popZipCode',
        type: 'input',
        templateOptions: {
          label: 'Zip Code'
        }
      },
      {
        key: 'popState',
        type: 'input',
        templateOptions: {
          label: 'State'
        }
      }
    ]
  },
  {
    key: 'statusWrapper',
    type: 'multicheckbox',
    templateOptions: {
      label: 'Status',
      group: 'panel',
      labelClass: 'usa-sr-only',
      options: [
        {
          key: 'Active',
          value: 'Active'
        },
        {
          key: 'Inactive',
          value: 'Inactive'
        }
      ]
    }
  }
];