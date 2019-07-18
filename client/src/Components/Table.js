import React, { Component } from 'react';
import ReactTable from 'react-table';
export class Table extends Component {
    render() {
        const data = [
            {
                hourly: 0,
                minutely: 26,
                
            }
        ];

        const columns = [
            {
                Header: 'hourly',
                accessor: 'hourly' // String-based value accessors!
            },
            {
                Header: 'minutely',
                accessor: 'minutely',
                Cell: props => <span className="number">{props.value}</span> // Custom cell components!
            }
        ];

        return <ReactTable data={data} columns={columns} />;
    }
}

export default Table;
