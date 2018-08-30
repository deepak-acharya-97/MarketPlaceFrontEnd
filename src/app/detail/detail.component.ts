import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { ApplicationDataService } from '../application-data.service';
import { Application } from '../application';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  selectedId;
  application;

  constructor(private activatedroute: ActivatedRoute, private applicationdataservice: ApplicationDataService, private router: Router) { }

  ngOnInit() {
    this.activatedroute.paramMap.subscribe((params: ParamMap) => {
      this.selectedId = parseInt(params.get('id'));
    });
    this.generateTheNoteWithGivenId(this.selectedId).then((data) => {
      this.application = data;
      console.log(this.application);
    }
    );

  }

  generateTheNoteWithGivenId(id: number) {
    return new Promise((resolve, reject) => {
      this.applicationdataservice.getById(id).subscribe(data => resolve(data))
    });
  }

  navigateToPage(url) {
    console.log(url);
    this.router.navigateByUrl(url);
  }

}
