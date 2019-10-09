import { Component, OnInit, Inject } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'RedPagosApp'
  rest_url = undefined;
  constructor(
    @Inject("restUrl") restUrl:string,
    
  ){
    console.log('appcomponent', restUrl)
    this.rest_url = restUrl
  }

  ngOnInit(){
    console.log('OnInit')
    console.log('resturl', this.rest_url)
  }
}
