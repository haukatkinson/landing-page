import React from "react";
import NavBar from "./navbar.jsx";
import Jumbotron from "./jumbotron.jsx";
import Card from "./card.jsx";
import CardDeck from "./carddeck.jsx";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const ImgList = ["https://placezombie.com/300x100", "https://placezombie.com/300x100","https://placezombie.com/300x100","https://placezombie.com/300x100"]
	return (
		<div>
		<NavBar />
		<Jumbotron />
		<div class ='d-flex justify-content-between'>
		<Card
		Imgsrc="https://placezombie.com/300x100"
		Title="Picture1"
		Description="My first picture"
				/>
		<Card
						Imgsrc="https://placezombie.com/300x100"
						Title="Picture1"
						Description="My one picture"
						/>

		<Card
				Imgsrc="https://placezombie.com/300x100"
				Title="Picture2"
				Description="My second picture"
				/>
		<Card
				Imgsrc="https://placezombie.com/300x100"
				Title="Picture3"
				Description="My third picture"
				/>
		<Card
				Imgsrc="https://placezombie.com/300x100"
				Title="Picture4"		Description="My forth picture"
				/>
		</div>
		</div>
	);
};

export default Home;
