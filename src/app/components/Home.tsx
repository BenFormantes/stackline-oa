import React, { useEffect } from 'react'
import SalesChart from './SalesChart'
import { useParams } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../hooks'
import { fetchData } from '../services/retailItemsService'
import ErrorCard from './ErrorResponse'
import RetailItemDetails from './RetailItemDetails'
import SalesTable from './SalesTable'
import './Home.css'

export default function Home() {
  const dispatch = useAppDispatch()
  const error = useAppSelector((state) => state.retailItem.error)

  const params = useParams()

  useEffect(() => {
    dispatch(fetchData())
  }, [dispatch, params])

  return (
    <div>
      {error ? (
        <ErrorCard message={error} />
      ) : (
        <>
          <div className="content-container">
            <div className="left-nav">
              <RetailItemDetails />
            </div>
            <div className="chart-and-table-container">
              <SalesChart />
              <SalesTable />
            </div>
          </div>
        </>
      )}
    </div>
  )
}
