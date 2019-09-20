package com.sdgt.medicare.fhir.consentServices.repository;

import com.sdgt.medicare.fhir.consentServices.model.ConsentServicesResponse;

import org.springframework.data.repository.CrudRepository;

import org.springframework.stereotype.Repository;
import org.springframework.data.jpa.repository.JpaRepository;

@Repository
public interface ConsentServicesRepo extends JpaRepository<ConsentServicesResponse,Integer>
{

}


