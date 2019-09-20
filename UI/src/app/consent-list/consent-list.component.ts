import { ConsentService } from './consent.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { MatDialog, MatRadioChange, MatSnackBar, MatSnackBarConfig, MatSort } from '@angular/material';
import { ConsentComponent } from './consent.component';

export interface UnitType {
  value: string;
  name: string;
}

export interface ConsentType {
  value: string;
  name: string;
}

@Component({
  selector: 'app-consent-list',
  templateUrl: './consent-list.component.html',
  styleUrls: ['./consent-list.component.css']
})
export class ConsentListComponent implements OnInit {
  actionButtonLabel: string = 'OK';
  action: boolean = true;
  units: UnitType[] = [
    { name: 'Predikly', value: 'Predikly' },
    { name: 'CORECO', value: 'CORECO' },
    { name: 'Veritas', value: 'Veritas' },
    { name: 'Atos', value: 'Atos' }
  ];
  types: ConsentType[] = [
    { name: 'Implied', value: 'Implied' },
    { name: 'Verbal', value: 'Verbal' },
    { name: 'Written', value: 'Written' }
  ];

  displayedColumns: string[] = ['id', 'consent_id', 'consent_name', 'consent_policy', 'consent_type', 'consent_unit', 'patient_name', 'edit', 'delete'];
  dataSource: MatTableDataSource<any>;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;


  constructor(private router: Router, public dialog: MatDialog, public consentService: ConsentService,
    public snackBarConfig: MatSnackBarConfig, public matSnackBar: MatSnackBar) {

  }
  ngOnInit() {
    this.snackBarConfig.duration = 3000;
    this.getConsentList();
  }

  getConsentList() {
    this.consentService.getConsentList().subscribe(data => {
      let tempData: any = data;
      this.dataSource = new MatTableDataSource(tempData);
      this.dataSource.paginator = this.paginator;
    });

  }

  refreshList() {
    this.getConsentList();
  }

  open(action, consentData) {
    let dialogRef = this.dialog.open(ConsentComponent, {
      disableClose: true,
      width: '70%',
      data: { requestAction: action, requestActionData: consentData }
    });
    dialogRef.afterClosed().subscribe(result => {
      this.getConsentList();
    });
  }

  onUnitChange(event) {
    let unitValue = event;
    this.consentService.getFilterdData('', unitValue).subscribe(data => {
      let tempData: any = data;
      this.dataSource = new MatTableDataSource(tempData);
      this.dataSource.paginator = this.paginator;
    });
    // this.types = null;
  }

  onTypeChange(event) {
    let typeValue = event;
    this.consentService.getFilterdData(typeValue, '').subscribe(data => {
      let tempData: any = data;
      this.dataSource = new MatTableDataSource(tempData);
      this.dataSource.paginator = this.paginator;
    });
    // this.units = null;
  }

  delete(row) {
    this.consentService.deleteConsent(row['consent_id']).subscribe(data => {
      this.matSnackBar.open('Data Deleted Successfully.', this.action && this.actionButtonLabel, this.snackBarConfig);
      this.getConsentList();
    })
  }



  radioChange(row) {
    this.consentService.getFilterdData(row['consent_type'], row['consent_unit']).subscribe(data => {
      let tempData: any = data;
      this.dataSource = new MatTableDataSource(tempData);
      this.dataSource.paginator = this.paginator;
    });
  }

  updateFilter(filterValue: string) {
    if ('undefined' == typeof this.dataSource) {
      return;
    }
    filterValue = filterValue.trim();
    filterValue = filterValue.toLocaleLowerCase();
    this.dataSource.filter = filterValue;
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
