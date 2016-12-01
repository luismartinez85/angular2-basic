import { Feature } from './feature';

export let FEATURES: Feature[] = [
  { title: 'Mobile First',
    description: 'Designed for mobile phones first.',
    code: 'div <span> width:50%;</span> {<span>@media screen and (min-width: 480px){<span>width: 100%;</span>}</span>}',
    image: '',
    icon: 'phone_iphone'
  },
  { title: 'Unit testing',
    description: 'Tools stack to unit test your code.',
    code: '',
    image: '',
    icon: 'check_box'
  },
  { title: 'Build',
    description: 'Build process ready to go up to production.',
    code: '',
    image: '',
    icon: 'directions_bike'
  },
  { title: 'Scalable',
    description: 'Solid and scalable scaffolding.',
    code: '',
    image: '',
    icon: 'widgets'
  },
  { title: 'Best practices',
    description: 'Following the best practices recommended.',
    code: '',
    image: '',
    icon: 'thumb_up'
  },
  { title: 'PRPL ready',
    description: 'PRPL is a pattern for structuring and serving Progressive Web Apps (PWAs), with an emphasis on the performance of app delivery and launch.',
    code: '',
    image: '',
    icon: 'grain'
  },
  { title: 'E2E',
    description: 'Reprehenderit laboris nisi exercitation eu et eiusmod.',
    code: '',
    image: '',
    icon: 'touch_app'
  },
  { title: 'Api docs',
    description: 'Create your api documentation easily.',
    code: '',
    image: '',
    icon: 'description'
  },
  { title: 'Linting',
    description: 'Quality of code.',
    code: '',
    image: '',
    icon: 'highlight'
  }
];
