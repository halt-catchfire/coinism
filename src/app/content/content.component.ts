import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Router } from '../../../node_modules/@angular/router';
@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  apiURL='http://localhost:8080';

  msg:String;
  router:string;
  dataRefresher:any;
  loggedIn:boolean =true ;
  constructor(private http:HttpClient, public _router: Router) 
  { 
    this.router=_router.url; 
  }

  ngOnInit() {
    this.getMessage();
     
  }

  getMessage(){
    this.http.get(this.apiURL + '/msg',{responseType:"text"}  ).subscribe((data)=>{
    
     this.msg=data;
    });
  }

  refreshData(){

    this.dataRefresher=setInterval(() => {this.getMessage();},3000)
  }
}
