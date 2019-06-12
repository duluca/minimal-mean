import { ComponentFixture, TestBed, async } from '@angular/core/testing'

import { MaterialModule } from '../material.module'
import { UsersComponent } from './users.component'
import { UsersService } from '../services/users.service'
import { autoSpyObj } from 'angular-unit-test-helper'

describe('UsersComponent', () => {
  let component: UsersComponent
  let fixture: ComponentFixture<UsersComponent>
  let usersServiceMock: jasmine.SpyObj<UsersService>

  beforeEach(async(() => {
    const usersServiceSpy = autoSpyObj(UsersService)
    TestBed.configureTestingModule({
      providers: [{ provide: UsersService, useValue: usersServiceSpy }],
      declarations: [UsersComponent],
      imports: [MaterialModule],
    }).compileComponents()
    usersServiceMock = TestBed.get(UsersService)
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersComponent)
    component = fixture.componentInstance
  })

  it('should be created', () => {
    fixture.detectChanges()
    expect(component).toBeTruthy()
  })
})
