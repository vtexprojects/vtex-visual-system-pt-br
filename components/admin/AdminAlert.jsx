import React from 'react';
export function AdminAlert({ type = 'success', children, style }) {
  const t = {
    success: { bg: 'var(--admin-success-faded,#EAFCE3)', bar: 'var(--admin-success,#8BC34A)' },
    danger: { bg: 'var(--admin-danger-faded,#FFE6E6)', bar: 'var(--admin-danger,#FF4C4C)' },
    warning: { bg: 'var(--admin-warning-faded,#FFF6E0)', bar: 'var(--admin-warning,#FFB100)' },
  }[type];
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 12, background: t.bg, borderRadius: 'var(--admin-radius,4px)', padding: '12px 16px', fontFamily: 'var(--font-admin)', fontSize: 14, color: 'var(--admin-text-base,#3F3F40)', ...style }}>
      <span style={{ width: 8, height: 8, borderRadius: '50%', background: t.bar, flexShrink: 0 }}></span>
      <span style={{ lineHeight: 1.4 }}>{children}</span>
    </div>
  );
}
