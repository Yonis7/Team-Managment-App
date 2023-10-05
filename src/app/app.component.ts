import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  newMemberName = '';
  members: string[] = [];

  onInput(member: string) {
    this.newMemberName = member;
    console.log(this.newMemberName);
  }

  // This method is called when the user clicks the "Add Member" button. It adds the new member to the members array by calling the push() method on the array. The push() method adds the new member to the end of the array. The new member is the value of the newMemberName property. 
  addMember() {
    this.members.push(this.newMemberName);
    console.log(this.members);
  }
}
