import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DocumentationExamplesPage } from '../../shared/examples-page/examples.component';
import { DocumentationAPIPage } from '../../shared/api-page/docs-api.component';
import { DocumentationSourcePage } from '../../shared/source-page/source.component';
import { DocumentationTemplatePage } from '../../shared/template-page/template.component';
import { DocumentationComponentsSharedModule, DocumentationDemoList } from '../../shared/index';
import { ComponentWrapperComponent } from '../../../shared/component-wrapper/component-wrapper.component';
import { FormlyAutocompleteBasicModule } from './demos/basic/autocomplete-basic.module';
import { FormlyAutocompleteBasic } from './demos/basic/autocomplete-basic.component';
import { FormlyAutocompleteFreetextModule } from './demos/freetext/autocomplete-freetext.module';
import { FormlyAutocompleteFreetext } from './demos/freetext/autocomplete-freetext.component';
import { FormlyAutocompleteTag } from './demos/tag/autocomplete-tag.component';
import { FormlyAutocompleteTagModule } from './demos/tag/autocomplete-tag.module';
import { FormlyAutocompleteDisable } from './demos/disable/autocomplete-disable.component';
import { FormlyAutocompleteDisableModule } from './demos/disable/autocomplete-disable.module';

declare var require: any;
const DEMOS = {
  basic: {
    title: 'Basic Form Autocomplete',
    type: FormlyAutocompleteBasic,
    code: require('!!raw-loader!./demos/basic/autocomplete-basic.component'),
    markup: require('!!raw-loader!./demos/basic/autocomplete-basic.component.html'),
    path: 'libs/documentation/src/lib/components/autocomplete/demos/basic'
  },
  freetext: {
    title: 'Autocomplete with Free text enabled',
    type: FormlyAutocompleteFreetext,
    code: require('!!raw-loader!./demos/freetext/autocomplete-freetext.component'),
    markup: require('!!raw-loader!./demos/freetext/autocomplete-freetext.component.html'),
    path: 'libs/documentation/src/lib/components/autocomplete/demos/freetext'
  },
  tag: {
    title: 'Autocomplete with Tag mode enabled',
    type: FormlyAutocompleteTag,
    code: require('!!raw-loader!./demos/tag/autocomplete-tag.component'),
    markup: require('!!raw-loader!./demos/tag/autocomplete-tag.component.html'),
    path: 'libs/documentation/src/lib/components/autocomplete/demos/tag'
  },
 
  disable: {
    title: 'Autocomplete with disable',
    type: FormlyAutocompleteDisable,
    code: require('!!raw-loader!./demos/disable/autocomplete-disable.component'),
    markup: require('!!raw-loader!./demos/disable/autocomplete-disable.component.html'),
    path: 'libs/documentation/src/lib/components/autocomplete/demos/disable'
  },
};

export const ROUTES = [
  { path: '', pathMatch: 'full', redirectTo: 'examples' },
  {
    path: '',
    data: {
      title: 'Autocomplete',
      items: [
        {
          pkg: 'formly',
          type: 'components',
          name: 'FormlyFieldAutoCompleteComponent',
          formType: 'autocomplete'
        }
      ]
    },
    component: ComponentWrapperComponent,
    children: [
      { path: 'examples', component: DocumentationExamplesPage },
      { path: 'api', component: DocumentationAPIPage },
      { path: 'source', component: DocumentationSourcePage },
      { path: 'template', component: DocumentationTemplatePage },
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    DocumentationComponentsSharedModule,
    FormlyAutocompleteBasicModule,
    FormlyAutocompleteFreetextModule,
    FormlyAutocompleteTagModule,
    FormlyAutocompleteDisableModule
  ]
})
export class FormlyAutocompleteModule {
  constructor(demoList: DocumentationDemoList) {
    demoList.register('formly-autocomplete', DEMOS);
  }
}
