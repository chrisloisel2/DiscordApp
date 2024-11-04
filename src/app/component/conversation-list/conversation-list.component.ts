import { Component } from '@angular/core';
import { ApiService } from '../../service/api.service';
import { CommonModule } from '@angular/common';
import { MsgService } from '../../service/msg.service';

@Component({
	selector: 'app-conversation-list',
	standalone: true,
	imports: [CommonModule],
	templateUrl: './conversation-list.component.html',
	styleUrl: './conversation-list.component.css'
})
export class ConversationListComponent {
	constructor(public api: ApiService, public msgs: MsgService) { }
}
