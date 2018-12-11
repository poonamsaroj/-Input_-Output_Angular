import { Component, OnInit, EventEmitter, Output  } from '@angular/core';

@Component({
  selector: 'app-newserver',
  templateUrl: './newserver.component.html',
  styleUrls: ['./newserver.component.css']
})
export class NewserverComponent implements OnInit {
  @Output() serverCreated = new EventEmitter<{serverName:string, serverContent: string}>();
  @Output() blueprintCreated = new EventEmitter<{serverName:string, serverContent: string}>();
  newServerName = '';
  newServerContent = '';

  onAddServer(){
   this.serverCreated.emit({
     serverName: this.newServerName,
     serverContent: this.newServerContent
   })
  }

  onAddBlueprint(){
    this.blueprintCreated.emit({
      serverName: this.newServerName,
      serverContent: this.newServerContent
    })
  }

  constructor() { }

  ngOnInit() {
  }

}
