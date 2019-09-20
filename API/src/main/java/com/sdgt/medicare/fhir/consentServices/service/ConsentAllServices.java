package com.sdgt.medicare.fhir.consentServices.service;


import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import javax.transaction.Transactional;

import com.sdgt.medicare.fhir.consentServices.repository.ConsentServicesRepoCustomImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.sdgt.medicare.fhir.consentServices.repository.ConsentServicesRepo;
import com.sdgt.medicare.fhir.consentServices.model.ConsentServicesResponse;

@Service
@Transactional
public class ConsentAllServices {

    @Autowired
     ConsentServicesRepo consentServices;
    @Autowired
    ConsentServicesRepoCustomImpl consentServicesRepoCustom;

    //method to get patient list which having status true
    public List<ConsentServicesResponse> getAllPatient()
    {
        List<ConsentServicesResponse> patientList = consentServicesRepoCustom.getAllPatients();

        System.out.println(patientList);
        //check patient list is empty or not
        if(patientList.size() > 0) {
            return patientList;
        } else {
            return new ArrayList<ConsentServicesResponse>();
        }
    }

    //method to get patient list based on consent type or consent unit
    public List<ConsentServicesResponse> filterOnTypeOrUnit(String type,String unit)
    {
        List<ConsentServicesResponse> patientList = consentServicesRepoCustom.filterOnTypeOrUnit(type,unit);

        System.out.println(patientList);
        //check patient list is empty or not
        if(patientList.size() > 0) {
            return patientList;
        } else {
            return new ArrayList<ConsentServicesResponse>();
        }
    }




    //method to get patient information of specified patient id
    public ConsentServicesResponse getPatientById(int id) throws Exception
    {
        try{
            Optional<ConsentServicesResponse> patient = consentServices.findById(id);
            //check record is present or not
            if(patient.isPresent()) {
                return patient.get();
            } else {
                return new ConsentServicesResponse();
            }
        }catch(Exception e){
            e.printStackTrace();
            throw e;
        }

    }




    //method to update patient's status false for soft delete
    public ConsentServicesResponse deletePatient(ConsentServicesResponse entity) throws Exception
    {
        Optional<ConsentServicesResponse> patient = consentServices.findById(entity.getConsent_id());

        if(patient.isPresent())
        {
            ConsentServicesResponse newEntity = patient.get();
            newEntity.setPatient_status(false);
           // newEntity = consentServices.save(newEntity);
            return newEntity;
        } else {
            entity = consentServices.save(entity);

            return entity;
        }
    }


    //method to create or update patient's details
    public ConsentServicesResponse createOrUpdatePatient(ConsentServicesResponse entity) throws Exception
    {
        Optional<ConsentServicesResponse> patient = consentServices.findById(entity.getConsent_id());

        //check object is present or not
        if(patient.isPresent())
        {
            ConsentServicesResponse newEntity = patient.get();
            newEntity.setConsent_name(entity.getConsent_name());
            newEntity.setConsent_policy(entity.getConsent_policy());
            newEntity.setConsent_type(entity.getConsent_type());
            newEntity.setConsent_unit(entity.getConsent_unit());
            newEntity.setPatient_name(entity.getPatient_name());
            newEntity.setPatient_address(entity.getPatient_address());
            newEntity.setPatient_age(entity.getPatient_age());

            newEntity = consentServices.save(newEntity);

            return newEntity;
        } else {
            entity = consentServices.save(entity);

            return entity;
        }
    }
}
