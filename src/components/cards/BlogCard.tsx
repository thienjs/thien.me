const BlogCard = () => {
  return (
    <div className="mb-4 p-0 sm:p-4 md:w-1/3">
      {' '}
      {/* Card container */}
      <div className="group h-full overflow-hidden rounded-lg border-2 border-gray-200 border-opacity-60 shadow-lg">
        {/* :CARD IMAGE */}
        <img
          className="w-full transform object-cover object-center transition duration-500 ease-in-out group-hover:scale-105 md:h-36 lg:h-48"
          src="https://fancytailwind.com/static/6ece2efec568b8df783085f6db194128/17574/city1.webp"
          alt="blog"
        />

        {/* :CARD CATEGORY */}
        <h2 className="title-font inline-block cursor-pointer px-6 pt-4 pb-1 text-xs font-semibold uppercase tracking-widest text-red-400 hover:font-bold">
          My Category
        </h2>

        {/* :CARD BODY */}
        <div className="py-1 px-6">
          {/* ::Card title */}
          <h1 className="title-font mb-3 inline-block cursor-pointer text-xl font-extrabold tracking-wide text-gray-800">
            Fancy Blog Card 1
          </h1>
          {/* ::Card excerpt */}
          <p className="line-clamp-6 mb-3 cursor-pointer overflow-hidden leading-relaxed text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, illum
            cum autem incidunt magni voluptatum alias reiciendis possimus
            doloremque, enim consequuntur quia. Voluptas exercitationem soluta
            debitis labore aliquam molestiae illum?
          </p>
        </div>

        {/* :CARD FOOTER */}
        <div className="flex flex-wrap items-center justify-between px-6 pt-1 pb-4">
          {/* ::Date & reading time */}
          <div className="flex flex-wrap text-sm text-gray-500">
            <span className="mr-1">Oct 30, 2021</span>
            <span className="">&#183; 8 min read</span>
          </div>
          {/* ::Likes & Views */}
          <div className="mt-1">
            {/* Likes */}
            <span className="mr-3 ml-auto inline-flex items-center border-r-2 border-gray-200 py-1 pr-3 text-sm leading-none text-gray-400 md:ml-0 lg:ml-auto">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                />
              </svg>
              1.5K
            </span>
            {/* Views */}
            <span className="inline-flex cursor-pointer items-center text-sm leading-none text-gray-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
              10
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BlogCard
