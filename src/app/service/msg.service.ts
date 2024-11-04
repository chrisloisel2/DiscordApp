import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class MsgService {

	messages: any[] = [];

	constructor(public http: HttpClient) { }

	selectConversation(conversationId: any) {
		console.log('selectConversation', conversationId);
		this.http.get('http://localhost:3000/msg/' + conversationId).subscribe((data: any) => {
			this.messages = data;
		});
	}
}
