/** Required top-left title lockup for VTEX architecture diagrams: bold pink "VTEX" + uppercase gray solution name. */
export interface DiagramTitleProps {
  /** Solution / diagram name, e.g. "Solution Architecture — Acme" */
  subtitle: string;
  style?: React.CSSProperties;
}
export declare function DiagramTitle(props: DiagramTitleProps): JSX.Element;
