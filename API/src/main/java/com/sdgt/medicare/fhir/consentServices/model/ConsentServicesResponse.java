package com.sdgt.medicare.fhir.consentServices.model;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Entity;
import javax.persistence.Table;


@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name="TBL_PATIENTS")

public class ConsentServicesResponse
{
    @Id
    @GeneratedValue
    private int consent_id;
    private String consent_type;
    private String consent_unit;
    private String consent_name;
    private String consent_policy;
    private String patient_name;
    private String patient_age;
    private String patient_address;
    private boolean patient_status;

}
