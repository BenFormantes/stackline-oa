import React from 'react'
import TableContainer from '@material-ui/core/TableContainer'
import Table from '@material-ui/core/Table'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import TableCell from '@material-ui/core/TableCell'
import TableBody from '@material-ui/core/TableBody'
import { Sales } from '../types/retailItem-types'
import { useAppSelector } from '../hooks'

export default function SalesTable() {
  const salesData: Sales[] | null | undefined = useAppSelector(
    (state) => state.retailItem.retailItem?.sales
  )

  const rowData: Sales[] | null | undefined = salesData

  return (
    <>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell align="center">WEEK ENDING</TableCell>
              <TableCell align="center">RETAIL SALES</TableCell>
              <TableCell align="center">WHOLESALE SALES</TableCell>
              <TableCell align="center">UNITS SOLD</TableCell>
              <TableCell align="center">RETAILER MARGIN</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rowData?.map((row) => (
              <TableRow key={row.weekEnding}>
                <TableCell align="center" component="th" scope="row">
                  {row.weekEnding}
                </TableCell>
                <TableCell align="center">{row.retailSales}</TableCell>
                <TableCell align="center">{row.wholesaleSales}</TableCell>
                <TableCell align="center">{row.unitsSold}</TableCell>
                <TableCell align="center">{row.retailerMargin}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  )
}
