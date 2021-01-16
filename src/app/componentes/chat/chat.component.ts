import { Component, OnInit } from '@angular/core';
import { NavParams, ModalController } from '@ionic/angular';
import { message } from '../../models/message';
import { ChatsService} from '../../servicios/chats.service';


@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
})
export class ChatComponent implements OnInit {
public chat: any;

public mensajes = [];
public msg: string;

public room: any;
  constructor(
      private navparams: NavParams,
      private modal: ModalController,
      private chatsService: ChatsService) { }

  ngOnInit() {

    this.chatsService.getChatRoom(this.chat.id).subscribe(room =>{
console.log(room);
this.room= room;
    })
    this.chat = this.navparams.get('chat')
  }

  closeChat(){
    this.modal.dismiss()
  }
  sendMessage(){

    const mensaje: message = {
      content : this.msg,
      type : 'text',
      date : new Date()
    }
    this.chatsService.sendMsgToFirebase(mensaje, this.chat.id);
    this.msg = '';
  }

}
