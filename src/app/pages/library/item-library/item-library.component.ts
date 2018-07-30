import { Component, OnInit, AfterViewInit, OnDestroy, ViewChild } from '@angular/core';
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs';

import { widthColumn, opacity } from "../../../animation/app.animation";

import { ItemlibraryService } from './item-library.service';
import { Itemlibrary } from './item-library';

@Component({
  selector: 'app-item-library',
  templateUrl: './item-library.component.html',
  styleUrls: ['./item-library.component.css'],
  providers: [ItemlibraryService],
  animations: [
    new widthColumn(),
    new opacity()
  ]
})
export class ItemLibraryComponent implements OnInit {

  tableWidth: boolean = false;
  opacity: boolean = false;

  dtOptions: DataTables.Settings = {};

  @ViewChild(DataTableDirective)
  dtElement: DataTableDirective;

  dtTrigger: Subject<Itemlibrary> = new Subject();

  item: any = {
    id: null,
    categoryId: null,
    name: null,
    description: null
  }

  constructor(
    private _itemLibraryService: ItemlibraryService
  ) { }

  ngOnInit() {
    this.get();
  }

  get() {
    this.dtOptions = {
      processing: true,
      ajax: this._itemLibraryService.url,
      columns: [{
          title: "Library Name",
          data: "name"
        }, {
          title: "Category",
          data: "categoryName",
          width: '30%',
        }, {
          title: 'Actions',
          width: '15%',
          render: function (data: any, type: any, full: any) {
            return `<a class="btn btn-default btn-xs btn-edit">
                      <i class="fa fa-edit"></i>
                    </a>
                    <a class="btn btn-primary btn-xs btn-show">
                      <i class="fa fa-search"></i>
                    </a>
                    <a class="btn btn-danger btn-xs btn-delete">
                      <i class="fa fa-trash-o"></i>
                    </a>`
          }
        }],
      rowCallback: (row: Node, data: any, index: number) => {
        $('.btn-edit', row).bind('click', () => {
          this.showFormNewItem();
        });
        $('.btn-delete', row).bind('click', () => {
          this.deleted(data);
        });
        return row;
      }
    }
  }

  deleted(item) {

  }

  get settTableWidth() {
    return this.tableWidth ? 'inSpan7' : 'inSpan12';
  }

  get settOpacity() {
    return this.opacity ? 'hide' : 'show';
  }

  showFormNewItem() {
    this.tableWidth = !this.tableWidth;
    this.opacity = !this.opacity;
  }

}
