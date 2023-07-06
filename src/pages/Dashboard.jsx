import React from 'react'
import BarChart from '../components/Charts/BarChart';
import PieChart from '../components/Charts/PieChart';
import QuantityCard from '../components/QuantityCard';

import { DataGrid } from '@mui/x-data-grid';

import '../styles/dashboard.scss';
import { Button } from '@mui/material';

const data_first = {
  labels: ["2016", "2017", "2018", "2019", "2020", "2021", "2022"],
  datasets: [{
    label: "USA",
    data: [15, 30, 55, 65, 60, 80, 95],
    backgroundColor: "rgba(0, 156, 255, .7)"
  },
  {
    label: "UK",
    data: [8, 35, 40, 60, 70, 55, 75],
    backgroundColor: "rgba(0, 156, 255, .5)"
  },
  {
    label: "AU",
    data: [12, 25, 45, 55, 65, 70, 60],
    backgroundColor: "rgba(0, 156, 255, .3)"
  }
  ]
};

const cards1=[
  {
    icon: <i className="fa fa-chart-line fa-3x text-primary" />,
    title: "Today Sale",
    quantity: '$234'
  },
  {
    icon: <i className="fa fa-chart-bar fa-3x text-primary" />,
    title: "Total Sale",
    quantity: '$2234'
  },
  {
    icon: <i className="fa fa-chart-area fa-3x text-primary" />,
    title: "Today Revenue",
    quantity: '$134'
  },
  {
    icon: <i className="fa fa-chart-pie fa-3x text-primary" />,
    title: "Total Revenue",
    quantity: '$1234'
  },
  {
    icon: <i className="fas fa-user-circle fa-3x text-primary" />,
    title: "Customers",
    quantity: 25
  },
  {
    icon: <i className="fa fa-star fa-3x text-primary" />,
    title: "Reviews",
    quantity: 30
  }
]
const cardsOrders= [
  {
    icon: <i class="fa fa-paper-plane fa-3x text-primary" />,
    title: "Booked Orders",
    quantity: 20
  },
  {
    icon: <i class="fa fa-truck-loading fa-3x text-primary" />,
    title: "Pending",
    quantity: 40
  },
  {
    icon: <i className="fa fa-truck fa-3x text-primary"/>,
    title: "Delivered",
    quantity: 160
  },
  {
    icon: <i class="fa fa-window-close fa-3x text-primary"/>,
    title: "Cancelled",
    quantity: 10
  },
  {
    icon: <i className="far fa-flag fa-3x text-primary" />,
    title: "Returned",
    quantity: 4
  },
  {
    icon: <i class="fa fa-mail-bulk fa-3x text-primary"/>,
    title: "Total Orders",
    quantity: 250
  }
]

const data_sec = {
  labels: ['Booded', 'Pending', 'Delivered', 'Cancelled', 'Returned'],
  datasets: [
    {
      label: '# of Orders',
      data: [20, 40, 160, 10, 4],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
      ],
      borderWidth: 1,
    },
  ],
};

const rows = [
  { id: 1, col1: '424242', col2: '25-5-2023', col3: '23:54:30', col4: "Airlines", col5: "H&Q", col6: "Pending"},
  { id: 2, col1: '423543', col2: '25-5-2023', col3: '23:54:30', col4: "Airlines", col5: "H&Q", col6: "Pending"},
  { id: 3, col1: '242532', col2: '24-5-2023', col3: '23:54:30', col4: "Airlines", col5: "H&Q", col6: "Pending"},
  { id: 4, col1: '424242', col2: '23-5-2023', col3: '23:54:30', col4: "Airlines", col5: "H&Q", col6: "Delivered"},
  { id: 5, col1: '423543', col2: '23-5-2023', col3: '23:54:30', col4: "Airlines", col5: "H&Q", col6: "Booked"},
  { id: 6, col1: '424242', col2: '24-5-2023', col3: '23:54:30', col4: "Airlines", col5: "H&Q", col6: "Cancelled"},
  { id: 7, col1: '242532', col2: '23-5-2023', col3: '23:54:30', col4: "Airlines", col5: "H&Q", col6: "Delivered"},
  { id: 8, col1: '242532', col2: '24-5-2023', col3: '23:54:30', col4: "Airlines", col5: "H&Q", col6: "Pending"},
  { id: 9, col1: '424242', col2: '23-5-2023', col3: '23:54:30', col4: "Airlines", col5: "H&Q", col6: "Delivered"},
  { id: 10, col1: '423543', col2: '23-5-2023', col3: '23:54:30', col4: "Airlines", col5: "H&Q", col6: "Booked"},
  { id: 11, col1: '242532', col2: '24-5-2023', col3: '23:54:30', col4: "Airlines", col5: "H&Q", col6: "Pending"},
  { id: 12, col1: '424242', col2: '23-5-2023', col3: '23:54:30', col4: "Airlines", col5: "H&Q", col6: "Delivered"},
  { id: 13, col1: '423543', col2: '23-5-2023', col3: '23:54:30', col4: "Airlines", col5: "H&Q", col6: "Booked"},
  { id: 14, col1: '242532', col2: '24-5-2023', col3: '23:54:30', col4: "Airlines", col5: "H&Q", col6: "Pending"},
  { id: 15, col1: '424242', col2: '23-5-2023', col3: '23:54:30', col4: "Airlines", col5: "H&Q", col6: "Delivered"},
  { id: 16, col1: '423543', col2: '23-5-2023', col3: '23:54:30', col4: "Airlines", col5: "H&Q", col6: "Booked"},
  { id: 17, col1: '242532', col2: '24-5-2023', col3: '23:54:30', col4: "Airlines", col5: "H&Q", col6: "Pending"},
  { id: 18, col1: '424242', col2: '23-5-2023', col3: '23:54:30', col4: "Airlines", col5: "H&Q", col6: "Delivered"},
  { id: 19, col1: '423543', col2: '23-5-2023', col3: '23:54:30', col4: "Airlines", col5: "H&Q", col6: "Booked"},
  { id: 20, col1: '242532', col2: '24-5-2023', col3: '23:54:30', col4: "Airlines", col5: "H&Q", col6: "Pending"},
  { id: 21, col1: '424242', col2: '23-5-2023', col3: '23:54:30', col4: "Airlines", col5: "H&Q", col6: "Delivered"},
  { id: 22, col1: '423543', col2: '23-5-2023', col3: '23:54:30', col4: "Airlines", col5: "H&Q", col6: "Booked"},
  { id: 23, col1: '242532', col2: '24-5-2023', col3: '23:54:30', col4: "Airlines", col5: "H&Q", col6: "Pending"},
  { id: 24, col1: '424242', col2: '23-5-2023', col3: '23:54:30', col4: "Airlines", col5: "H&Q", col6: "Delivered"},
  { id: 25, col1: '423543', col2: '23-5-2023', col3: '23:54:30', col4: "Airlines", col5: "H&Q", col6: "Booked"},
  { id: 26, col1: '242532', col2: '24-5-2023', col3: '23:54:30', col4: "Airlines", col5: "H&Q", col6: "Pending"},
  { id: 27, col1: '424242', col2: '23-5-2023', col3: '23:54:30', col4: "Airlines", col5: "H&Q", col6: "Delivered"},
  { id: 28, col1: '423543', col2: '23-5-2023', col3: '23:54:30', col4: "Airlines", col5: "H&Q", col6: "Booked"},
];

const columns = [
  { field: 'col1', headerName: 'Order #', 
    width: 100, renderCell: (params)=>{
      return <span>#{params.value}</span>
    }},
  { field: 'col2', headerName: 'Order Date', width: 100 },
  { field: 'col3', headerName: 'Order Time', width: 100 },
  { field: 'col4', headerName: 'Sender', width: 150 },
  { field: 'col5', headerName: 'Receiver', width: 150 },
  { field: 'col6', headerName: 'Status', width: 150 },
  { 
    field: 'action', 
    headerName: 'Action', 
    width: 150,
    sorteable: false,
    renderCell: (params)=>{
      const onClick = (e) => {
        e.stopPropagation(); // don't select this row after clicking

        const api = params.api;
        const thisRow = {};

        api
          .getAllColumns()
          .filter((c) => c.field !== "__check__" && !!c)
          .forEach(
            (c) => (thisRow[c.field] = params.row[c.field])
          );

        return alert(JSON.stringify(thisRow, null, 4));
      };

      return <Button onClick={onClick}>Click</Button>;
    }
  },
];

const Dashboard = () => {

  return (
    <div>
      <div className="container-fluid pt-2 px-4">
        <div className="row g-4 cards">
          <div className='col-sm-12 col-xl-3 '>
            {cards1.map(card =>(
              <QuantityCard data={card}/>
            ))}
          </div>
          <div className='col-sm-12 col-xl-3 '>
            {cardsOrders.map(card =>(
              <QuantityCard data={card}/>
            ))}
          </div>
          <div className='col-sm-12 col-xl-6'>
            <div className="bg-light text-center rounded p-4 my-3">
              <div className="d-flex align-items-center justify-content-between mb-4">
                <h6 className="mb-0">Worldwide Sales</h6>
                <a href>Show All</a>
              </div>
              <BarChart data={data_first}/>
            </div>
            <div className="bg-light text-center rounded p-4 my-3">
              <div className="d-flex align-items-center justify-content-between mb-4">
                <h6 className="mb-0">Orders</h6>
                <a href>Show All</a>
              </div>
              <PieChart data={data_sec}/>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid pt-4 px-4">
        <div className="bg-light text-center rounded p-4" style={{ height: 500, width: '100%' }}>
          <div className="d-flex align-items-center justify-content-between mb-4">
            <h6 className="mb-0">Recent Orders</h6>
            <a href >Show All</a>
          </div>
          <DataGrid disableRowSelectionOnClick rows={rows} columns={columns} />
        </div>
      </div>

    </div>
  );
}

export default Dashboard;