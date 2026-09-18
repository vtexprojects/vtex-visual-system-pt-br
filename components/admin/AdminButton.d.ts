/** Admin (product UI) button — blue-led per styleguide.vtex.com; never Rebel Pink for actions. */
export interface AdminButtonProps {
  variant?: 'primary' | 'secondary' | 'tertiary' | 'danger';
  size?: 'regular' | 'small';
  disabled?: boolean;
  onClick?: () => void;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}
export declare function AdminButton(props: AdminButtonProps): JSX.Element;
