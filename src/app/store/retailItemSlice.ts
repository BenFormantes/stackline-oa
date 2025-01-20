import { PayloadAction } from '@reduxjs/toolkit'
import { RetailItem, Sales } from '../types/retailItem-types'
import { createAppSlice } from './createAppSlice'

interface RetailItemState {
  retailItem: RetailItem | null
  loading: boolean
  error: string | null | undefined
}

const initialState: RetailItemState = {
  retailItem: null,
  loading: false,
  error: null,
}

export const retailItemSlice = createAppSlice({
  name: 'retailItem',
  initialState,
  reducers: {
    setRetailItem(
      state: RetailItemState,
      action: PayloadAction<RetailItem | null>
    ) {
      state.retailItem = action.payload
    },
    setLoading(state: RetailItemState, action: PayloadAction<boolean>) {
      state.loading = action.payload
    },
    setError(state: RetailItemState, action: PayloadAction<string | null>) {
      state.error = action.payload
    },
  },
})

export const { setRetailItem } = retailItemSlice.actions
export const { setLoading } = retailItemSlice.actions
export const { setError } = retailItemSlice.actions

export const getSales = (state: {
  retailItemState: RetailItemState
}): Sales[] | null | undefined => state.retailItemState.retailItem?.sales

export default retailItemSlice.reducer
