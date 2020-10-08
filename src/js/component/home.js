import React from "react";
import { GameBoard } from "./gameboard.js";
//create your first component

export class Home extends React.Component {
	constructor() {
		super();
		this.state = {
			player: "X",
			winner: null
		};
	}
	switchPlayer = () => {
		this.setState({ player: this.state.player == "X" ? "O" : "X" });
	};
	render() {
		return (
			<div className="text-center mt-5">
				<h1>
					<strong>
						Sams maybe Cool <br />
						but probably wont work <br />
						Tic Tac Toe board in React.js
					</strong>
				</h1>
				<GameBoard
					switchPlayer={this.switchPlayer}
					player={this.state.player}
				/>
				<p className="lead">
					<a
						className="btn btn-lg mt-5 resetButton"
						href=""
						role="button">
						<strong>
							<strong>RESET</strong>
						</strong>
					</a>
				</p>
			</div>
		);
	}
}
