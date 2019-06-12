import { Component } from '@angular/core'

@Component({
  selector: 'app-root',
  template: `
    <mat-toolbar color="primary">
      <a mat-button routerLink="/home">
        <h1>Minimal MEAN Web App</h1>
      </a>
      <span class="flex-spacer"></span>
      <a mat-button href="https://github.com/excellalabs/minimal-mean" target="_blank">
        <mat-icon>code</mat-icon>Get the Source Code
      </a>
    </mat-toolbar>
    <router-outlet></router-outlet>
  `,
})
export class AppComponent {}
