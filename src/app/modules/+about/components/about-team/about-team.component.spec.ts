import { TestBed } from '@angular/core/testing';

// Load the implementations that should be tested
import { AboutTeamComponent } from '../about-team/about-team.component';
import { AboutTeamService } from '../about-team/about-team.service';

import { MaterialModule } from '@angular/material';
import { Observable } from 'rxjs';

let component: AboutTeamComponent;
let fixture;

describe('Modules -> about -> about-team -> AboutTeamComponent', () => {
  const users = [
    {
      'name': 'David Chavarri',
      'job': 'Front Architect',
      'image': '/assets/img/team/david-min.jpg',
      'description': 'React Ninja',
      'github': 'https://github.com/DvdChavarri'
    },
    {
      'name': 'Arturo Zarzalejo',
      'job': 'Fantasy Architect',
      'image': '/assets/img/team/arturo-min.jpg',
      'description': 'Sexy Fantasy Everywhere',
      'github': 'https://github.com/Arturozh'
    }
  ];

  class mockTestService {
    search() {
      return Observable.of(users);
    }
  }

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        MaterialModule.forRoot()
      ],
      providers: [ AboutTeamService, {provide: AboutTeamService, useClass: mockTestService} ],
      declarations: [ AboutTeamComponent ]
    })
    .compileComponents(); // compile template and css

    fixture = TestBed.createComponent(AboutTeamComponent);
    component = fixture.componentInstance;
  });

  it('should have a defined component', () => {
    expect(component).toBeDefined();
  });

  it('should render users', () => {
    component.dataUsers = users;
    fixture.detectChanges();

    let compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelectorAll('.team-item-text').length).toEqual(users.length);
  });
});
