

import { CheckCircleIcon, ExclamationCircleIcon, InformationCircleIcon, XCircleIcon } from '@heroicons/react/solid'


const Alert = () => {
  return (
    <div className="flex flex-col space-y-5">
      
      {/* :SUCCESS ALERT */}
      <div className="p-4 max-w-4xl flex rounded-lg border border-green-300 bg-green-100">
        {/* ::Icon */}
        <span className="flex-shrink-0 text-green-500">
          <CheckCircleIcon className="w-6 h-6" />
        </span>
        {/* ::Content */}
        <div className="ml-3 flex flex-col items-start space-y-2 text-sm">
          {/* :::alert title */}
          <h3 className="text-green-800 font-semibold">Well done!</h3>
          {/* :::alert message */}
          <p className="text-green-600 font-medium antialiased">You successfully read this important alert message.</p>
        </div>
      </div>



      {/* :ERROR ALERT */}
      <div className="p-4 max-w-4xl flex rounded-lg border border-red-300 bg-red-100">
        {/* ::Icon */}
        <span className="flex-shrink-0 text-red-500">
          <XCircleIcon className="w-6 h-6" />
        </span>
        {/* ::Content */}
        <div className="ml-3 flex flex-col items-start space-y-2 text-sm">
          {/* :::alert title */}
          <h3 className="text-red-800 font-semibold">Oh snap!</h3>
          {/* :::alert message */}
          <p className="text-red-600 font-medium antialiased">Change a few things up and try submitting again.</p>
        </div>
      </div>



      {/* :INFO ALERT */}
      <div className="p-4 max-w-4xl flex rounded-lg border border-blue-300 bg-blue-100">
        {/* ::Icon */}
        <span className="flex-shrink-0 text-blue-500">
          <InformationCircleIcon className="w-6 h-6" />
        </span>
        {/* ::Content */}
        <div className="ml-3 flex flex-col items-start space-y-2 text-sm">
          {/* :::alert title */}
          <h3 className="text-blue-800 font-semibold">Head up!</h3>
          {/* :::alert message */}
          <p className="text-blue-600 font-medium antialiased">This alert needs your attention, but it is not super important.</p>
        </div>
      </div>



      {/* :WARNING ALERT */}
      <div className="p-4 max-w-4xl flex rounded-lg border border-yellow-300 bg-yellow-100">
        {/* ::Icon */}
        <span className="flex-shrink-0 text-yellow-500">
          <ExclamationCircleIcon className="w-6 h-6" />
        </span>
        {/* ::Content */}
        <div className="ml-3 flex flex-col items-start space-y-2 text-sm">
          {/* :::alert title */}
          <h3 className="text-yellow-800 font-semibold">Warning!</h3>
          {/* :::alert message */}
          <p className="text-yellow-600 font-medium antialiased">Better check this by yourself, it is not looking too good.</p>
        </div>
      </div>


    </div>
  )
}

export default Alert
