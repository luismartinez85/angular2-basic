import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AboutYoutubeService } from './about-youtube.service';
import { Observable } from 'rxjs';
import { HttpModule, JsonpModule } from '@angular/http';

// Load the implementations that should be tested
import { AboutYoutubeComponent } from './about-youtube.component';
import { SafePipeModule } from '../../../../shared';

let component:  AboutYoutubeComponent;
let fixture:    ComponentFixture<AboutYoutubeComponent>;

describe('Module -> about -> about-youtube -> AboutYoutubeComponent', () => {
   //  provide our implementations or mocks to the dependency injector
  const videos =
    {
      'items': [
        {
          'id': {
            'kind': 'youtube#video',
            'videoId': 'QfCRrl1raVM'
          },
          'snippet': {
            'channelId': 'UCVKdSP47XahRYJpvfA7inmg',
            'title': 'Instalación | Curso Angular Basic #1',
            'description': 'Bienvenidos al curso sobre Angular Basic, donde explicaremos como está construido y cual es su funcionamiento. Hoy veremos los prerequisitos y la ...',
            'thumbnails': {
              'high': {
                'url': 'https://i.ytimg.com/vi/QfCRrl1raVM/hqdefault.jpg',
                'width': 480,
                'height': 360
              }
            }
          }
        },
        {
          'id': {
            'kind': 'youtube#video',
            'videoId': 'tN6x7re_zh0'
          },
          'snippet': {
            'channelId': 'UCVKdSP47XahRYJpvfA7inmg',
            'title': 'Angular Basic | AngularJS 1.5 orientado a componentes',
            'description': 'Bienvenido frontend developer! Hoy os presentamos Angular Basic, un starterkit robusto para vuestras aplicación con AngularJS 1.5 orientadas a componentes!',
            'thumbnails': {
              'high': {
                'url': 'https://i.ytimg.com/vi/tN6x7re_zh0/hqdefault.jpg',
                'width': 480,
                'height': 360
              }
            },
            'channelTitle': 'FrontStack Serenity',
            'liveBroadcastContent': 'none'
          }
        }
      ]
    };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpModule,
        JsonpModule,
        SafePipeModule
      ],
      declarations: [
        AboutYoutubeComponent
      ]
    })
    .compileComponents(); // compile template and css

    fixture = TestBed.createComponent(AboutYoutubeComponent);

    component = fixture.componentInstance;

    spyOn(AboutYoutubeService.prototype, 'search').and.returnValue(Observable.of(videos));

    component.ngOnInit();

  });

  it('should have a defined component', () => {
    expect(component).toBeDefined();
  });

});

