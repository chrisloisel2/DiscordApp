import { Component } from '@angular/core';
import { ConversationListComponent } from '../conversation-list/conversation-list.component';
import { MsgListComponent } from '../msg-list/msg-list.component';

@Component({
	selector: 'app-home',
	standalone: true,
	imports: [ConversationListComponent, MsgListComponent],
	templateUrl: './home.component.html',
	styleUrl: './home.component.css'
})
export class HomeComponent {

}
