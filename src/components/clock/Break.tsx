
interface breakProps {
  increment(): void;
  decrement(): void;
  breakCount: number;
}

function Break({ increment, decrement, breakCount }: breakProps) {
  let count: string =
    breakCount < 10 ? '0' + breakCount.toString() : breakCount.toString();

  return (
    <div className='BreakTimer p-2 card hover:shadow-xl md:p-7 flex flex-col justify-center'>
      <h3 className='text-2xl uppercase flex justify-center' id='break-label'>
        Break:
      </h3>
      <div className='BreakButtons flex flex-row justify-center'>
        <button
          className='decrementBreak focus:outline-none | transform hover:translate-y-1 hover:bg-opacity-50 | transition ease-out duration-300'
          id='break-decrement'
          onClick={decrement}
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-6 w-6'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M19 9l-7 7-7-7'
            />
          </svg>
        </button>
        <h3
          className='BreakCount text-primary text-2xl uppercase mx-7'
          id='break-length'
        >
          {count}
        </h3>

        <button
          className='incrementBreak focus:outline-none transform hover:-translate-y-1 hover:bg-opacity-50 | transition ease-out duration-300'
          id='break-increment'
          onClick={increment}
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-6 w-6'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M5 15l7-7 7 7'
            />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default Break;