import * as React from "react";
const { Box, Color } = require("ink");
import ProgressBar from "ink-progress-bar";

const Progress: React.FunctionComponent = () => {
  const [percent, setPercent] = React.useState(0)

  React.useEffect(() => {
    if (percent >= 100) return;
    const id = setTimeout(() => setPercent(percent + 1), 200);
    return () => clearTimeout(id)
  })

  const text = `Total: `
  return (<Box>
    {text}
    <Color greenBright>
      <ProgressBar left={text.length}
      percent={percent/100}/>
    </Color>
  </Box>)
}

export default Progress;