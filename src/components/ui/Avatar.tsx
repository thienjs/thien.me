const Avatar = () => {
  return (
    <div className="flex w-full items-center justify-center space-x-10">
      {/* :AVATAR SMALL */}
      <span
        className="inline-block overflow-hidden rounded-full border-2 border-gray-50"
        aria-label="avatar"
      >
        <img src="https://github.com/thienjs.png" alt="" className="h-8 w-8" />
      </span>

      {/* :AVATAR MEDIUM */}
      <span
        className="inline-block overflow-hidden rounded-full border-2 border-gray-50"
        aria-label="avatar"
      >
        <img
          src="https://github.com/thienjs.png"
          alt=""
          className="h-12 w-12"
        />
      </span>

      {/* :AVATAR LARGE */}
      <span
        className="inline-block overflow-hidden rounded-full border-2 border-gray-50"
        aria-label="avatar"
      >
        <img
          src="https://github.com/thienjs.png"
          alt=""
          className="h-20 w-20"
        />
      </span>
    </div>
  )
}

export default Avatar
