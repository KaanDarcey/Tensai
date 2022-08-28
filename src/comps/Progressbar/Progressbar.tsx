import * as sc from "./Progressbar.styles";

export interface ProgressbarProps {
  current: number;
  total: number;
}

const Progressbar = ({current, total, ...moreProps}: ProgressbarProps) => {
  return (
    <sc.Container {...moreProps}>
      <sc.Bar data-cy="ProgressbarBar" value={(current / total) * 100} />
      <sc.Count>
        {current}/{total}
      </sc.Count>
    </sc.Container>
  );
};

const defaultProps = {
  current: 0,
  total: 100,
};

Progressbar.displayName = "Progressbar";
Progressbar.defaultProps = defaultProps;

export default Progressbar;
