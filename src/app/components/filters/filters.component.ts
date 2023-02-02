import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { VehicleCode } from '../../shared/interface';
import driverData from '../../../assets/data.json';

const ELEMENT_DATA: VehicleCode[] = driverData;

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss']
})
export class FiltersComponent implements OnInit, AfterViewInit {
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;

  constructor() { }

  ngOnInit() {
    this.dataSource.filterPredicate = function (dataSource, filter: any) {
      return dataSource.Vehicle[filter.type]?.name.toLowerCase().includes(filter.value.toLowerCase());
   }
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  organizationFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = { type: "Organization", value: filterValue.trim() } as any;

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  departmentFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = { type: "Department", value: filterValue.trim() } as any;

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  contragentFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = { type: "Contragent", value: filterValue.trim() } as any;

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}
