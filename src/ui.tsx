"use strict";
import * as React from "react";
import { Box } from "ink";
import * as PropTypes from "prop-types";
import * as BigText from "ink-big-text";
import * as Gradient from "ink-gradient";

import Prog from "./prog";

type AppProps = {
	name?: string;
};

const App: React.FunctionComponent<AppProps> = ({}) => {
	// const bla = <BigText text="unicorns" />;
	// console.log(bla)
	return (
		<Box flexDirection={"column"}>
			<Gradient name="retro">
				<BigText text="PICK-DWNLD" />
			</Gradient>
			<Prog />
		</Box>
	);
};

App.propTypes = {
	name: PropTypes.string
};

App.defaultProps = {
	name: "Stranger"
};

module.exports = App;
