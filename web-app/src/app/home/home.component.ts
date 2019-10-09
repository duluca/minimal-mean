import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-home',
  template: `
    <h3>
      This project is covered in my book.
      To learn more, buy the book at <a href="https://angularforenterprise.com"
        target="_blank">AngularForEnterprise.com</a>.
    </h3>
    <p class=".mat-caption">
      If you used <b>docker-compose up</b>, RESTful API should be at
      <a href="http://localhost:3000" target="_blank">http://localhost:3000</a>.
    </p>
    <p class=".mat-caption">
      Find the Material Icon list at <a href="https://material.io/icons/"
        target="_blank">Material.io/Icons</a>.
    </p>
    <p>
      <button mat-raised-button routerLink="/users">View All Users</button>
    </p>
  `,
})
export class HomeComponent {}
