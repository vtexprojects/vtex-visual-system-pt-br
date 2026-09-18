/** Status badge for Admin tables and lists. */
export interface AdminBadgeProps {
  type?: 'neutral' | 'success' | 'danger' | 'warning';
  children?: React.ReactNode;
  style?: React.CSSProperties;
}
export declare function AdminBadge(props: AdminBadgeProps): JSX.Element;
