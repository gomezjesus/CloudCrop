import { Component, OnInit, ViewChild } from '@angular/core';
import { AngularFireDatabase } from "angularfire2/database";
import { Observable } from 'rxjs';
import {MatTableModule} from '@angular/material/table';
import {MatSort, MatTableDataSource} from '@angular/material';

@Component({
  selector: 'app-invernadero',
  templateUrl: './invernadero.component.html',
  styles: []
})
export class InvernaderoComponent implements OnInit {
  logs: any[];
   displayedColumns = ['fecha', 'ha', 'ht', 'temp'];
  // displayedColumns = ['fecha', 'ha', 'ht', 'temp'];
  dataSource = new MatTableDataSource(this.logs);

  @ViewChild(MatSort) sort: MatSort;

  constructor(private db: AngularFireDatabase) {
     this.loadData();
    }
  ngOnInit() {
    this.dataSource.sort = this.sort;
  }

  loadData() {
    this.db.list('/log').valueChanges().subscribe(logs => {
      this.logs = logs;
      console.log(this.logs);
      this.dataSource = new MatTableDataSource(this.logs);
      this.dataSource.sort = this.sort;

    });
  }
}
/*const ELEMENT_DATA: any[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];*/
