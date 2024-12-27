import cars from '../../static/cars.json'

const inMemoryData = [...cars] // Create an in-memory copy of the data

export const carTypes = [
  { label: 'SUV' },
  { label: 'Sedan' },
  { label: 'Hatchback' },
  { label: 'Coupe' },
  { label: 'Convertible' },
  { label: 'Truck' },
  { label: 'Van' },
  { label: 'Wagon' },
  { label: 'Crossover' },
  { label: 'Minivan' }
]

export const carFeatures = [
  { label: 'Air Conditioning', key: '1' },
  { label: 'Bluetooth Connectivity', key: '2' },
  { label: 'Backup Camera', key: '3' },
  { label: 'Cruise Control', key: '4' },
  { label: 'Keyless Entry', key: '5' },
  { label: 'Power Windows and Locks', key: '6' },
  { label: 'AM/FM Radio with CD Player', key: '7' },
  { label: 'USB Charging Ports', key: '8' },
  { label: 'Spacious Trunk', key: '9' },
  {
    label: 'Advanced Safety Features (e.g., Lane Departure Warning, Automatic Emergency Braking)',
    key: '10'
  }
]

export const carStatuses = [
  { label: 'Available' },
  { label: 'Unavailable' },
  { label: 'Maintenance' }
]

export const transmissionTypes = [{ label: 'Automatic' }, { label: 'Manual' }]

export const fuelTypes = [
  { label: 'Petrol' },
  { label: 'Diesel' },
  { label: 'Electric' },
  { label: 'Hybrid' }
]

export const groupedBrands = [
  {
    label: 'Toyota',
    models: [{ label: 'Corolla' }, { label: 'Camry' }, { label: 'Yaris' }, { label: 'Avalon' }]
  },
  {
    label: 'Aston Martin',
    models: [
      { label: 'DB11' },
      { label: 'DB12 Volante' },
      { label: 'DBS' },
      { label: 'Vantage' },
      { label: 'Rapide' }
    ]
  },
  {
    label: 'Hyundai',
    models: [{ label: 'Accent' }, { label: 'Sonata' }, { label: 'Ioniq' }, { label: 'Palisade' }]
  },
  {
    label: 'BMW',
    models: [
      { label: '5 Series' },
      { label: '7 Series' },
      { label: 'X1' },
      { label: 'LX3' },
      { label: 'X5' },
      { label: 'X7' }
    ]
  },
  {
    label: 'Kia',
    models: [
      { label: 'Optima' },
      { label: 'Stinger' },
      { label: 'Soul' },
      { label: 'Sportage' },
      { label: 'EV6' }
    ]
  },
  {
    label: 'Mercedes-Benz',
    models: [
      { label: 'C-Class' },
      { label: 'E-Class' },
      { label: 'S-Class' },
      { label: 'GLA' },
      { label: 'GLC' },
      { label: 'GLE' },
      { label: 'GLS' }
    ]
  },
  {
    label: 'Nissan',
    models: [
      { label: 'Ariya' },
      { label: 'Maxima' },
      { label: 'Rogue' },
      { label: 'Murano' },
      { label: 'Pathfinder' }
    ]
  },
  {
    label: 'Range Rover',
    models: [{ label: 'Evoque' }, { label: 'Velar' }, { label: 'Sport' }, { label: 'Vogue' }]
  },
  {
    label: 'Volkswagen',
    models: [{ label: 'Golf' }, { label: 'Passat' }, { label: 'Amarok' }, { label: 'Touareg' }]
  },
  {
    label: 'Audi',
    models: [
      { label: 'A5' },
      { label: 'A6' },
      { label: 'Q2' },
      { label: 'Q3' },
      { label: 'Q7' },
      { label: 'Q4 e-tron' }
    ]
  }
]

export const onlyBrands = groupedBrands.map(brand => ({ label: brand.label }))

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
        if (filters?.bodyType) {
          result = result.filter(
            car => car.bodyType.toLowerCase() === filters.bodyType.toLowerCase()
          )
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

  getCar: async carId => {
    return new Promise(resolve => {
      setTimeout(() => {
        const car = inMemoryData.find(item => item.id.toLowerCase() === carId.toLowerCase())
        if (car) {
          resolve({ ok: 1, message: 'ok', data: car })
        } else {
          resolve({ ok: false, message: 'Car not found' })
        }
      }, 500)
    })
  },

  upsertCar: async car => {
    return new Promise(resolve => {
      setTimeout(() => {
        const index = inMemoryData.findIndex(data => data.id === car.id)
        if (index !== -1) {
          inMemoryData[index] = {
            ...car
          }
        } else {
          const carLength = inMemoryData.length
          const carId = `CAR-${carLength.padStart(3, '0')}`
          const newCar = { ...car, id: carId }
          inMemoryData.push(newCar)
          resolve({ ok: 1, message: 'Car added successfully', data: newCar })
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
