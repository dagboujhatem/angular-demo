import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit{
  serviceName?: string;
  id?: string;

  constructor(private activatedRoute: ActivatedRoute){}

  ngOnInit(): void {
    const {id, serviceName} = this.activatedRoute.snapshot.params;
    console.log({id, serviceName})
    this.id = id;
    this.serviceName = serviceName;
  }
  
}
