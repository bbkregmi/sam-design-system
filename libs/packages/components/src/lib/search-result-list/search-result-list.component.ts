import { Component, Input, ContentChild, TemplateRef, OnInit } from '@angular/core';
@Component({
  selector: 'sds-search-result-list',
  templateUrl: './search-result-list.component.html',
  styleUrls: ['./search-result-list.component.scss']
})
export class SdsSearchResultListComponent implements OnInit{

  @Input() displayAs: string;

  ngOnInit() {
    console.log(this.displayAs);
  }
  /**
   * List of items
   */
  @Input() model: any[];

  /**
   * Show divider between results
   */
  @Input() divider = true;

  /**
   * Child Template to be used to display the data for each item in the list of items
   */
  @ContentChild('resultContent') resultContentTemplate: TemplateRef<any>;
}
