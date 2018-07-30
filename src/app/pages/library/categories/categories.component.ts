import { Component, OnInit, AfterViewInit, OnDestroy, ViewChild } from '@angular/core';
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs';

import { CategoriesService } from './categories.service';
import { Categories } from './categories';

import Swal from 'sweetalert2'

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css'],
  providers: [CategoriesService]
})
export class CategoriesComponent implements AfterViewInit, OnDestroy, OnInit {

  dtOptions: DataTables.Settings = {};

  @ViewChild(DataTableDirective)
  dtElement: DataTableDirective;

  dtTrigger: Subject<Categories> = new Subject();

  fEdit: boolean = false;
  categories: Categories[];

  item: any = {
    id: Number,
    name: "",
  }

  constructor(
    private _categoriesService: CategoriesService
  ) { }

  ngOnInit() {
    this.get()
  }

  ngAfterViewInit(): void {
    this.dtTrigger.next();
  }

  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }

  get() {
    this.dtOptions = {
      processing: true,
      pageLength: 5,
      lengthMenu: [5, 10, 25, 50, 100],
      ajax: this._categoriesService.url,
      columns: [{
        title: 'Category Name',
        data: 'name'
      }, {
        title: 'Actions',
        width: '20%',
        render: function (data: any, type: any, full: any) {
          return `<a class="btn btn-default btn-xs btn-edit">
                    <i class="fa fa-edit"></i>
                  </a>
                  <a class="btn btn-danger btn-xs btn-delete">
                    <i class="fa fa-trash-o"></i>
                  </a>`
        }
      }],
      rowCallback: (row: Node, data: any[] | Object, index: number) => {
        $('.btn-edit', row).bind('click', () => {
          this.edit(data);
        });

        $('.btn-delete', row).bind('click', () => {
          this.deleted(data)
        });
        return row;
      }
    }
  }

  created(event) {
    event.preventDefault();

    this._categoriesService.created(this.item)
      .subscribe(res => {
        if (res.serverStatus) {
          Swal({
            type: 'success',
            title: 'Created!',
            text: 'Action created has been successfully.',
            showConfirmButton: false,
            timer: 1500
          })
          this.item = {};
          this.dtRenderer();
        } else {
          Swal({
            type: 'error',
            title: 'Failed',
            text: res.sqlMessage,
          })
        }
      })
  }

  edit(data) {
    this.item = data;
    this.fEdit = true;
  }

  updated(event) {
    event.preventDefault();

    this._categoriesService.updated(this.item)
      .subscribe(res => {
        if (res.serverStatus) {
          Swal({
            type: 'success',
            title: 'Updated!',
            text: 'Action updated has been successfully.',
            showConfirmButton: false,
            timer: 1500
          })
          this.item = {};
          this.dtRenderer();
          this.fEdit = false;
        } else {
          Swal({
            type: 'error',
            title: 'Failed',
            text: res.sqlMessage,
          })
        }
      })
  }

  deleted(data) {
    Swal({
      title: 'Are you sure?',
      text: "You will delete this data?",
      type: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, Delete it!',
      cancelButtonText: 'No, Cancel!',
      reverseButtons: true
    }).then((result) => {
      if (result.value) {
        this._categoriesService.deleted(data).
          subscribe(res => {
            this.dtRenderer();
            if (res.serverStatus) {
              Swal({
                type: 'success',
                title: 'Deleted!',
                text: 'Action deleted has been successfully.',
                showConfirmButton: false,
                timer: 1500
              })
            } else {
              Swal({
                type: 'error',
                title: 'Failed',
                text: res.sqlMessage,
              })
            }
          })
      }
    })
  }

  dtRenderer() {
    this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
      dtInstance.destroy();
      this.dtTrigger.next();
    });
  }

  onReset() {
    this.item = {};
    this.fEdit = false;
  }

}
