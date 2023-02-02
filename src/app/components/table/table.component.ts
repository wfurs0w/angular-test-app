import { AfterViewInit, Component, ViewChild, OnInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { VehicleCode } from '../../shared/interface';
import driverData from '../../../assets/data.json';

const ELEMENT_DATA: VehicleCode[] = driverData;

@Component({
  selector: 'table-overview-example',
  styleUrls: ['table.component.scss'],
  templateUrl: 'table.component.html',
})

export class TableComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = ['car', 'code1c', 'driver', 'organization', 'department', 'contragent'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  loaderBool: boolean = false;

  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;

  ngOnInit() {
    this.loaderBool = true;
    setTimeout(() => {
      this.loaderBool = false;
    }, 10000);
  }
  
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filterPredicate = function (dataSource, filter: any) {
      return dataSource[filter.type].name.toLowerCase().includes(filter.value.toLowerCase()) ||
      dataSource.code1c.toLowerCase().includes(filter.value.toLowerCase());
   }
    this.dataSource.filter = { type: "Vehicle", value: filterValue.trim() } as any;

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  organizationFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filterPredicate = function (dataSource, filter: any) {
      return dataSource.Vehicle[filter.type]?.name.toLowerCase().includes(filter.value.toLowerCase());
   }
   
    this.dataSource.filter = { type: "Organization", value: filterValue.trim() } as any;

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  departmentFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filterPredicate = function (dataSource, filter: any) {
      return dataSource.Vehicle[filter.type]?.name.toLowerCase().includes(filter.value.toLowerCase());
   }

    this.dataSource.filter = { type: "Department", value: filterValue.trim() } as any;

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  contragentFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filterPredicate = function (dataSource, filter: any) {
      return dataSource.Vehicle[filter.type]?.name.toLowerCase().includes(filter.value.toLowerCase());
   }

    this.dataSource.filter = { type: "Contragent", value: filterValue.trim() } as any;

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
