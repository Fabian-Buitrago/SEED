import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
  styleUrls: ['./my-component.component.css']
})
export class MyComponentComponent implements OnInit {
  name = 'Fabian Buitrago';
  count = 0;
  disabled = false;
  imgSource = 'https://www.facevertizing.com/wp-content/uploads/2016/05/Nailed-It-Baby-Meme-06.jpg';

  constructor() { }

  ngOnInit() {
  }

  disabledAndCount(){
   this.count += 1; 
   this.disabled = !this.disabled
  }

}
