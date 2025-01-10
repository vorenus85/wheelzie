import bookings from '../../static/bookings.json'

const inMemoryData = [...bookings] // Create an in-memory copy of the data

export const paymentStatuses = [{ label: 'Paid' }, { label: 'Pending' }]

export const bookingStatuses = [{ label: 'Returned' }, { label: 'Ongoing' }, { label: 'Cancelled' }]

export const bookingsApi = {
  getBookings: async (filters = {}, sort = null, page = 0, limit = 5) => {
    // Simulate network latency (e.g., 1 to 2 seconds delay)
    const latency = Math.floor(Math.random() * (2000 - 1000 + 1)) + 500 // Delay between 0.5 and 1.5 seconds

    return new Promise(resolve => {
      setTimeout(() => {
        let result = [...inMemoryData]

        // Apply filtering
        if (filters?.status) {
          result = result.filter(item => item.status.toLowerCase() === filters.status.toLowerCase())
        }

        if (filters?.expression) {
          // car.brand, car.model, clientName, id
          result = result.filter(item => {
            return (
              !item.car.brand ||
              new RegExp(filters?.expression, 'i').test(item.car.brand) ||
              !item.car.model ||
              new RegExp(filters?.expression, 'i').test(item.car.model) ||
              !item.clientName ||
              new RegExp(filters?.expression, 'i').test(item.clientName) ||
              !item.id ||
              new RegExp(filters?.expression, 'i').test(item.id)
            )
          })
        }

        // Paging
        const startIndex = page === 0 ? 0 : page * limit
        const endIndex = page === 0 ? limit : (page + 1) * limit
        const paginatedResult = result.slice(startIndex, endIndex)
        // Return the response after delay
        resolve({
          ok: 1,
          total: result.length,
          data: paginatedResult
        })
      }, latency) // Simulate the latency
    })
  }
}
