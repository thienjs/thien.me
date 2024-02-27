import { faker } from '@faker-js/faker';

import { AccuracyMetrics } from '~/types/types';

export const isAllowedCode = (code: string): boolean => {
  return (
    code.startsWith('Key') ||
    code === 'Backspace' ||
    code === 'Space' ||
    code === 'Minus'
  );
};

export const isMobile = () => {
  const userAgent = navigator.userAgent;

  const mobileUserAgents = [
    'Android',
    'iPhone',
    'iPad',
    'iPod',
    'BlackBerry',
    'Windows Phone',
  ];

  for (let i = 0; i < mobileUserAgents.length; i++) {
    if (userAgent.indexOf(mobileUserAgents[i]) !== -1) {
      return true;
    }
  }
  return false;
};

export const generateWord = (n: number): string => {
  return faker.word.words(n);
};

export const calculateAccuracy = (expectedWord: string, typedWord: string) => {
  let correctChars = 0;
  for (let i = 0; i < typedWord.length; i++) {
    if (typedWord[i] === expectedWord[i]) {
      correctChars++;
    }
  }

  const accuracyMetrics: AccuracyMetrics = {
    correctChars,
    incorrectChars: typedWord.length - correctChars,
    accuracy: (correctChars / typedWord.length) * 100,
  };
  return accuracyMetrics;
};

export const calculateWPM = (
  typedWord: string,
  accuracy: number,
  time: number
) => {
  const minutes = time / 60000;
  const wordsTyped = typedWord.length / 5;
  const grossWPM = wordsTyped / minutes;
  const netWPM = Math.round(grossWPM * (accuracy / 100));

  const results = {
    wpm: netWPM,
    cpm: typedWord.length / minutes,
  };
  return results;
};

export const calculateErrorPercentage = (accuracy: number) => {
  return 100 - accuracy;
};

export const theme = {
  bow: {
    name: 'light',
    background: {
      primary: '#ffffff',
      secondary: '#F6F6F6',
    },
    text: {
      primary: '#000000',
      secondary: '#434343',
      title: '#000000',
      accent: '#525252',
      accent2: '#00627a',
    },
  },
  wob: {
    name: 'dark',
    background: {
      primary: '#000000',
      secondary: '#434343',
    },
    text: {
      primary: '#ffffff',
      secondary: '#F6F6F6',
      title: '#ffffff',
      accent: '#BCBCBC',
      accent2: '#00627a',
    },
  },
  panels: {
    name: 'panels',
    background: {
      primary: '#ffce49',
      secondary: '#1d4b84',
    },
    text: {
      primary: '#ffffff',
      secondary: '#d72638',
      title: '#cf1817',
      accent: '#44acb6',
      accent2: '#cf1817',
    },
  },
  oblivion: {
    name: 'oblivion',
    background: {
      primary: '#63696a',
      secondary: '#464746',
    },
    text: {
      primary: '#ccc6c0',
      secondary: '#E6E6E6',
      title: '#a698c5',
      accent: '#ffac00',
      accent2: '#1a8ab7',
    },
  },
  fundamental: {
    name: 'fundamental',
    background: {
      primary: '#ccc6c0',
      secondary: '#727474',
    },
    text: {
      primary: '#171718',
      secondary: '#171718',
      title: '#7fa580',
      accent: '#5d437e',
      accent2: '#00627a',
    },
  },
  rudy: {
    name: 'rudy',
    background: {
      primary: '#EEEEEE',
      secondary: '#DDDDDD',
    },
    text: {
      primary: '#B4B4B4',
      secondary: '#444444',
      title: '#444444',
      accent: '#E14C94',
      accent2: '#00627a',
    },
  },
  dracula: {
    name: 'dracula',
    background: {
      primary: '#181C18',
      secondary: '#131613',
    },
    text: {
      primary: '#9578D3',
      secondary: '#04AF6A',
      title: '#9578D3',
      accent: '#E14C94',
      accent2: '#00627a',
    },
  },
  hanamiDango: {
    name: 'hanami dango',
    background: {
      primary: '#fdf4e3',
      secondary: '#F3E2BF',
    },
    text: {
      primary: '#E14C94',
      secondary: '#3A3335',
      title: '#E14C94',
      accent: '#587246',
      accent2: '#00627a',
    },
  },
  dots: {
    name: 'dots',
    background: {
      primary: '#E6E6EA',
      secondary: '#AD5D4E',
    },
    text: {
      primary: '#408E7B',
      secondary: '#FAA613',
      title: '#F44708',
      accent: '#A10702',
      accent2: '#688E26',
    },
  },
  bontanical: {
    name: 'botanical',
    background: {
      primary: '#173F35',
      secondary: '#1F4E43',
    },
    text: {
      primary: '#408E7B',
      secondary: '#DBE0D2',
      title: '#DBE0D2',
      accent: '#43b929',
      accent2: '#00627a',
    },
  },
  metropolis: {
    name: 'metropolis',
    background: {
      primary: '#081F2C',
      secondary: '#00627a',
    },
    text: {
      primary: '#ccc6c0',
      secondary: '#fdf4e3',
      title: '081F2C',
      accent: '#F1BE48',
      accent2: '#E03C31',
    },
  },
}
