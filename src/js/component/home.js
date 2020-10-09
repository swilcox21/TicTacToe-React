import React from "react";
import { GameBoard } from "./gameboard.js";
import { Players } from "./players.js";
import PropTypes from "prop-types";
//create your first component

export class Home extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			player: null,
			winner: null
		};
	}
	onWinner = winner => {
		this.setState({ winner: winner });
	};
	switchPlayer = () => {
		this.setState({ player: this.state.player == "X" ? "O" : "X" });
	};
	newGame = (player, player1, player2) => {
		this.setState({
			player: player,
			player1: player1,
			player2: player2
		});
	};
	renderMessage = () => {
		if (this.state.player == null) {
			return <h1>!! Choose Your Character !!</h1>;
		} else if (this.state.winner == null) {
			return (
				<h2>
					Hey {this.state.player}
					<br /> what are you waiting for?
					<br /> the ice to FREEZE?!
				</h2>
			);
		} else if (this.state.winner != null) {
			return (
				<h1>
					{this.state.winner} wins! {this.state.winner} wins!
				</h1>
			);
		}
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
				<h1>{this.renderMessage()}</h1>
				<Players newGame={this.newGame} player={this.state.player} />
				<GameBoard
					switchPlayer={this.switchPlayer}
					player={this.state.player}
					onWinner={this.onWinner}
				/>
			</div>
		);
	}
}

Home.propTypes = {
	pickWinner: PropTypes.func,
	onWinner: PropTypes.func
};
