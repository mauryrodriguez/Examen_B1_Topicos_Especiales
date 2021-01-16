import {Component, OnInit} from '@angular/core';
import { AuthService } from '../servicios/auth.service';
import { ChatsService} from '../servicios/chats.service';

interface chat {
  description: string
  name: string
  id: string
  img: string
}

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  public chatRooms: any = [];

  constructor(public authservice: AuthService, public chatservice: ChatsService) {}
  Onlogout(){
    this.authservice.logout();
  }

  ngOnInit(){
    this.chatservice.getChatRooms().subscribe(chats => {
      chats.map( chat => {
        const  data: chat = chat.payload.doc.data() as chat;
        data.id = chat.payload.doc.id;
        console.log(data);
      })
    })
  }
}

