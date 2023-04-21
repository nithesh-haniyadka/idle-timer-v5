// import React from "react";
  
// const Home = () => {
//   return (
//     <div>
//       <h1>Home Page</h1>
//     </div>
//   );
// };
  
// export default Home;



import React, { useState } from 'react'
import { Button } from 'react-bootstrap';
// import { BsSearch } from 'react-icons/bs';

function FirstSearchComponent() {
	const productList = ["blue pant"
		, "black pant"
		, "blue shirt"
		, "black shoes"
		, "brown shoes"
		, "white pant"
		, "white shoes"];
		
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
		marginLeft: "400px",
		marginTop: "10px",
		fontWeight: "700"
	};

	return (
		<div>
			<div style={mystyle}>
				<input onChange={e => setSearchVal(e.target.value)}>
				</input>
				<Button onClick={handleSearchClick} />
			</div>
			<div>

				{products.map((product) => {
					return (
						<div style={mystyle}>{product}</div>
					)
				})
				}

			</div>
		</div>
	);
}

export default FirstSearchComponent;
