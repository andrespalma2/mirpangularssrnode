import { Component, OnInit, Inject } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  ngOnInit(): void {
    throw new Error("Method not implemented.");
  }
  title = 'RedPagosApp'
  constructor(
    @Inject("restUrl") restUrl:string,
    
  ){
    console.log('appcomponent', restUrl)
  }
}
