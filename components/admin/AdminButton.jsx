import React from 'react';
export function AdminButton({ variant = 'primary', size = 'regular', disabled = false, children, onClick, style }) {
  const v = {
    primary: { background: 'var(--admin-action-primary,#134CD8)', color: '#fff', border: 'none' },
    secondary: { background: 'var(--admin-action-secondary,#EEF3F7)', color: '#727273', border: 'none' },
    tertiary: { background: 'transparent', color: 'var(--admin-action-primary,#134CD8)', border: 'none' },
    danger: { background: 'var(--admin-danger,#FF4C4C)', color: '#fff', border: 'none' },
  }[variant];
  const s = size === 'small' ? { fontSize: 12, padding: '6px 12px' } : { fontSize: 14, padding: '10px 18px' };
  const d = disabled ? { background: 'var(--admin-disabled-bg,#F2F4F5)', color: '#727273', cursor: 'default' } : {};
  return (
    <button onClick={disabled ? undefined : onClick} style={{ fontFamily: 'var(--font-admin)', fontWeight: 600, borderRadius: 10, cursor: 'pointer', letterSpacing: 0, ...v, ...s, ...d, ...style }}>{children}</button>
  );
}
