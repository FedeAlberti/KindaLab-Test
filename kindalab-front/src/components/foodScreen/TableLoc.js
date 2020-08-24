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


    const facilityType = {
        'Truck' : 'Truck',
        'Push Cart' : 'Push Cart',
      };

      console.log(data.map(x => x.facilitytype))

    return (

        <div className="col-6 not-exeed ">
            <BootstrapTable data={data} bordered={ false } options={options} selectRow={ selectRowProp } pagination version='4' keyBoardNav>
                <TableHeaderColumn dataField='objectid' width='0%' isKey dataSort>objectid</TableHeaderColumn>
                <TableHeaderColumn dataField='applicant'  filter={ { type: 'TextFilter', delay: 200 } } dataSort >Applicant</TableHeaderColumn>
                <TableHeaderColumn dataField='address' filter={ { type: 'TextFilter', delay: 200 } } dataSort>Address</TableHeaderColumn>
                <TableHeaderColumn dataField='facilitytype' width='12Em'
                
                filter={ { type: 'SelectFilter', options: facilityType,selectText: '' }}  >Facility Type</TableHeaderColumn>
            </BootstrapTable> 
        </div>
    )
}
