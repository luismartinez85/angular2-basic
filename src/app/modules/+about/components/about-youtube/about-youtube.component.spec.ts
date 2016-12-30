
import { ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { By }              from '@angular/platform-browser';
import { AboutYoutubeService } from './about-youtube.service';
import { Observable } from 'rxjs';
import { HttpModule, JsonpModule } from '@angular/http';
import { AboutYoutubeModal } from '../about-youtube-modal/about-youtube-modal.component';
import { MaterialModule, MdDialog, MdDialogRef } from '@angular/material';

// Load the implementations that should be tested
import { AboutYoutubeComponent } from './about-youtube.component';

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
        MaterialModule.forRoot(),
        HttpModule,
        JsonpModule,
      ],
      declarations: [
        AboutYoutubeComponent
      ]
    })
    .compileComponents(); // compile template and css

    fixture = TestBed.createComponent(AboutYoutubeComponent);

    component = fixture.componentInstance;

    spyOn(AboutYoutubeService.prototype, 'search').and.returnValue(Observable.of(videos));
    spyOn(MdDialog.prototype, 'open').and.returnValue(true);

    component.ngOnInit();

  });

  it('should have a defined component', () => {
    expect(component).toBeDefined();
  });

  it('should render videos', () => {

    fixture.detectChanges();

    let compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelectorAll('.video-item').length).toEqual(videos.items.length);
  });

  it('should open dialog', () => {

    let dialog = component.openVideo(videos.items[0]);

    fixture.detectChanges();

    expect(dialog).toEqual(true);
  });

});

