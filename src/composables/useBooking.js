export const initialBooking = () => {
  const now = new Date().valueOf()
  return {
    id: '',
    client: null,
    car: null,
    planFrom: now / 1000,
    planTo: null,
    paymentStatus: 'Pending',
    bookingStatus: 'Ongoing'
  }
}
