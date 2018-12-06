import { Component } from '@angular/core';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us-page.component.html'
})
export class ContactUsComponent {
  checked: boolean;
  message: string = "write a message";

  contactInfo = [
    {
      name: 'skype',
      link: ''
    },
    {
      name: 'phone number',
      link: ''
    },
    {
      name: 'email',
      link: ''
    },
  ];

  sendMessage(): void {
    
  }
}
