import { Component, OnInit } from '@angular/core';
import { SessionDataManager } from 'src/app/services/session.datamanager.service';
import { Categories } from "../../../model/enum"

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  selectedCategory:string;
  categoryMap:Map<string,string[]>;

  constructor(private sessionDataManager:SessionDataManager) { 
    this.initializeCategoryMap();
  }

  ngOnInit(): void {
    this.sessionDataManager.getSelectedCategory$().subscribe(selectedCategory=>{
      this.selectedCategory = selectedCategory;
    });
  }

  initializeCategoryMap(){
    let categoryMap = new Map();
    let summaryList:string[]= ["14 years of experience in various development and production support web based projects. Application using Java/J2EE technologies and frameworks.",
    "3 years in leading a team of 15, across global location",
    "5 years of US Client side experience on L1B (Mar-2012 to Oct-2016)",
    "Leading, coordinating and interacting with team members and development team",
    "Interacting with the client and present the Quarterly metrics of project",
    "Handled projects and efficiently delivered the required applications in a very systematic way",
    "Guiding team in contributing their part for automation, wherever possible"];
    let certifications:string[]=["Interest and Learning Python, Machine Learning, through Udemy (Jan 2019)",
    "iOS Application Development Course Completion, Udemy : Dec 2018",
    "MongoDB for Java Developers Course Completion, MongoDB University : Sep,2015",
    "Project Management: SP Jain Institute of Management & Research (3 day course) : Jul,2009",
    "Sun Certified Web Component Developer : Mar,2008",
    "Sun Certified Java Programmer : Mar,2009"];
    let techSummary:string[]=["Proficient in full Software Development Life Cycle (SDLC) using Agile",
    "Proficient in multi-tier application design and development using Java, J2EE, JSP, Servlets, Spring, Spring AOP, Hibernate, MongoDB and SQL",
    "Experience with XML and related standards and technologies like SOAP, WSDL, DTD and XSD",
    "Have worked on project having Angular2+, jQuery as client side scripting.",
    "Code control was done through Git, SVN and CVS.",
    "Self-learned SpringBoot, Dockers, Microservices, Restful Webservices.",
    "Worked on technologies Lucene Indexing, Elastic Search, Service Now, ITIL framework."];
    let academics:string[]=["2005 BE Mumbai University (73.79%), 33rd Rank in Mumbai University",
    "2001 Higher Secondary, Khalsa College (75.33%)",
    "1999 Secondary School, AES High School (74.80%)"];
    let achievments:string[]=["Star Excellence Award: Jul 2015: promoting innovation, leading change and embarking on new ways to drive business goals",
    "Star Excellence Award: Mar 2013: promoting innovation, leading change and embarking on new ways to drive business goals",
    "Person for FY11: Jul 2011: Demonstrating excellence in handling critical applications and providing technical solution"];

    categoryMap.set(Categories.Summary,summaryList);
    categoryMap.set(Categories.Certification,certifications);
    categoryMap.set(Categories.TechSummary,techSummary);
    categoryMap.set(Categories.Academics,academics);
    categoryMap.set(Categories.Achievements,achievments);
    
    this.categoryMap = categoryMap;
  }  

}
