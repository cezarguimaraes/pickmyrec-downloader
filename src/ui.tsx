'use strict';
import * as React from'react';
import * as PropTypes from'prop-types';
import {Text, Color} from 'ink';

type AppProps = {
	name?: string
}

const App: React.FunctionComponent<AppProps> = ({name}) => (
	<Text>
		Hey, <Color green>{name}</Color>
	</Text>
);

App.propTypes = {
	name: PropTypes.string
};

App.defaultProps = {
	name: 'Stranger'
};

module.exports = App;
