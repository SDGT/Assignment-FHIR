package com.sdgt.medicare.fhir.consentServices.controller;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;
import org.springframework.http.ResponseEntity;
import com.sdgt.medicare.fhir.consentServices.model.ConsentServicesResponse;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import com.sdgt.medicare.fhir.consentServices.service.ConsentAllServices;


@CrossOrigin
@RestController
@RequestMapping(value = {"/fhir", "/FHIR"})
public class ConsentServices
{

    @Autowired
    ConsentAllServices service;

    @GetMapping(value = "/getAllPatient")
    public ResponseEntity<List<ConsentServicesResponse>> getAllPatients() throws Exception {

        try {
            List<ConsentServicesResponse> list = service.getAllPatient();
            return new ResponseEntity<List<ConsentServicesResponse>>(list, new HttpHeaders(), HttpStatus.OK);
        } catch (Exception e) {
            throw e;
        }
    }

    @GetMapping(value = "/filterOnTypeOrUnit")
    public ResponseEntity<List<ConsentServicesResponse>> filterOnTypeOrUnit(@RequestParam("consent_type") String consent_type,@RequestParam("consent_unit") String consent_unit) throws Exception {

        try {
            List<ConsentServicesResponse> list = service.filterOnTypeOrUnit(consent_type,consent_unit);
            return new ResponseEntity<List<ConsentServicesResponse>>(list, new HttpHeaders(), HttpStatus.OK);
        } catch (Exception e) {
            throw e;
        }
    }

    @GetMapping(value ="/getByConsentId")
    public ResponseEntity<ConsentServicesResponse> getPatientByConsentId(@RequestParam("id") int id)
            throws Exception {
        ConsentServicesResponse entity = service.getPatientById(id);
        return new ResponseEntity<ConsentServicesResponse>(entity, new HttpHeaders(), HttpStatus.OK);
    }

    @PostMapping(value ="/createOrUpdatePatient")
    public ResponseEntity<ConsentServicesResponse> createOrUpdatePatient(@RequestBody ConsentServicesResponse patientObject, BindingResult bindingResult)
        throws Exception {
    ConsentServicesResponse updated = service.createOrUpdatePatient(patientObject);
    return new ResponseEntity<ConsentServicesResponse>(updated, new HttpHeaders(), HttpStatus.OK);
    }

    @PostMapping(value ="/deletePatient")
    public ResponseEntity<ConsentServicesResponse> deletePatient(@RequestBody ConsentServicesResponse patientObject, BindingResult bindingResult)
            throws Exception {
        ConsentServicesResponse updated = service.deletePatient(patientObject);
        return new ResponseEntity<ConsentServicesResponse>(updated, new HttpHeaders(), HttpStatus.OK);
    }

}
