import React from "react";
import NavBar from "./navbar.jsx";
import Jumbotron from "./jumbotron.jsx";
import Card from "./card.jsx";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<div>
		<NavBar />
		<Jumbotron
				header="Album Example"
				jumbotrontext="Something short and leading about the collection below—its contents, the creator, etc. Make it short and sweet, but not too short so folks don't simply skip over it entirely."
				btnurl="#"
				btntitle="Button name"
		
		/>
		<div className ='d-flex justify-content-between flex-wrap'>
		<Card
				imgurl= 'https://picsum.photos/id/237/200/300'
				title="Picture1"
				cardtext="My one picture"
				btnurl="#"
				btntitle="Button name"
				/>
		<Card
				imgurl="https://picsum.photos/id/237/200/300"
				title="Picture2"
				cardtext="My one picture"
				btnurl="#"
				btntitle="Button name"
						/>

		<Card
				imgurl="https://picsum.photos/id/237/200/300"
				title="Picture3"
				cardtext="My one picture"
				btnurl="#"
				btntitle="Button name"
				/>
		<Card
				imgurl="https://picsum.photos/id/237/200/300"
				title="Picture4"
				cardtext="My one picture"
				btnurl="#"
				btntitle="Button name"
				/>
		<Card
				imgurl="https://picsum.photos/id/237/200/300"
				title="Picture5"		
				cardtext="My one picture"
				btnurl="#"
				btntitle="Button name"
				/>
		<Card
				imgurl="https://picsum.photos/id/237/200/300"
				title="Picture6"		
				cardtext="My one picture"
				btnurl="#"
				btntitle="Button name"
				/>
		</div>
		</div>
	
	);
};

export default Home;
