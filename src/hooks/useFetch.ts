import { api } from '@/services/api'
import useSWR from 'swr'


const useFetch = (url: string) => {
  const { data, error, isLoading } = useSWR(
    url,
    async () => {
      try {
        const response = (await api(url)).data
        return response
      } catch (err) {
        return err
      }
    }
  )
  return {
    data,
    error,
    isLoading,
  }
}

export { useFetch }