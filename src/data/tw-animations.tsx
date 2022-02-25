import { IAnimations } from '~/types/types'

const animations: IAnimations[] = [
  {
    title: 'Underline Left Right',
    editLink:
      'https://github.com/thienjs/thien-me/blob/main/data/snippets.tsx#L3',
    source: (
      <div className="relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-left after:scale-x-100 after:bg-gray-200 after:transition-transform after:duration-300 after:ease-in-out hover:after:origin-bottom-right hover:after:scale-x-0">
        Hover over me
      </div>
    ),
  },
  {
    title: 'Pulse',
    editLink:
      'https://github.com/thienjs/thien-me/blob/main/data/snippets.tsx#L12',
    source: (
      <div className="absolute flex h-8 w-8">
        <span className="absolute -top-4 -left-4 h-8 w-8 animate-ping rounded-full bg-gray-200 opacity-75"></span>
        <span className="relative -top-4 -left-4 h-8 w-8 rounded-full bg-gray-200"></span>
      </div>
    ),
  },
  {
    title: 'Keyboard Button',
    editLink:
      'https://github.com/thienjs/thien-me/blob/main/data/snippets.tsx#L22',
    source: (
      <div className="rounded-lg border-b-4 border-b-gray-400 bg-gray-200 px-6 py-3 text-black transition-all duration-100 ease-in-out hover:border-b-0">
        Hover over me
      </div>
    ),
  },
  {
    title: 'Underlay Marker',
    editLink:
      'https://github.com/thienjs/thien-me/blob/main/data/snippets.tsx#L31',
    source: (
      <div className="relative before:absolute before:bottom-0 before:left-0 before:h-full before:w-full before:origin-bottom before:scale-y-[0.35] before:bg-sky-600 before:transition-transform before:duration-500 before:ease-in-out hover:before:scale-y-100">
        <span className="relative">Hover over me</span>
      </div>
    ),
  },
  {
    title: 'Underlay Left',
    editLink:
      'https://github.com/thienjs/thien-me/blob/main/data/snippets.tsx#L40',
    source: (
      <div className="group relative overflow-hidden rounded-lg bg-gray-200 px-6 py-3 [transform:translateZ(0)] before:absolute before:bottom-0 before:left-0 before:h-full before:w-full before:-translate-x-full before:bg-sky-600 before:transition before:duration-500 before:ease-in-out hover:before:translate-x-0">
        <span className="relative z-0 text-black transition duration-500 ease-in-out group-hover:text-gray-200">
          Hover over me
        </span>
      </div>
    ),
  },
  {
    title: 'Spinner',
    editLink:
      'https://github.com/thienjs/thien-me/blob/main/data/snippets.tsx#L51',
    source: (
      <svg
        className="h-8 w-8 animate-spin text-white"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
      >
        <circle
          className="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="4"
        ></circle>
        <path
          className="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
        ></path>
      </svg>
    ),
  },
  {
    title: 'Hover & Active Scale Button',
    editLink:
      'https://github.com/thienjs/thien-me/blob/main/data/snippets.tsx#L70',
    source: (
      <div className="rounded-lg bg-gray-200 px-6 py-3 text-black transition-transform duration-200 ease-in-out hover:scale-110 active:scale-90">
        Hover &amp; hold me
      </div>
    ),
  },
  {
    title: 'Swing',
    editLink:
      'https://github.com/thienjs/thien-me/blob/main/data/snippets.tsx#L79',
    source: <div className="hover:animate-swing">Hover over me</div>,
    animation: `keyframes: {
      swing: {
        "15%": { transform: "translateX(5px)" },
        "30%": { transform: "translateX(-5px)" },
        "50%": { transform: "translateX(3px)" },
        "80%": { transform: "translateX(2px)" },
        "100%": { transform: "translateX(0)" },
      },
    },
    animation: {
      swing: "swing 1s ease 1",
    },`,
  },
  {
    title: 'Underline Bottom Top',
    editLink:
      'https://github.com/thienjs/thien-me/blob/main/data/snippets.tsx#L96',
    source: (
      <div className="relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:translate-y-1 after:bg-gray-200 after:opacity-0 after:transition after:duration-200 after:ease-in-out hover:after:translate-y-0 hover:after:opacity-100">
        Hover over me
      </div>
    ),
  },
  {
    title: 'Underlay Left Right',
    editLink:
      'https://github.com/thienjs/thien-me/blob/main/data/snippets.tsx#L105',
    source: (
      <div className="group relative overflow-hidden rounded-lg bg-gray-200 px-6 py-3 [transform:translateZ(0)] before:absolute before:bottom-0 before:left-0 before:h-full before:w-full before:origin-[100%_100%] before:scale-x-0 before:bg-sky-600 before:transition before:duration-500 before:ease-in-out hover:before:origin-[0_0] hover:before:scale-x-100">
        <span className="relative z-0 text-black transition duration-500 ease-in-out group-hover:text-gray-200">
          Hover over me
        </span>
      </div>
    ),
  },
  {
    title: 'Text Transform & Color',
    editLink:
      'https://github.com/thienjs/thien-me/blob/main/data/snippets.tsx#L116',
    source: (
      <div className="translate-x-0 text-gray-200 transition duration-200 ease-in-out hover:translate-x-1 hover:text-sky-600">
        Hover over me
      </div>
    ),
  },
  {
    title: 'Shimmer',
    editLink:
      'https://github.com/thienjs/thien-me/blob/main/data/snippets.tsx#L125',
    source: (
      <div className="animate-shimmer h-12 w-40 rounded-lg bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-[length:400%_100%]"></div>
    ),
    animation: `keyframes: {
      shimmer: {
        from: { backgroundPosition: "200% 0" },
        to: { backgroundPosition: "-200% 0" },
      },
    },
    animation: {
      shimmer: "shimmer 8s ease-in-out infinite",
    },`,
  },
  {
    title: 'Underlay Expanding Circle',
    editLink:
      'https://github.com/thienjs/thien-me/blob/main/data/snippets.tsx#L141',
    source: (
      <div className="group relative overflow-hidden rounded-lg bg-gray-200 px-6 py-3 [transform:translateZ(0)] before:absolute before:top-1/2 before:left-1/2 before:h-8 before:w-8 before:-translate-y-1/2 before:-translate-x-1/2 before:scale-[0] before:rounded-full before:bg-sky-600 before:opacity-0 before:transition before:duration-500 before:ease-in-out hover:before:scale-[6] hover:before:opacity-100">
        <span className="relative z-0 text-black transition duration-500 ease-in-out group-hover:text-gray-200">
          Hover over me
        </span>
      </div>
    ),
  },
  {
    title: 'Three Dots Loader',
    editLink:
      'https://github.com/thienjs/thien-me/blob/main/data/snippets.tsx#L152',
    source: (
      <div>
        <span className="animate-flash ml-2 inline-block h-2 w-2 rounded-full bg-gray-200"></span>
        <span className="animate-flash ml-2 inline-block h-2 w-2 rounded-full bg-gray-200 [animation-delay:0.2s]"></span>
        <span className="animate-flash ml-2 inline-block h-2 w-2 rounded-full bg-gray-200 [animation-delay:0.4s]"></span>
      </div>
    ),
    animation: `keyframes: {
      flash: {
        "0%": { opacity: "0.2" },
        "20%": { opacity: "1" },
        "100%": { opacity: "0.2" },
      },
    },
    animation: {
      flash: "flash 1.4s infinite linear",
    },`,
  },
  {
    title: 'Hover Scale Button',
    editLink:
      'https://github.com/thienjs/thien-me/blob/main/data/snippets.tsx#L173',
    source: (
      <div className="rounded-lg bg-gray-200 px-6 py-3 text-black transition-transform duration-200 ease-in-out hover:scale-110">
        Hover over me
      </div>
    ),
  },
  {
    title: 'Active Underline Left Right',
    editLink:
      'https://github.com/thienjs/thien-me/blob/main/data/snippets.tsx#L182',
    source: (
      <div className="relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-gray-200 after:transition-transform after:duration-300 after:ease-in-out hover:after:origin-bottom-left hover:after:scale-x-100">
        Hover over me
      </div>
    ),
  },
  {
    title: 'Flick Up',
    editLink:
      'https://github.com/thienjs/thien-me/blob/main/data/snippets.tsx#L191',
    source: (
      <div className="group relative overflow-hidden">
        <span className="invisible">Hover over me</span>
        <span className="absolute top-0 left-0 transition-transform duration-500 ease-in-out hover:duration-300 group-hover:-translate-y-full">
          Hover over me
        </span>
        <span className="absolute top-0 left-0 translate-y-full transition-transform duration-500 ease-in-out hover:duration-300 group-hover:translate-y-0">
          Hover over me
        </span>
      </div>
    ),
  },
  {
    title: 'Gradient Tilt',
    editLink:
      'https://github.com/thienjs/thien-me/blob/main/data/snippets.tsx#L206',
    source: (
      <div className="group relative">
        <div className="animate-tilt absolute -inset-0.5 rounded-lg bg-gradient-to-r from-pink-600 to-purple-600 opacity-75 blur transition duration-1000 group-hover:opacity-100 group-hover:duration-200"></div>
        <div className="relative rounded-lg bg-gray-200 px-6 py-3 text-black">
          Hover over me
        </div>
      </div>
    ),
    animation: `keyframes: {
      tilt: {
        "0%, 50%, 100%": {
          transform: "rotate(0deg)",
        },
        "25%": {
          transform: "rotate(0.5deg)",
        },
        "75%": {
          transform: "rotate(-0.5deg)",
        },
    },
    animation: {
      tilt: "tilt 10s infinite linear",
    },`,
  },
]

export default animations
