import cars from '../../static/cars.json'

const inMemoryCars = [...cars] // Create an in-memory copy of the data

export const mockApi = {
  getCars: async (filters = {}, sort = null, page = 0, limit = 5) => {
    // Simulate network latency (e.g., 1 to 3 seconds delay)
    const latency = Math.floor(Math.random() * (3000 - 1000 + 1)) + 500 // Delay between 0.5 and 1.5 seconds

    return new Promise(resolve => {
      setTimeout(() => {
        let result = [...inMemoryCars]
        console.log(filters)

        // Apply filtering
        if (filters?.status) {
          result = result.filter(car => car.status.toLowerCase() === filters.status.toLowerCase())
        }
        if (filters?.type) {
          result = result.filter(car => car.type.toLowerCase() === filters.type.toLowerCase())
        }
        if (filters?.expression) {
          // brand, model, transmission, fuel, id
          result = result.filter(car => {
            return (
              !car.brand ||
              new RegExp(filters?.expression, 'i').test(car.brand) ||
              !car.model ||
              new RegExp(filters?.expression, 'i').test(car.model) ||
              !car.transmission ||
              new RegExp(filters?.expression, 'i').test(car.transmission) ||
              !car.fuel ||
              new RegExp(filters?.expression, 'i').test(car.fuel) ||
              !car.id ||
              new RegExp(filters?.expression, 'i').test(car.id)
            )
          })
        }

        // Apply sorting

        if (sort) {
          const [key, order] = sort.split('_')

          result.sort((a, b) => {
            if (order === 'asc') return a[key].localeCompare(b[key])
            if (order === 'desc') return b[key].localeCompare(a[key])
            return 0
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

  addCar: async newCar => {
    return new Promise(resolve => {
      setTimeout(() => {
        inMemoryCars.push(newCar)
        resolve({ ok: 1, message: 'Car added successfully', data: newCar })
      }, 500)
    })
  },

  updateCar: async (id, updatedData) => {
    return new Promise(resolve => {
      setTimeout(() => {
        const index = inMemoryCars.findIndex(car => car.id === id)
        if (index !== -1) {
          inMemoryCars[index] = { ...inMemoryCars[index], ...updatedData }
          resolve({ ok: 1, message: 'Car updated successfully', data: inMemoryCars[index] })
        } else {
          resolve({ ok: 0, message: 'Car not found' })
        }
      }, 500)
    })
  },

  deleteCar: async id => {
    return new Promise(resolve => {
      setTimeout(() => {
        const index = inMemoryCars.findIndex(car => car.id === id)
        if (index !== -1) {
          const deletedCar = inMemoryCars.splice(index, 1)
          resolve({ ok: 1, message: 'Car deleted successfully', data: deletedCar })
        } else {
          resolve({ ok: 0, message: 'Car not found' })
        }
      }, 500)
    })
  }
}
