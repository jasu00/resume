import { Component, OnInit } from '@angular/core';
import { SessionDataManager } from 'src/app/services/session.datamanager.service';
import { Categories, Profile } from "../../../model/enum";
import {ResumeCategoryPoint} from "../../../model/resume_category_point";

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  selectedCategory:string;
  categoryMap:Map<string,ResumeCategoryPoint[]>;
  currentYear:number;

  constructor(private sessionDataManager:SessionDataManager) {     
    this.currentYear = new Date().getFullYear();
    this.initializeCategoryMap();
  }

  ngOnInit(): void {
    this.sessionDataManager.getSelectedCategory$().subscribe(selectedCategory=>{
      this.selectedCategory = selectedCategory;
    });
  }

  initializeCategoryMap(){
    let categoryMap = new Map();
    let privacyList:ResumeCategoryPoint[]= 
    [
      {icon:"verified_user",desc: "We consider privacy is of utmost importance."},
      {icon:"verified_user",desc: "We do not collect the data from the iOS App, to any external serves."},
      {icon:"verified_user",desc: "The app do not have any web integration to send or recieve data"},
      {icon:"verified_user",desc: "The data enetered under Settings, are stored on phone, and is used only inside app for display and derive app customization for user."},
      {icon:"verified_user",desc:"Jan-21-2021, We reserve the rights to update the policy from time to time. You are advised to review the policy from time to time."},
    ];
    let summaryList:ResumeCategoryPoint[]= 
    [
      {icon:"functions",desc: (this.currentYear-Profile.StartExperience)+" years total IT experience"},
      {icon:"groups",desc:"Different roles: Developer, Support Team Lead, QA Team Lead"},
      {icon:"build",desc:"Worked with technologies like Angular8, Java, J2EE, Elastic Index, Lucene, Selenium, MongoDB"},
      {icon:"build",desc:"Worked with Tools Kibana, Rally, SmartSheet, Jenkins, CAE"},
      {icon:"mediation",desc:"Worked with GIT for Code Control"},
      {icon:"verified_user",desc:"Self-learned SpringBoot, Dockers, Microservices, Restful Webservices."},
      {icon:"show_chart",desc:"Interacting with the client and present the Quarterly metrics of project"},
      {icon:"vertical_split",desc:"Handled projects and efficiently delivered the required applications in a very systematic way"},
      {icon:"settings",desc:"Guided team for selenium automation"},
    ];
    let certifications:ResumeCategoryPoint[]=
    [
      {icon:"verified_user",desc:"Machine Learning with Python, Udemy: Jan,2019"},
      {icon:"verified_user",desc:"iOS Application Development Course Completion, Udemy: Dec,2018"},
      {icon:"verified_user",desc:"Angular 4 Course Completion, Udemy: Dec,2017"},
      {icon:"verified_user",desc:"MongoDB for Java Developers Course Completion, MongoDB University: Sep,2015"},
      {icon:"verified_user",desc:"Project Management: SP Jain Institute of Management & Research (3 day course): Jul,2009"},
      {icon:"verified_user",desc:"Sun Certified Web Component Developer: Mar,2009"},
      {icon:"verified_user",desc:"Sun Certified Java Programmer: Mar,2008"}];
    let techSummary:ResumeCategoryPoint[]=
    [
      {icon:"",desc:"Proficient in full Software Development Life Cycle (SDLC) using Agile"},
      {icon:"",desc:"Proficient in multi-tier application design and development using Java, J2EE, JSP, Servlets, Spring, Spring AOP, Hibernate, MongoDB and SQL"},
      {icon:"",desc:"Experience with XML and related standards and technologies like SOAP, WSDL, DTD and XSD"},
      {icon:"",desc:"Worked on technologies Lucene Indexing, Elastic Search, Service Now, ITIL framework."}];
    let academics:ResumeCategoryPoint[]=
    [{icon:"military_tech",desc:"2005 BE Mumbai University (73.79%), 33rd Rank in Mumbai University"},
    {icon:"military_tech",desc:"2001 Higher Secondary, Khalsa College (75.33%)"},
    {icon:"military_tech",desc:"1999 Secondary School, AES High School (74.80%)"}];
    let achievments:ResumeCategoryPoint[]=[
      {icon:"military_tech",desc:"Star Excellence Award: Jul 2015: promoting innovation, leading change and embarking on new ways to drive business goals"},
      {icon:"military_tech",desc:"Star Excellence Award: Mar 2013: promoting innovation, leading change and embarking on new ways to drive business goals"},
      {icon:"military_tech",desc:"Person for FY11: Jul 2011: Demonstrating excellence in handling critical applications and providing technical solution"}];

    categoryMap.set(Categories.Privacy,privacyList);  
    categoryMap.set(Categories.Summary,summaryList);
    categoryMap.set(Categories.TechSummary,techSummary);
    categoryMap.set(Categories.Certifications,certifications);
    categoryMap.set(Categories.Academics,academics);
    categoryMap.set(Categories.Achievements,achievments);
    
    this.categoryMap = categoryMap;
  }  

}
