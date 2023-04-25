import React, { useState,useEffect } from 'react'
import {usermockdataDetais} from "../Mockdata/mockDataJSON"
import { MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';


function MockData() {

    const [value,setValue]=useState("");

    const [dataSource,setdatSource]= useState(usermockdataDetais);
    const [tableFilter,setTableFilter]= useState([]);

    const filterData= (e)=>{
        if(e.target.value !=""){
            setValue(e.target.value);
            const filterTable  =dataSource.filter(o=>Object.keys(o).some(k=>String(o[k]).toLowerCase().includes(e.target.value.toLowerCase())));
            setTableFilter([...filterTable])
        }else{
            setValue(e.target.value);
            setdatSource([...dataSource])
        }
    }

 
    return (
        <div className='container mt-5'>
            <div className='input-group mb-3'>
                <input type="text" className='form-control' placeholder='Search' aria-label='username' value={value} onChange={filterData}/>
            </div>
        <MDBTable>
      <MDBTableHead>
        <tr>
          <th scope='col'>#</th>
          <th scope='col'>First Name</th>
          <th scope='col'>Last name</th>
          <th scope='col'>Email</th>
        </tr>
      </MDBTableHead>
      <MDBTableBody>
         {value.length>0 ?tableFilter.map((data)=>{
            return(
                <tr>
                    <td>{data.id}</td>
                    <td>{data.firstName}</td>
                    <td>{data.lastName}</td>
                    <td>{data.email}</td>
                </tr>
            )
         }):dataSource.map((data)=>{
            return(
                <tr>
                    <td>{data.id}</td>
                    <td>{data.firstName}</td>
                    <td>{data.lastName}</td>
                    <td>{data.email}</td>
                </tr>
            )
         })}
</MDBTableBody>
</MDBTable>


      </div>
    );
  }
  
  export default MockData;
