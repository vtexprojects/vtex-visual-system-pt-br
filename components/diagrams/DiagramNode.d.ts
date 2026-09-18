/** One box in a VTEX architecture diagram, styled by its category. */
export interface DiagramNodeProps {
  /** Category — decides fill/border/text per the VTEX diagram standard */
  kind?: 'native' | 'custom' | 'external' | 'middleware';
  label: string;
  /** Regular-weight second line, e.g. "VTEX IO" */
  sublabel?: string;
  style?: React.CSSProperties;
}
export declare function DiagramNode(props: DiagramNodeProps): JSX.Element;
