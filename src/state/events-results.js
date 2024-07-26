import { create } from 'zustand'

// store para guardar valores de forma global
const useEventsResults = create((set) => ({
  data: [],
  error: null,
  isLoading: false,
  page: {},

  fetchEvents: async (params) => {
    try {
      await set(() => ({ isLoading: true }))
      const response = await fetch(`https://app.ticketmaster.com/discovery/v2/events.json?apikey=${import.meta.env.VITE_TM_API_KEY}&countryCode=MX${params?.length ? params : ''}`)
      const data = await response.json()

      await set(() => ({ data, isLoading: false, page: data?.page || {} }))
    } catch (error) {
      await set(() => ({ error }))
    }
  }
}))

export default useEventsResults
