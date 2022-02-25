const StackedList = () => {
  const users = [
    {
      name: 'Eddie DePetbro',
      picture:
        'https://fancytailwind.com/static/profile10-9e05bd5638c669c34c11cb0462d95aa9.jpg',
      role: 'Founder and Creative direction',
      online: true,
      link: '#userProfile1',
    },
    {
      name: 'Nadya Kidnam',
      picture:
        'https://fancytailwind.com/static/profile17-d76f5656816ea770a4118ba11f135c58.jpg',
      role: 'designer, illustrator, dreamer and father',
      online: false,
      link: '#userProfile2',
    },
    {
      name: 'Joey | Creative Stacks',
      picture:
        'https://fancytailwind.com/static/profile8-34d5f5980ca5030c155a2ffbb50b5802.jpg',
      role: 'I enjoy creating innovative solutions for web and mobile apps',
      online: true,
      link: '#userProfile3',
    },
  ]

  return (
    <div className="mx-auto w-full max-w-5xl bg-white">
      <ul className="flex flex-col">
        {users.map((user) => (
          <li key={user.name} className="border-b-2 border-gray-100">
            <div
              className={`flex justify-between border-l-4 border-transparent bg-transparent py-5 px-4 ${
                user.online
                  ? 'hover:border-green-400 hover:bg-gray-200'
                  : 'hover:border-red-500 hover:bg-red-50'
              }`}
            >
              {/* :USER DETAILS */}
              <div className="flex pr-8 sm:items-center sm:pl-4">
                {/* ::User Picture */}
                <img
                  src={user.picture}
                  alt=""
                  className="mr-3 h-8 w-8 rounded-full sm:h-12 sm:w-12"
                />
                {/* ::User Infos */}
                <div className="space-y-1">
                  {/* :::name */}
                  <p className="text-base font-bold tracking-wide text-gray-700">
                    {user.name}
                  </p>
                  {/* :::role */}
                  <p className="text-sm font-medium text-gray-500">
                    {user.role}
                  </p>
                </div>
              </div>

              {/* :USER STATUS & BUTTON */}
              <div className="flex flex-col items-end justify-between pr-4">
                {/* ::User Online Status */}
                <div>
                  {user.online ? (
                    <div className="relative">
                      <span className="text-xs font-semibold text-gray-500">
                        Online
                      </span>
                      <span className="absolute top-1 -right-2 h-2 w-2 animate-pulse rounded-full bg-green-400" />
                    </div>
                  ) : (
                    <span className="text-xs font-semibold text-red-500">
                      Offline
                    </span>
                  )}
                </div>
                {/* ::Details button */}
                <a
                  href={user.link}
                  className="text-sm font-semibold text-gray-500 hover:text-gray-700 hover:underline"
                >
                  Details
                </a>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default StackedList
