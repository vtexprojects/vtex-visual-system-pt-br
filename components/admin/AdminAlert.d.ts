/** Admin alert strip in the three product state colors. */
export interface AdminAlertProps {
  type?: 'success' | 'danger' | 'warning';
  children?: React.ReactNode;
  style?: React.CSSProperties;
}
export declare function AdminAlert(props: AdminAlertProps): JSX.Element;
