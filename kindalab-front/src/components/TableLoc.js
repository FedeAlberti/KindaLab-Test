import React, { useContext } from 'react'
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import { DataContext } from './DataContext';
import "./food.css";

export const TableLoc = () => {

    const {data, setLoc} = useContext(DataContext);
    
    const onSelectAll = (isSelected, rows) => {
        setLoc([]);
        isSelected && setLoc(rows);
    };
    
    const onRowSelect = (row, isSelected) => {
        
        (isSelected)
            ?setLoc( c => [...c, row])
            :setLoc( c => c.filter(x => x.objectid !== row.objectid));

    };

    const selectRowProp = {
        mode: 'checkbox',
        clickToSelect: true,
        onSelect: onRowSelect,
        onSelectAll: onSelectAll
    };
    
    const options = {
        sortIndicator: true
    };

    return (

        <div className="col-6 not-exeed ">
            <BootstrapTable data={data} bordered={ false } options={options} selectRow={ selectRowProp } pagination version='4' keyBoardNav>
                <TableHeaderColumn width='0%' isKey dataField='objectid' dataSort>objectid</TableHeaderColumn>
                <TableHeaderColumn dataField='applicant' dataSort >Applicant</TableHeaderColumn>
                <TableHeaderColumn dataField='address' dataSort>address</TableHeaderColumn>
                <TableHeaderColumn width='7Em' dataField='facilitytype' >facilitytype</TableHeaderColumn>
            </BootstrapTable> 
        </div>
    )
}
