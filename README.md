# Assessment Project Using FHIR

###### Please do not share this test or your answers any other place where it can be found by a third party. 

## Intro
The code in this project is a isolated and very simplified version of our FHIR understanding. We will use FHIR version 4 to work in this project. 

### Assessment Description
- There are two parts of this project. 
-- Spring Boot Rest API : Consent Service [consent-service] 
-- Angular UI : Consent UI 

### Setup notes
- The projects should have Spring Boot Dependency and Angular npm dependency. 
- Spring Boot needs to be setup using maven. Please use the microservice architecture. 
- For data storage use MongoDB or in memory database.

### Assignment
1. A Consent service should have basic Create, Edit, Get, Get All, Search(based on Unit, Type, Consent No) and Delete API. 
-- Delete API should be exposed to UI. 
2. UI should able to show the consent list. By default all consent list should be shown in paginated form.
-- Grid/List should have basic columns of consent. [Type, Name, Number, Unit, Policy, Patient Info{this will be a info icon}]
-- The icon on click should show basic patient infos [ For this assignment we will stick to static data]
3. Based on search filters the List gets updated with filtered data.
4. If one consent row is clicked on the list/grid the filters should pick up the filters.
-- There are limited filters on screen. 
--- Unit
--- Type
--- ConsentNo
5. Each filter should work indivisually once they searched.
6. It will be value added if a Consent Form is designed for creatation of Consent. It is not necessary though. Spring API should work for manual data save using json data examples.

### Reference
- To work with the FHIR objects in mongodb the below link will help you : https://github.com/Vizuri/openshift-fhir-rules-microservices/tree/master/fhir-patient-service
-- You need to improvise the example to use the latest FHIR version R4 Consent Resource. 
-- You also need to Extend this Consent object to store certain data like, Unit code, name etc. Dont over use the feature of extention. Try using FHIR variables.

- This is the FHIR R4 link of Consent Resource : https://www.hl7.org/fhir/consent.html#resource

- Below a sample screen is attached.
-- Every Component should be separated and communicate each other.
-- Any state is change to one component then it should reflect to other.
![Alt text](assignment.PNG?raw=true "Assignment Wireframe")
Feel free to ask questions anytime.


