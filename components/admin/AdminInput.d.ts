/** Admin text input with label, helper and error states. */
export interface AdminInputProps {
  label?: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: any) => void;
  helper?: string;
  error?: string;
  style?: React.CSSProperties;
}
export declare function AdminInput(props: AdminInputProps): JSX.Element;
