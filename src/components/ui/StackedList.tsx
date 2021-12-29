
const StackedList = () => {
  
  const users = [
    {
      name: "Eddie DePetbro",
      picture: "https://fancytailwind.com/static/profile10-9e05bd5638c669c34c11cb0462d95aa9.jpg",
      role: "Founder and Creative direction",
      online: true,
      link: "#userProfile1"
    },
    {
      name: "Nadya Kidnam",
      picture: "https://fancytailwind.com/static/profile17-d76f5656816ea770a4118ba11f135c58.jpg",
      role: "designer, illustrator, dreamer and father",
      online: false,
      link: "#userProfile2"
    },
    {
      name: "Joey | Creative Stacks",
      picture: "https://fancytailwind.com/static/profile8-34d5f5980ca5030c155a2ffbb50b5802.jpg",
      role: "I enjoy creating innovative solutions for web and mobile apps",
      online: true,
      link: "#userProfile3"
    },
  ]

  return (
    <div className="mx-auto w-full max-w-5xl bg-white">
      <ul className="flex flex-col">
        {users.map(user => (
          <li key={user.name} className="border-b-2 border-gray-100">
            <div className={`py-5 px-4 flex justify-between border-l-4 border-transparent bg-transparent ${user.online ? "hover:border-green-400 hover:bg-gray-200" : "hover:border-red-500 hover:bg-red-50"}`}>

              {/* :USER DETAILS */}
              <div className="sm:pl-4 pr-8 flex sm:items-center">
                {/* ::User Picture */}
                <img src={user.picture} alt="" className="mr-3 w-8 sm:w-12 h-8 sm:h-12 rounded-full" />
                {/* ::User Infos */}
                <div className="space-y-1">
                  {/* :::name */}
                  <p className="text-base text-gray-700 font-bold tracking-wide">{user.name}</p>
                  {/* :::role */}
                  <p className="text-sm text-gray-500 font-medium">{user.role}</p>
                </div>
              </div>


              {/* :USER STATUS & BUTTON */}
              <div className="pr-4 flex flex-col justify-between items-end">
                {/* ::User Online Status */}
                <div>
                  {user.online ?
                    <div className="relative">
                      <span className="text-xs text-gray-500 font-semibold">Online</span>
                      <span className="absolute top-1 -right-2 w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                    </div>
                    : <span className="text-xs text-red-500 font-semibold">Offline</span>
                  }
                </div>
                {/* ::Details button */}
                <a href={user.link} className="text-sm text-gray-500 font-semibold hover:underline hover:text-gray-700">Details</a>
              </div>

            </div>
          </li>
        ))
        }
      </ul>
    </div>
  )
}

export default StackedList
