import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-home',
  template: `
    <p>
      Find the Material Icon list <a href="https://material.io/icons/"
        target="_blank">here</a>.
    </p>
    <p>
      <button mat-raised-button routerLink="/users">View All Users</button>
    </p>
  `,
})
export class HomeComponent {}
