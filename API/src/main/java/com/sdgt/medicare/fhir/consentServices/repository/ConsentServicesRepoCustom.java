package com.sdgt.medicare.fhir.consentServices.repository;

import java.util.List;
import com.sdgt.medicare.fhir.consentServices.model.ConsentServicesResponse;
import org.springframework.stereotype.Repository;

@Repository
public interface ConsentServicesRepoCustom
{
    //method to fetch all patient list having status true
    List<ConsentServicesResponse> getAllPatients();

    //method to fetch patient list based on consent type or consent unit
    List<ConsentServicesResponse> filterOnTypeOrUnit(String type,String unit);
}
