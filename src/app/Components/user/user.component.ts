import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  userId:string = '';
  userName:string = '';
  status:string = '';

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params: Params) => {
        this.userId = params['id'],
        this.userName = params['name']
      }
    );

    this.route.queryParams.subscribe(
      (queryParams: Params) =>{
        this.status = queryParams['status']
      }
    )
  }

}
