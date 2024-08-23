import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-http-test',
  standalone: true,
  imports: [],
  templateUrl: './http-test.component.html',
  styleUrl: './http-test.component.css',
})
export class HttpTestComponent implements OnInit {
  constructor(private httpClient : HttpClient) {}
  ngOnInit(): void {
    this.callApiTest();
  }

  //this should be done in a service instead of a component


  BASE_API_URL : string = "https://jsonplaceholder.typicode.com/";


  callApiTest(){
    //which one should I use?


    //using the fetch API
    fetch(this.BASE_API_URL + "todos/1")
    .then(r => r.json())
    .then(result => console.log(result))
    
    //using Angulars httpClient service
    this.httpClient.get<unknown>(this.BASE_API_URL + "todos/1")
    .subscribe(r => console.log(r))
    
  }
}
