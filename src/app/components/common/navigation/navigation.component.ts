import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  categories: string[] = ['Summary', 'Techical', 'Achievements','Work Exp','Academics', 'Hobbies'];

  constructor() { }

  ngOnInit(): void {
  }

}
