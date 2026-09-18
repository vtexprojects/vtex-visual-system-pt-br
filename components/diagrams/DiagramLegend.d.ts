/** Required bottom-left legend mapping swatches to the diagram categories actually used. Never omit. */
export interface DiagramLegendProps {
  /** Which categories appear in the diagram (default: all four) */
  kinds?: Array<'native' | 'custom' | 'external' | 'middleware'>;
  style?: React.CSSProperties;
}
export declare function DiagramLegend(props: DiagramLegendProps): JSX.Element;
