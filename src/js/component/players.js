// import React from "react";
import React from "react";
import PropTypes from "prop-types";
// import { render } from "node-sass";

export class Players extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			player1: null,
			player2: null
		};
	}

	render() {
		return (
			<div className={this.props.player ? "d-none" : "d-block"}>
				{/* <input
					id="player1"
					type="text"
					Placeholder="Player1"
					onChange={e => {
						this.setState({ player1: e.target.value });
					}}
				/> */}
				{/* <input
					id="player1"
					type="text"
					Placeholder="Player2"
					onChange={e => {
						this.setState({ player2: e.target.value });
					}}
				/> */}
				<div className="character">
					<button
						id="X"
						onClick={() =>
							this.props.newGame(
								"X",
								this.state.player1,
								this.state.player2
							)
						}>
						<i className="fab fa-xing" />
					</button>
					<button
						id="O"
						onClick={() =>
							this.props.newGame(
								"O",
								this.state.player1,
								this.state.player2
							)
						}>
						<i className="fab fa-digital-ocean" />
					</button>
				</div>
			</div>
		);
	}
}
Players.propTypes = {
	newGame: PropTypes.func,
	player: PropTypes.string
};
