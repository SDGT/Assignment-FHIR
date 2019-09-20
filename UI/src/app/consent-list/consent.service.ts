import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })

export class ConsentService {

  constructor(public httpClient: HttpClient) { }

  getConsentList() {
    return this.httpClient.get(environment.baseApi + '/fhir/getAllPatient');
  }

  getFilterdData(consent_type: string, consent_unit: string) {
    return this.httpClient.get(`${environment.baseApi}/fhir/filterOnTypeOrUnit?consent_type=${consent_type}&consent_unit=${consent_unit}`);
  }

  submitConsent(formData) {
    return this.httpClient.post(environment.baseApi + '/fhir/createOrUpdatePatient', formData);
  }

  deleteConsent(consent_id: string) {
    return this.httpClient.post(environment.baseApi + '/fhir/deletePatient', { consent_id: consent_id });
  }
}