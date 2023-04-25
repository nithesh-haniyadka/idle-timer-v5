import React, { useState } from 'react'
import { Button } from 'react-bootstrap';
import { BsSearch } from 'react-icons/bs';
// import Table from 'react-bootstrap/Table';
import {productList} from "../../src/Components/Mockdata/productlistJSON"


import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

function FirstSearchComponent() {
	
		
	const [products, setProducts] = useState(productList);
	const [searchVal, setSearchVal] = useState("");

	function handleSearchClick() {
		if (searchVal === "") { setProducts(productList); return; }
		const filterBySearch = productList.filter((item) => {
			if (item.toLowerCase()
				.includes(searchVal.toLowerCase())) { return item; }
		})
		setProducts(filterBySearch);
	}
	const mystyle = {
		marginLeft: "600px",
		marginTop: "10px",
		fontWeight: "700"
	};

	return (
		// <div>
		// 	<div style={mystyle}>
		// 		<input onChange={e => setSearchVal(e.target.value)}>
		// 		</input>
		// 		<BsSearch onClick={handleSearchClick} />
		// 	</div>
		// 	<div>

		// 		{products.map((product) => {
		// 			return (
		// 				<div style={mystyle}>{product}</div>
		// 			)
		// 		})
		// 		}

		// 	</div>
		// </div>

		<TableContainer component={Paper}>
     <Table aria-label="simple table">
       <TableHead>
	   <div style={mystyle}>
	   <input placeholder='search' onChange={e => setSearchVal(e.target.value)}></input>
	   <BsSearch onClick={handleSearchClick} />
	   </div>

         <TableRow>
           {/* <TableCell align='center'></TableCell> */}

         </TableRow>
       </TableHead>
       <TableBody align="center">
         {products.map((row) => (
           <TableRow key={row.id}>
             <TableCell component="th" scope="row" align='center'>
               {row}
             </TableCell>

           </TableRow>
         ))}
       </TableBody>
     </Table>
   </TableContainer>

	
	);
}

export default FirstSearchComponent;
