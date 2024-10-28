import React from "react";

//include images into your bundle
import Navbar from "./navbar.jsx";
import Jumbotron from "./jumbotron.jsx";
import Card from "./card.jsx";
import Footer from "./footer.jsx";
import Amarillo from "/src/img/amarillo.jpg";
import Cristal from "/src/img/cristal.jpg";
import Esmeralda from "/src/img/esmeralda.jpg";
import Platino from "/src/img/platino.jpg";

//create your first component
const Home = () => {
	return (
		<div>	
			<Navbar/>
			<div className="container">
				<Jumbotron/>
				<div className="row d-flex">
					<Card imagen={Amarillo}/>
					<Card imagen={Cristal}/>
					<Card imagen={Esmeralda}/>
					<Card imagen={Platino}/>
				</div>
			</div>
			<Footer/>
		</div>
	);
};

export default Home;
