import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  userName:any;
  show = 4;
  constructor(
    private common: CommonService
    ) {
    this.common.userName.subscribe(u=>{
      this.userName=u;
    })
    
    this.userName =localStorage.getItem('userName');
   }
  ngOnInit(): void {
    
  }

  userList=[
    {
      imgPath:'../../../../assets//photo-1511707171634-5f897ff02aa9.jpg',
      title:'Card title 1',
      description: `Some quick example text to build on the card title and make up the bulk of the
      card's content.`
    },
    {
      imgPath:'../../../../assets//photo-1511707171634-5f897ff02aa9.jpg',
      title:'Card title 2',
      description: `Some quick example text to build on the card title and make up the bulk of the
      card's content.`
    },
    {
      imgPath:'../../../../assets//photo-1511707171634-5f897ff02aa9.jpg',
      title:'Card title 3',
      description: `Some quick example text to build on the card title and make up the bulk of the
      card's content.`
    },
    {
      imgPath:'../../../../assets//photo-1511707171634-5f897ff02aa9.jpg',
      title:'Card title 4',
      description: `Some quick example text to build on the card title and make up the bulk of the
      card's content.`
    },
    {
      imgPath:'../../../../assets//photo-1511707171634-5f897ff02aa9.jpg',
      title:'Card title 5',
      description: `Some quick example text to build on the card title and make up the bulk of the
      card's content.`
    },
    {
      imgPath:'../../../../assets//photo-1511707171634-5f897ff02aa9.jpg',
      title:'Card title 6',
      description: `Some quick example text to build on the card title and make up the bulk of the
      card's content.`
    },
    {
      imgPath:'../../../../assets//photo-1511707171634-5f897ff02aa9.jpg',
      title:'Card title 7',
      description: `Some quick example text to build on the card title and make up the bulk of the
      card's content.`
    },
    {
      imgPath:'../../../../assets//photo-1511707171634-5f897ff02aa9.jpg',
      title:'Card title 8',
      description: `Some quick example text to build on the card title and make up the bulk of the
      card's content.`
    },
    {
      imgPath:'../../../../assets//photo-1511707171634-5f897ff02aa9.jpg',
      title:'Card title 9',
      description: `Some quick example text to build on the card title and make up the bulk of the
      card's content.`
    },
    
  ]

  increaseShow() {
    this.show += 4; 
  }

}
