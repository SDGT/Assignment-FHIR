import { ConsentService } from './consent.service';
import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatSnackBarConfig, MatSnackBar } from '@angular/material';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

export interface UnitType {
  value: string;
  name: string;
}

export interface ConsentType {
  value: string;
  name: string;
}

@Component({
  selector: 'app-consent',
  templateUrl: './consent.component.html',
  styleUrls: ['./consent-list.component.css']
})


export class ConsentComponent {
  actionButtonLabel: string = 'OK';
  action: boolean = true;
  consentForm: FormGroup;
  patientForm: FormGroup;
  status = [{ name: 'true', value: 'true' }, { name: 'false', value: 'false' }];
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

  constructor(public dialogRef: MatDialogRef<ConsentComponent>, @Inject(MAT_DIALOG_DATA) public data: any, public fb: FormBuilder,
    public consentService: ConsentService, public snackBarConfig: MatSnackBarConfig, public matSnackBar: MatSnackBar) {

  }

  ngOnInit() {
    this.snackBarConfig.duration = 3000;
    this.consentForm = this.fb.group({
      consent_id: [],
      consent_name: [null, Validators.compose([Validators.required])],
      consent_policy: [null, Validators.compose([Validators.required])],
      consent_type: [null, Validators.compose([Validators.required])],
      consent_unit: [null, Validators.compose([Validators.required])],
      patient_address: [null, Validators.compose([Validators.required])],
      patient_age: [null, Validators.compose([Validators.required, Validators.minLength(1), Validators.maxLength(3)])],
      patient_name: [null, Validators.compose([Validators.required])],
      patient_status: []
    });
    this.patientForm = this.fb.group({
      patient_address: [null, Validators.compose([Validators.required])],
      patient_age: [null, Validators.compose([Validators.required])],
      patient_name: [null, Validators.compose([Validators.required])],
    })
    if ('Edit' == this.data['requestAction']) {
      this.consentForm['controls']['consent_id'].setValue(this.data['requestActionData']['consent_id']);
      this.consentForm['controls']['consent_name'].setValue(this.data['requestActionData']['consent_name']);
      this.consentForm['controls']['consent_policy'].setValue(this.data['requestActionData']['consent_policy']);
      this.consentForm['controls']['consent_type'].setValue(this.data['requestActionData']['consent_type']);
      this.consentForm['controls']['consent_unit'].setValue(this.data['requestActionData']['consent_unit']);
      this.consentForm['controls']['patient_address'].setValue(this.data['requestActionData']['patient_address']);
      this.consentForm['controls']['patient_age'].setValue(this.data['requestActionData']['patient_age']);
      this.consentForm['controls']['patient_name'].setValue(this.data['requestActionData']['patient_name']);
      this.consentForm['controls']['patient_status'].setValue(true);
    }

    if ('info' == this.data['requestAction']) {
      this.patientForm['controls']['patient_address'].setValue(this.data['requestActionData']['patient_address']);
      this.patientForm['controls']['patient_age'].setValue(this.data['requestActionData']['patient_age']);
      this.patientForm['controls']['patient_name'].setValue(this.data['requestActionData']['patient_name']);
    }
  }

  onStatusChange() {

  }

  submitConsentForm(form) {
    if (form['consent_id'] == null) {
      delete form['consent_id'];
      form['consent_name'] = form['consent_name'];
      form['consent_policy'] = form['consent_policy'];
      form['consent_type'] = form['consent_type'];
      form['consent_unit'] = form['consent_unit'];
      form['patient_address'] = form['patient_address'];
      form['patient_age'] = form['patient_age'];
      form['patient_name'] = form['patient_name'];
      form['patient_status'] = true;
      this.consentService.submitConsent(form).subscribe(data => {
        console.log("sub res data1", data)
        this.matSnackBar.open('Data Added Successfully.', this.action && this.actionButtonLabel, this.snackBarConfig);
      })
    } else {
      this.consentService.submitConsent(form).subscribe(data => {
        console.log("sub res data2", data)
        this.matSnackBar.open('Data Updated Successfully.', this.action && this.actionButtonLabel, this.snackBarConfig);
      })
    }
    this.dialogRef.close({ success: false });
  }

  cancel() {
    this.dialogRef.close({ success: false });
  }

}
