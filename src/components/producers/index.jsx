import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import './style.css';

function createData(country, amount) {
  return { country, amount };
}

const rows = [
  createData('India', 3287263),
  createData('China', 9596961),
  createData('Italy', 301340),
  createData('United States', 9833520),
  createData('Canada',  9984670),
  createData('Australia', 7692024),
  createData('Germany', 357578),
  createData('Ireland', 70273),
  createData('Mexico', 1972550),
  createData('Japan', 377973),
  createData('France', 640679),
  createData('United Kingdom', 242495),
  createData('Russia', 17098246),
  createData('Nigeria', 923768),
  createData('Brazil', 8515767),
];

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

const headCells = [
  { id: 'country', numeric: false, disablePadding: false, label: 'by country' },
  { id: 'amount', numeric: true, disablePadding: false, label: 'by amount' },
];

function SortedTableHead(props) {
  const { classes, order, orderBy, onRequestSort } = props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? 'right' : 'left'}
            padding={headCell.disablePadding ? 'none' : 'default'}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : 'asc'}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <span className={classes.visuallyHidden}>
                  {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                </span>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    '& .MuiTableContainer-root': {
     height: '400px',
      '& .MuiTableCell-head': {
        borderBottom: 'none',
        '& > .MuiTableSortLabel-root' : {
          fontSize: '10px'
        }
      }
    },
  },
  paper: {
    width: '100%',
    padding: theme.spacing(3),
    marginBottom: theme.spacing(2),
    backgroundColor: 'transparent',
    display: 'flex',
    justifyContent: 'center',
    '& > *': {
      width: '300px'
    }
  },
  table: {
    display: 'flex',
    flexDirection: 'column',
    '& tr': {
      display: 'flex',
      justifyContent: 'space-between',
      '& th': {
        width: '50%'
      }
    }
  },
  visuallyHidden: {
    border: 0,
    clip: 'rect(0 0 0 0)',
    height: 1,
    margin: -1,
    overflow: 'hidden',
    padding: 0,
    position: 'absolute',
    top: 20,
    width: 10,
  },
  cells: {
    padding: theme.spacing(1),
    borderBottom: 'none'
  }
}));

export default function Producers() {
  const classes = useStyles();
  const [order, setOrder] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState('amount');
  
  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  return (
    <div className={classes.root}>
      <Typography>Top Oil Producers</Typography>
      <Paper elevation={0} className={classes.paper}>
        <TableContainer className="custom-scrollbar">
          <Table
            stickyHeader
            className={classes.table}
            aria-labelledby="tableTitle"
            size='small'
            aria-label="sorted table"
          >
            <SortedTableHead
              classes={classes}
              order={order}
              orderBy={orderBy}
              onRequestSort={handleRequestSort}
            />
            <TableBody>
              {
                stableSort(rows , getComparator(order, orderBy))
                .map(row => (
                    <TableRow
                      hover
                      key={row.name}                   
                    >
                      <TableCell className={classes.cells}>{row.country}</TableCell>
                      <TableCell className={classes.cells}>{row.amount}</TableCell>
                    </TableRow>
                ))
              }
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </div>
  );
}
