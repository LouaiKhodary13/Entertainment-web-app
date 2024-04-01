import logo from '../assets/logo.svg';
import gridIcon from '../assets/grid-icon.svg';
const Sidebar = () => {
  return (
    <>
      <div className='fixed flex  items-start  justify-start h-[960px] bg-[#161d2f]  top-10 left-5  rounded-xl'>
        <div className='flex items-start justify-start p-10 sm:flex-col'>
          <div className='mb-4'>
            <a className='flex-none' href='#'>
              <img src={logo} alt={logo} />
            </a>
          </div>

          <div className='hs-tooltip inline-block [--placement:right] '>
            <button
              type='button'
              className='hs-tooltip-toggle w-[2.375rem] h-[2.375rem] inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-gray-500 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600'
            >
              <img
                src={gridIcon}
                alt={gridIcon}
                className='flex-shrink-0 size-4'
              />
            </button>
          </div>

          <div className='hs-tooltip inline-block [--placement:right]'>
            <button
              type='button'
              className='hs-tooltip-toggle w-[2.375rem] h-[2.375rem] inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-gray-500 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600'
            >
              <svg
                className='flex-shrink-0 size-4'
                xmlns='http://www.w3.org/2000/svg'
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                stroke-width='2'
                stroke-linecap='round'
                stroke-linejoin='round'
              >
                <path d='M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2' />
                <circle cx='9' cy='7' r='4' />
                <path d='M22 21v-2a4 4 0 0 0-3-3.87' />
                <path d='M16 3.13a4 4 0 0 1 0 7.75' />
              </svg>
            </button>
          </div>

          <div className='hs-tooltip inline-block [--placement:right]'>
            <button
              type='button'
              className='hs-tooltip-toggle w-[2.375rem] h-[2.375rem] inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-gray-500 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600'
            >
              <svg
                className='flex-shrink-0 size-4'
                xmlns='http://www.w3.org/2000/svg'
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                stroke-width='2'
                stroke-linecap='round'
                stroke-linejoin='round'
              >
                <path d='M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9'></path>
                <path d='M10.3 21a1.94 1.94 0 0 0 3.4 0'></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
