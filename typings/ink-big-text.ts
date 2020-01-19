import * as React from "react";

interface BigTextProps {
	text: string;
	font?:
		| "block"
		| "simple"
		| "simpleBlock"
		| "3d"
		| "simple3d"
		| "chrome"
		| "huge";
	align?: "left" | "center" | "right";
	colors?:
		| "system"
		| "black"
		| "red"
		| "green"
		| "yellow"
		| "blue"
		| "magenta"
		| "cyan"
		| "white"
		| "gray";
	backgroundColor?:
		| "transparent"
		| "black"
		| "red"
		| "green"
		| "yellow"
		| "blue"
		| "magenta"
		| "cyan"
		| "white";
	letterSpacing?: number;
	lineHeight?: number;
	space?: boolean;
	maxLength?: number;
}
declare const BigText: React.SFC<BigTextProps>;
export default BigText;
