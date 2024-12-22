import cars from '../../static/cars.json'

const inMemoryData = [...cars] // Create an in-memory copy of the data

export const carTypes = [
  { name: 'SUV' },
  { name: 'Sedan' },
  { name: 'Hatchback' },
  { name: 'Coupe' },
  { name: 'Convertible' },
  { name: 'Truck' },
  { name: 'Van' },
  { name: 'Wagon' },
  { name: 'Crossover' },
  { name: 'Minivan' }
]

export const carFeatures = [
  { name: 'Air Conditioning', key: '1' },
  { name: 'Bluetooth Connectivity', key: '2' },
  { name: 'Backup Camera', key: '3' },
  { name: 'Cruise Control', key: '4' },
  { name: 'Keyless Entry', key: '5' },
  { name: 'Power Windows and Locks', key: '6' },
  { name: 'AM/FM Radio with CD Player', key: '7' },
  { name: 'USB Charging Ports', key: '8' },
  { name: 'Spacious Trunk', key: '9' },
  {
    name: 'Advanced Safety Features (e.g., Lane Departure Warning, Automatic Emergency Braking)',
    key: '10'
  }
]

export const carStatuses = [{ name: 'Available' }, { name: 'Unavailable' }, { name: 'Maintenance' }]

export const transmissionTypes = [{ name: 'Automatic' }, { name: 'Manual' }]

export const fuelTypes = [
  { name: 'Petrol' },
  { name: 'Diesel' },
  { name: 'Electric' },
  { name: 'Hybrid' }
]

export const groupedBrands = [
  {
    label: 'Toyota',
    code: 'TOYOTA',
    models: [
      { label: 'Corolla', value: 'Corolla' },
      { label: 'Camry', value: 'Camry' },
      { label: 'Yaris', value: 'Yaris' },
      { label: 'Avalon', value: 'Avalon' }
    ]
  },
  {
    label: 'Aston Martin',
    code: 'ASTON_MARTIN',
    models: [
      { label: 'DB11', value: 'DB11' },
      { label: 'DBS', value: 'DBS' },
      { label: 'Vantage', value: 'Vantage' },
      { label: 'Rapide', value: 'Rapide' }
    ]
  },
  {
    label: 'Hyundai',
    code: 'HYUNDAI',
    models: [
      { label: 'Accent', value: 'Accent' },
      { label: 'Sonata', value: 'Sonata' },
      { label: 'Ioniq', value: 'Ioniq' },
      { label: 'Palisade', value: 'Palisade' }
    ]
  },
  {
    label: 'BMW',
    code: 'BMW',
    models: [
      { label: '5 Series', value: '5 Series' },
      { label: '7 Series', value: '7 Series' },
      { label: 'X1', value: 'X1' },
      { label: 'LX3', value: 'LX3' },
      { label: 'X5', value: 'X5' },
      { label: 'X7', value: 'X7' }
    ]
  },
  {
    label: 'Kia',
    code: 'KIA',
    models: [
      { label: 'Optima', value: 'Optima' },
      { label: 'Stinger', value: 'Stinger' },
      { label: 'Soul', value: 'Soul' },
      { label: 'Sportage', value: 'Sportage' },
      { label: 'EV6', value: 'EV6' }
    ]
  },
  {
    label: 'Mercedes-Benz',
    code: 'MERCEDES_BENZ',
    models: [
      { label: 'C-Class', value: 'C-Class' },
      { label: 'E-Class', value: 'E-Class' },
      { label: 'S-Class', value: 'S-Class' },
      { label: 'GLA', value: 'GLA' },
      { label: 'GLC', value: 'GLC' },
      { label: 'GLE', value: 'GLE' },
      { label: 'GLS', value: 'GLS' }
    ]
  },
  {
    label: 'Nissan',
    code: 'NISSAN',
    models: [
      { label: 'Ariya', value: 'Ariya' },
      { label: 'Maxima', value: 'Maxima' },
      { label: 'Rogue', value: 'Rogue' },
      { label: 'Murano', value: 'Murano' },
      { label: 'Pathfinder', value: 'Pathfinder' }
    ]
  },
  {
    label: 'Range Rover',
    code: 'RANGE_ROVER',
    models: [
      { label: 'Evoque', value: 'Evoque' },
      { label: 'Velar', value: 'Velar' },
      { label: 'Sport', value: 'Sport' },
      { label: 'Vogue', value: 'Vogue' }
    ]
  },
  {
    label: 'Volkswagen',
    code: 'VOLKSWAGEN',
    models: [
      { label: 'Golf', value: 'Golf' },
      { label: 'Passat', value: 'Passat' },
      { label: 'Amarok', value: 'Amarok' },
      { label: 'Touareg', value: 'Touareg' }
    ]
  },
  {
    label: 'Audi',
    code: 'AUDI',
    models: [
      { label: 'A5', value: 'A5' },
      { label: 'A6', value: 'A6' },
      { label: 'Q2', value: 'Q2' },
      { label: 'Q3', value: 'Q3' },
      { label: 'Q7', value: 'Q7' },
      { label: 'Q4 e-tron', value: 'Q4 e-tron' }
    ]
  }
]

export const carsApi = {
  getCars: async (filters = {}, sort = null, page = 0, limit = 5) => {
    // Simulate network latency (e.g., 1 to 2 seconds delay)
    const latency = Math.floor(Math.random() * (2000 - 1000 + 1)) + 500 // Delay between 0.5 and 1.5 seconds

    return new Promise(resolve => {
      setTimeout(() => {
        let result = [...inMemoryData]

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
        inMemoryData.push(newCar)
        resolve({ ok: 1, message: 'Car added successfully', data: newCar })
      }, 500)
    })
  },

  updateCar: async (id, updatedData) => {
    return new Promise(resolve => {
      setTimeout(() => {
        const index = inMemoryData.findIndex(car => car.id === id)
        if (index !== -1) {
          inMemoryData[index] = { ...inMemoryData[index], ...updatedData }
          resolve({ ok: 1, message: 'Car updated successfully', data: inMemoryData[index] })
        } else {
          resolve({ ok: 0, message: 'Car not found' })
        }
      }, 500)
    })
  },

  deleteCar: async id => {
    return new Promise(resolve => {
      setTimeout(() => {
        const index = inMemoryData.findIndex(car => car.id === id)
        if (index !== -1) {
          const deletedCar = inMemoryData.splice(index, 1)
          resolve({ ok: 1, message: 'Car deleted successfully', data: deletedCar })
        } else {
          resolve({ ok: 0, message: 'Car not found' })
        }
      }, 500)
    })
  }
}
