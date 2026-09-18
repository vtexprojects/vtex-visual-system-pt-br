/** Grouping container for diagram nodes — white fill, border colored to match its contents, fieldset-style label. */
export interface DiagramGroupProps {
  /** Label overlapping the top-left border — never centered */
  label: string;
  /** true → Serious Black border (external systems); false → Rebel Pink (VTEX side) */
  external?: boolean;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}
export declare function DiagramGroup(props: DiagramGroupProps): JSX.Element;
