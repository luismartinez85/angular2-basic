/*import { async, inject, TestBed } from '@angular/core/testing';
import { BaseRequestOptions, Http, HttpModule, Response, ResponseType, ResponseOptions, JsonpModule } from '@angular/http';
import { MockBackend } from '@angular/http/testing';

import { AboutYoutubeService } from './about-youtube.service';

let videosJSONMock ={
    'items': [
      {
        'kind': 'youtube#searchResult',
        'etag': '\'gMxXHe-zinKdE9lTnzKu8vjcmDI/U74I_GsqUm5s0eWJq-x54E2zZyM\'',
        'id': {
          'kind': 'youtube#video',
          'videoId': 'QfCRrl1raVM'
        },
        'snippet': {
          'publishedAt': '2016-11-20T10:15:56.000Z',
          'channelId': 'UCVKdSP47XahRYJpvfA7inmg',
          'title': 'Instalación | Curso Angular Basic #1',
          'description': 'Bienvenidos al curso sobre Angular Basic, donde explicaremos como está construido y cual es su funcionamiento. Hoy veremos los prerequisitos y la ...',
          'thumbnails': {
            'default': {
              'url': 'https://i.ytimg.com/vi/QfCRrl1raVM/default.jpg',
              'width': 120,
              'height': 90
            },
            'medium': {
              'url': 'https://i.ytimg.com/vi/QfCRrl1raVM/mqdefault.jpg',
              'width': 320,
              'height': 180
            },
            'high': {
              'url': 'https://i.ytimg.com/vi/QfCRrl1raVM/hqdefault.jpg',
              'width': 480,
              'height': 360
            }
          },
          'channelTitle': 'FrontStack Serenity',
          'liveBroadcastContent': 'none'
        }
      },
      {
        'kind': 'youtube#searchResult',
        'etag': '\'gMxXHe-zinKdE9lTnzKu8vjcmDI/gnF7NZeX2dpnGUF36ejnL5xdkEQ\'',
        'id': {
          'kind': 'youtube#video',
          'videoId': 'tN6x7re_zh0'
        },
        'snippet': {
          'publishedAt': '2016-09-08T16:44:42.000Z',
          'channelId': 'UCVKdSP47XahRYJpvfA7inmg',
          'title': 'Angular Basic | AngularJS 1.5 orientado a componentes',
          'description': 'Bienvenido frontend developer! Hoy os presentamos Angular Basic, un starterkit robusto para vuestras aplicación con AngularJS 1.5 orientadas a componentes!',
          'thumbnails': {
            'default': {
              'url': 'https://i.ytimg.com/vi/tN6x7re_zh0/default.jpg',
              'width': 120,
              'height': 90
            },
            'medium': {
              'url': 'https://i.ytimg.com/vi/tN6x7re_zh0/mqdefault.jpg',
              'width': 320,
              'height': 180
            },
            'high': {
              'url': 'https://i.ytimg.com/vi/tN6x7re_zh0/hqdefault.jpg',
              'width': 480,
              'height': 360
            }
          },
          'channelTitle': 'FrontStack Serenity',
          'liveBroadcastContent': 'none'
        }
      },
      {
        'kind': 'youtube#searchResult',
        'etag': '\'gMxXHe-zinKdE9lTnzKu8vjcmDI/O95MMLQ3gQVR1MFcCtTf54YHp38\'',
        'id': {
          'kind': 'youtube#channel',
          'channelId': 'UCVKdSP47XahRYJpvfA7inmg'
        },
        'snippet': {
          'publishedAt': '2016-08-17T09:26:58.000Z',
          'channelId': 'UCVKdSP47XahRYJpvfA7inmg',
          'title': 'FrontStack Serenity',
          'description': 'Technical revolution in the Frontend More Quality, More Productivity, More Scope.',
          'thumbnails': {
            'default': {
              'url': 'https://yt3.ggpht.com/-l9UV1FMana8/AAAAAAAAAAI/AAAAAAAAAAA/HcMEnIgbljc/s88-c-k-no-mo-rj-c0xffffff/photo.jpg'
            },
            'medium': {
              'url': 'https://yt3.ggpht.com/-l9UV1FMana8/AAAAAAAAAAI/AAAAAAAAAAA/HcMEnIgbljc/s240-c-k-no-mo-rj-c0xffffff/photo.jpg'
            },
            'high': {
              'url': 'https://yt3.ggpht.com/-l9UV1FMana8/AAAAAAAAAAI/AAAAAAAAAAA/HcMEnIgbljc/s240-c-k-no-mo-rj-c0xffffff/photo.jpg'
            }
          },
          'channelTitle': 'FrontStack Serenity',
          'liveBroadcastContent': 'none'
        }
      }
    ]
  };

describe('Modules -> about -> about-youtube -> AboutYoutubeService', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        AboutYoutubeService,
        HttpModule,
        JsonpModule,
        MockBackend,
        BaseRequestOptions,
        {
          provide: Http,
          useFactory: (mockBackend, options) => new Http(mockBackend, options),
          deps: [MockBackend, BaseRequestOptions]
        }
      ],
      imports: [
        HttpModule
      ]
    });
  });

  it('should be defined', inject(
    [AboutYoutubeService, MockBackend], (service, mockBackend) => {
      expect(service).toBeDefined();
    }
    ));

  it('should search and return videos mock', inject(
    [AboutYoutubeService, MockBackend], (service, mockBackend) => {

      mockBackend.connections.subscribe(connection => {
        connection.mockRespond(new Response(new ResponseOptions({
          body: videosJSONMock
        }
        )));
      });

      const result = service.search();

      result.subscribe(
        res => {
          expect(res.users[0].name).toEqual(videosJSONMock);
        }
      );
    }));
});
*/
