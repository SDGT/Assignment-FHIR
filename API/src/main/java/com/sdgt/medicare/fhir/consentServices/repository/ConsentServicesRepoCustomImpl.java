package com.sdgt.medicare.fhir.consentServices.repository;

import com.sdgt.medicare.fhir.consentServices.model.ConsentServicesResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import javax.persistence.EntityManager;
import javax.persistence.Query;
import java.util.ArrayList;
import java.util.List;

@Repository
@Transactional
public class ConsentServicesRepoCustomImpl implements ConsentServicesRepoCustom
{

    @Autowired
    EntityManager entityManager;


    //method to fetch patient list which having status true
    @Override
    public List<ConsentServicesResponse> getAllPatients()
    {
        List<ConsentServicesResponse> patientList = new ArrayList<>();
        try {
            StringBuilder statusQuery = new StringBuilder();
            Query query = entityManager.createQuery("Select patientList From ConsentServicesResponse patientList WHERE patient_status='true'", ConsentServicesResponse.class);
            patientList = query.getResultList();
        } catch (Exception e) {
            throw e;
        }
        return patientList;
    }


    //method to fetch patient list based on consent status or consent unit or both
    @Override
    public List<ConsentServicesResponse> filterOnTypeOrUnit(String type,String unit)
    {
        List<ConsentServicesResponse> patientList = new ArrayList<>();
        try {
            StringBuilder statusQuery = new StringBuilder();
            if(type!="" && unit!="") {
                statusQuery.append(  "patientList.consent_unit=:unit AND patientList.consent_type=:type " );
            }else if (unit!="") {
                statusQuery.append(" patientList.consent_unit=:unit ");
            } else if (type!="") {
                statusQuery.append(" patientList.consent_type=:type ");
            }else {
                statusQuery.append("");
            }
            Query query = entityManager.createQuery("Select patientList From ConsentServicesResponse patientList WHERE " +
                    statusQuery.toString()+" AND patientList.patient_status='true'" , ConsentServicesResponse.class);

            if(unit!="" && type!="") {
                query.setParameter("unit", unit);
                query.setParameter("type", type);
            } else if (unit!="") {
                query.setParameter("unit", unit);
            } else if (type!="") {
                query.setParameter("type", type);
            }

            patientList = query.getResultList();
        } catch (Exception e) {
            throw e;
        }
        return patientList;
    }
}
