import * as React from "react";
interface GradientProps {
	children?: React.ReactNode[] | React.ReactNode;
	name?:
		| "cristal"
		| "teen"
		| "mind"
		| "morning"
		| "vice"
		| "passion"
		| "fruit"
		| "instagram"
		| "atlas"
		| "retro"
		| "summer"
		| "pastel"
		| "rainbow";
	colors?: Array<string | object>;
}

declare const Gradient: React.SFC<GradientProps>;
export default Gradient;
