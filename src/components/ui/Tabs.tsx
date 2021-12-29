import { useState } from 'react'
import {
  ArchiveIcon,
  ChartBarIcon,
  CloudUploadIcon,
  LightBulbIcon,
  ViewGridIcon,
} from '@heroicons/react/solid'

const Tabs = () => {
  const tabs = [
    { name: 'Archives', icon: ArchiveIcon },
    { name: 'Uploads', icon: CloudUploadIcon },
    { name: 'Analytics', icon: ChartBarIcon },
    { name: 'Services', icon: ViewGridIcon },
    { name: 'Informations', icon: LightBulbIcon },
  ]

  const [currentTab, setCurrentTab] = useState('Services')

  return (
    <div className="mx-auto w-full max-w-5xl sm:border-b-2 border-gray-200">
      {/* :SMALL DEVICES */}
      <div className="mx-auto max-w-md sm:hidden rounded-lg border border-gray-300 overflow-hidden">
        <label htmlFor="current-tab" className="sr-only">
          Select a tab
        </label>
        <select
          name="current-tab"
          id="current-tab"
          defaultValue={tabs.find((tab) => tab.name === currentTab).name}
          className="form-select w-full sm:w-auto block border-none text-sm text-gray-500 font-semibold cursor-pointer focus:ring-0"
        >
          {tabs.map((tab) => (
            <option
              key={tab.name}
              value={tab.name}
              onClick={() => setCurrentTab(tab.name)}
            >
              {tab.name}
            </option>
          ))}
        </select>
      </div>

      {/* :LARGE DEVICES */}
      <div className="-mb-px hidden sm:block">
        <nav aria-label="Tabs">
          <ul className="flex flex-wrap justify-start space-x-5">
            {tabs.map((tab) => {
              const Icon = tab.icon
              return (
                <li
                  key={tab.name}
                  className={`flex border-b-2 text-base ${
                    tab.name === currentTab
                      ? 'border-blue-500 text-blue-500'
                      : 'border-transparent text-gray-400 hover:text-gray-600 hover:border-gray-400'
                  }`}
                >
                  <button
                    type="button"
                    className="px-2 pb-5 inline-flex items-center font-semibold"
                    onClick={() => setCurrentTab(tab.name)}
                  >
                    <Icon className="mr-1.5 w-5 h-5" />
                    {tab.name}
                  </button>
                </li>
              )
            })}
          </ul>
        </nav>
      </div>
    </div>
  )
}

export default Tabs
