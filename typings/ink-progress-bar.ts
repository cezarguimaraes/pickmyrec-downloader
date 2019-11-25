declare module "ink-progress-bar" {
  interface ProgressBarProps {
    character?: string;
    percent?: number;
    left?: number;
    right?: number;
  }
  export default class ProgressBar extends React.Component<
    ProgressBarProps,
    any
  > {}
}
