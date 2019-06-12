import { TestBed, inject } from '@angular/core/testing'

import { HttpClientTestingModule } from '@angular/common/http/testing'
import { UsersService } from './users.service'

describe('UsersService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [UsersService],
    })
  })

  it(
    'should be created',
    inject([UsersService], (service: UsersService) => {
      expect(service).toBeTruthy()
    })
  )
})
