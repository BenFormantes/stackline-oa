import { AppThunk } from '../store/store'
import { setError, setLoading, setRetailItem } from '../store/retailItemSlice'

const baseUrl = 'http://localhost:3000/stackline-endpoint'
export const fetchData = (): AppThunk => {
  return async (dispatch) => {
    dispatch(setLoading(true))
    try {
      const response = await fetch(baseUrl)
      if (!response.ok) {
        throw new Error('Failed to fetch')
      }
      const data = await response.json()
      dispatch(setRetailItem(data))
      dispatch(setError(null))
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      dispatch(setRetailItem(null))
      dispatch(setError(error.message))
    } finally {
      dispatch(setLoading(false))
    }
  }
}
