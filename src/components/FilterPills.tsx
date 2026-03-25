import { useState } from 'react';

interface FilterOption {
  id: string;
  label: string;
  count: number;
}

const filters: FilterOption[] = [
  { id: 'all', label: 'All Categories', count: 14 },
  { id: 'placement', label: 'Placement', count: 12 },
  { id: 'interview', label: 'Interview', count: 5 },
  { id: 'live', label: 'Live Courses', count: 8 },
  { id: 'test', label: 'Test Series', count: 6 },
  { id: 'recorded', label: 'Recorded Courses', count: 10 },
];

export default function FilterPills() {
  const [activeFilter, setActiveFilter] = useState('all');

  return (
    <div className="bg-white border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex gap-3 overflow-x-auto scrollbar-hide pb-2">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`
                flex-shrink-0 px-5 py-2 rounded-full font-medium text-sm transition-all
                ${
                  activeFilter === filter.id
                    ? 'bg-[#2A52BE] text-white shadow-md'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }
              `}
            >
              {filter.label} ({filter.count})
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
