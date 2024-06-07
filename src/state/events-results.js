import { create } from 'zustand'

const useEventsResults = create((set) => ({
  data: [],
  error: null,
  isLoading: false,
  page: {},

  fetchEvents: async (params) => {
    try {
      set(() => ({ isLoading: true }))
      const response = await fetch(`https://app.ticketmaster.com/discovery/v2/events.json?apikey=${import.meta.env.VITE_TICKETMASTER_API_KEY}&countryCode=MX${params?.length ? params : ''}`)
      const data = await response.json()

      set(() => ({ data, isLoading: false, page: data?.page || {} }))
    } catch (error) {
      set(() => ({ error }))
    }
  }
}))

export default useEventsResults
