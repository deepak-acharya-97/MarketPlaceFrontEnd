import { Component, OnInit } from '@angular/core';
import { ApplicationDataService } from '../application-data.service';
import { Application } from '../application';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  applications: Application []

  constructor(private _applicationdataservice: ApplicationDataService, private router: Router) { }

  ngOnInit() {
    this._applicationdataservice.getAll().subscribe(data => this.applications = data, err => console.log(err));
  }

  getDetails(id) {
    this.router.navigate(['/detail', id]);
  }



}
