import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function DenseTable(rows) {
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
                <TableHead>
                    <TableRow>
                        {
                            rows[0].map((header) => (
                                <TableCell>{header}</TableCell>
                            ))
                        }
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        rows.slice(1).map((row) => (
                                <TableRow>
                                    {
                                        row.map((data) => (
                                            <TableCell>{data}</TableCell>
                                        ))
                                    }
                                </TableRow>
                            )
                        )
                    }
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export {
    DenseTable
}

