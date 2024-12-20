import clients from '../../static/clients.json'

const inMemoryData = [...clients] // Create an in-memory copy of the data

export const mockApi = {
  getClients: async (filters = {}, sort = null, page = 0, limit = 5) => {
    // Simulate network latency (e.g., 1 to 2 seconds delay)
    const latency = Math.floor(Math.random() * (2000 - 1000 + 1)) + 500 // Delay between 0.5 and 1.5 seconds

    return new Promise(resolve => {
      setTimeout(() => {
        let result = [...inMemoryData]

        // Apply filtering
        if (filters?.expression) {
          // firstName, lastName, fullname, email, phone, addressLine1, addressLine2, city, country, state, zip, additional
          result = result.filter(item => {
            return (
              !item.firstName ||
              new RegExp(filters?.expression.toLowerCase(), 'i').test(
                item.firstName.toLowerCase()
              ) ||
              !item.lastName ||
              new RegExp(filters?.expression.toLowerCase(), 'i').test(
                item.lastName.toLowerCase()
              ) ||
              !item.fullname ||
              new RegExp(filters?.expression.toLowerCase(), 'i').test(
                item.fullname.toLowerCase()
              ) ||
              !item.email ||
              new RegExp(filters?.expression.toLowerCase(), 'i').test(item.email.toLowerCase()) ||
              !item.phone ||
              new RegExp(filters?.expression.toLowerCase(), 'i').test(item.phone.toLowerCase())
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
  },

  deleteClient: async id => {
    return new Promise(resolve => {
      setTimeout(() => {
        const index = inMemoryData.findIndex(car => car.id === id)
        if (index !== -1) {
          const deletedClient = inMemoryData.splice(index, 1)
          resolve({ ok: 1, message: 'Client deleted successfully', data: deletedClient })
        } else {
          resolve({ ok: 0, message: 'Client not found' })
        }
      }, 500)
    })
  }
}