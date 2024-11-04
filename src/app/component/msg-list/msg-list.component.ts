import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MsgService } from '../../service/msg.service';

@Component({
	selector: 'app-msg-list',
	standalone: true,
	imports: [CommonModule],
	templateUrl: './msg-list.component.html',
	styleUrl: './msg-list.component.css'
})
export class MsgListComponent {
	constructor(public msgs: MsgService) { }

}
