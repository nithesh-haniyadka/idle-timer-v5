import React, { useState } from 'react'
import { BsSearch } from 'react-icons/bs';

function SecondSearchComponent() {
	const productList = ["Africa"
		, "India"
		, "Australia"
		, "New Zealand"
		, "Russia"
		, "China"];
		
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
		<div>
			<div style={mystyle}>
				<input onChange={e => setSearchVal(e.target.value)}>
				</input>
				<BsSearch onClick={handleSearchClick} />
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

export default SecondSearchComponent;
