import { Component } from '@angular/core'

@Component({
  selector: 'app-root',
  styles: [
    `
      .app-container {
        display: flex;
        flex-direction: column;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
      }
      .app-toolbar {
        position: fixed;
        z-index: 2;
      }
      .app-container-content {
        flex: 1 0 auto;
        margin: 72px 16px 0px 16px;
      }
    `,
  ],
  template: `
    <div class="app-container">
      <mat-toolbar color="primary" fxLayoutGap="8px" class="app-toolbar">
        <a mat-button routerLink="/home">
          <h1>Minimal MEAN Web App</h1>
        </a>
        <span class="flex-spacer"></span>
        <a mat-button href="https://github.com/duluca/minimal-mean" target="_blank">
          <mat-icon>code</mat-icon>Fork on GitHub
        </a>
      </mat-toolbar>
      <div class="app-container-content">
        <router-outlet></router-outlet>
      </div>
    </div>
  `,
})
export class AppComponent {}
