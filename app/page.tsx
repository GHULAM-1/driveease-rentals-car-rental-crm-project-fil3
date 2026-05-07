export default function HomePage() {
  const actions = [
    {
      title: 'Develop Fleet Management Module',
      description: 'Build a module to create and manage profiles for each car.',
      category: 'feature',
      priority: 'HIGH',
      acceptance: [
        'User can add, update, and delete car profiles.',
        'Each car shows status as available, rented, or in service.',
        'Service history logs are viewable and editable for each car.',
      ],
    },
    {
      title: 'Create Booking System with Availability Calendar',
      description: 'Implement a booking system allowing staff to check availability.',
      category: 'feature',
      priority: 'HIGH',
      acceptance: [
        'Users can search for available cars by date range.',
        'System prevents double-bookings.',
        'Bookings can be created, updated, and cancelled.',
      ],
    },
    // More action points...
  ];

  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-4">
      <header className="mb-12 text-center">
        <h1 className="text-4xl font-bold">Car Rental CRM Project</h1>
        <p className="text-xl text-gray-500">DriveEase Rentals</p>
      </header>
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {actions.map((action, index) => (
          <div key={index} className="max-w-sm p-6 bg-white rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-2">{action.title}</h2>
            <p className="text-gray-700 mb-4">{action.description}</p>
            <div className="flex items-center justify-between">
              <span className="px-2 py-1 rounded bg-blue-100 text-blue-800">
                {action.category}
              </span>
              <span className={`px-2 py-1 rounded ${action.priority === 'HIGH' ? 'bg-red-100 text-red-800' : 'bg-yellow-100 text-yellow-800'}`}>
                {action.priority}
              </span>
            </div>
            <ul className="mt-4 list-disc list-inside text-sm text-gray-600">
              {action.acceptance.map((criteria, idx) => (
                <li key={idx}>{criteria}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>
    </main>
  );
}