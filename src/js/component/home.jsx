import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import { ContactList } from "./contact_list.jsx";
//create your first component
const Home = () => {
	return (
		<div className="container">
			<ContactList />
		</div>
	);
};

export default Home;
