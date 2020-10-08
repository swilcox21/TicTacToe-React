import React from "react";
import PropTypes from "prop-types";
var myEx = (
	<div className="X">
		<i className="fab fa-xing" />
	</div>
);
var myO = (
	<div className="O">
		<i className="fab fa-digital-ocean" />
	</div>
);
// const xCombos2 = [
// 	[0, 1, 2],
// 	[3, 4, 5],
// 	[6, 7, 8],
// 	[0, 3, 6],
// 	[1, 4, 7],
// 	[2, 5, 8],
// 	[2, 4, 6],
// 	[0, 4, 8]
// ];
export class GameBoard extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			boxValues: ["", "", "", "", "", "", "", "", ""]
		};
	}
	// pickWinner = wArray => {
	//     const wCombos = [
	//         [1, 1, 1, 0, 0, 0, 0, 0, 0],
	//         [0, 0, 0, 1, 1, 1, 0, 0, 0],
	//         [0, 0, 0, 0, 0, 0, 1, 1, 1],
	//         [1, 0, 0, 1, 0, 0, 1, 0, 0],
	//         [0, 1, 0, 0, 1, 0, 0, 1, 0],
	//         [0, 0, 1, 0, 0, 1, 0, 0, 1],
	//         [1, 0, 0, 0, 1, 0, 0, 0, 1],
	//         [0, 0, 1, 0, 1, 0, 1, 0, 0]
	//     ];
	//     pickWinner.forEach(winningCombo => {
	//         var winner = this.checkWinningCombo(
	//             winningCombo,
	//             currentSquareValue
	//         );
	//         if(winner != null){
	//             this.props.onWinner(this.props.player)
	//         }
	//     })
	//     return null
	// };
	upDateMove = index => {
		var newBoxValue = this.state.boxValues.map((item, i) => {
			if (i == index) {
				return this.props.player;
			}
			return item;
		});
		this.setState({ boxValues: newBoxValue });
		this.props.switchPlayer();
		this.pickWinner(newBoxValue);
	};
	render() {
		return (
			<div className="text-center mt-5">
				<div className="container row mx-auto">
					<div
						className="box 1 col-4 mx-auto"
						onClick={() => {
							this.upDateMove(0);
						}}>
						{this.state.boxValues[0] == "X"
							? myEx
							: this.state.boxValues[0] == "O"
								? myO
								: ""}
					</div>
					<div
						className="box 2 col-4 mx-auto"
						onClick={() => {
							this.upDateMove(1);
						}}>
						{this.state.boxValues[1] == "X"
							? myEx
							: this.state.boxValues[1] == "O"
								? myO
								: ""}
					</div>
					<div
						className="box 3 col-4 mx-auto"
						onClick={() => {
							this.upDateMove(2);
						}}>
						{this.state.boxValues[2] == "X"
							? myEx
							: this.state.boxValues[2] == "O"
								? myO
								: ""}
					</div>
					<div
						className="box 4 col-4 mx-auto"
						onClick={() => {
							this.upDateMove(3);
						}}>
						{this.state.boxValues[3] == "X"
							? myEx
							: this.state.boxValues[3] == "O"
								? myO
								: ""}
					</div>
					<div
						className="box 5 col-4 mx-auto"
						onClick={() => {
							this.upDateMove(4);
						}}>
						{this.state.boxValues[4] == "X"
							? myEx
							: this.state.boxValues[4] == "O"
								? myO
								: ""}
					</div>
					<div
						className="box 6 col-4 mx-auto"
						onClick={() => {
							this.upDateMove(5);
						}}>
						{this.state.boxValues[5] == "X"
							? myEx
							: this.state.boxValues[5] == "O"
								? myO
								: ""}
					</div>
					<div
						className="box 7 col-4 mx-auto"
						onClick={() => {
							this.upDateMove(6);
						}}>
						{this.state.boxValues[6] == "X"
							? myEx
							: this.state.boxValues[6] == "O"
								? myO
								: ""}
					</div>
					<div
						className="box 8 col-4 mx-auto"
						onClick={() => {
							this.upDateMove(7);
						}}>
						{this.state.boxValues[7] == "X"
							? myEx
							: this.state.boxValues[7] == "O"
								? myO
								: ""}
					</div>
					<div
						className="box 9 col-4 mx-auto"
						onClick={() => {
							this.upDateMove(8);
						}}>
						{this.state.boxValues[8] == "X"
							? myEx
							: this.state.boxValues[8] == "O"
								? myO
								: ""}
					</div>
				</div>
			</div>
		);
	}
}

GameBoard.propTypes = {
	switchPlayer: PropTypes.func,
	player: PropTypes.string
};
