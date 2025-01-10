export const initialBooking = () => {
  return {
    id: '',
    client: null,
    car: null,
    planFrom: new Date().valueOf(),
    planTo: null,
    paymentStatus: { label: 'Pending' },
    bookingStatus: { label: 'Ongoing' }
  }
}
