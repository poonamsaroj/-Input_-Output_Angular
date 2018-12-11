import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-servername',
  templateUrl: './servername.component.html',
  styleUrls: ['./servername.component.css']
})
export class ServernameComponent implements OnInit {

  @Input('srvElement') element : {type: String, name: String, content: String};
  
  constructor() { }

  ngOnInit() {
  }

}
