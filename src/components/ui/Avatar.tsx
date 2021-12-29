const Avatar = () => {
  return (
    <div className="w-full flex justify-center items-center space-x-10">
      {/* :AVATAR SMALL */}
      <span
        className="inline-block border-2 border-gray-50 rounded-full overflow-hidden"
        aria-label="avatar"
      >
        <img src="https://github.com/thienjs.png" alt="" className="w-8 h-8" />
      </span>

      {/* :AVATAR MEDIUM */}
      <span
        className="inline-block border-2 border-gray-50 rounded-full overflow-hidden"
        aria-label="avatar"
      >
        <img
          src="https://github.com/thienjs.png"
          alt=""
          className="w-12 h-12"
        />
      </span>

      {/* :AVATAR LARGE */}
      <span
        className="inline-block border-2 border-gray-50 rounded-full overflow-hidden"
        aria-label="avatar"
      >
        <img
          src="https://github.com/thienjs.png"
          alt=""
          className="w-20 h-20"
        />
      </span>
    </div>
  )
}

export default Avatar
