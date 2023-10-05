import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  newMemberName = '';
  members: string[] = [];
  errorMessage = '';
  numberOfTeams: number | '' = '';
  teams: string[][] = [];

  onInput(member: string) {
    this.newMemberName = member;
    // console.log(this.newMemberName);
  }

  onNumberOfTeamsInput(value: string) {
    this.numberOfTeams = Number(value);
    // console.log(this.numberOfTeams);
  }

  // This method is called when the user clicks the "Add Member" button. It adds the new member to the members array by calling the push() method on the array. The push() method adds the new member to the end of the array. The new member is the value of the newMemberName property.
  addMember() {
    if (!this.newMemberName) {
      this.errorMessage = 'Please enter a name.';
      return;
    }

    this.errorMessage = '';
    this.members.push(this.newMemberName);
    this.newMemberName = '';
    // console.log(this.members);
  }

  generateTeams() {
    if (!this.numberOfTeams || this.numberOfTeams <= 0) {
      this.errorMessage = 'Please enter a number of teams.';
      return;
    }

    const allMembers = [...this.members];

    while (allMembers.length) {
      for (let i = 0; i < this.numberOfTeams; i++) {
        const randomIndex = Math.floor(Math.random() * allMembers.length);
        const member = allMembers.splice(randomIndex, 1)[0];

        if (!member) {
          break;
        }

        if (this.teams[i]) {
          this.teams[i].push(member);
        } else {
          // if there is no team yet, create one
          this.teams[i] = [member];
        }
      }
    }

    console.log(this.teams);
  }
}
