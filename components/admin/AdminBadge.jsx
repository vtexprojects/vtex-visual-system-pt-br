import React from 'react';
export function AdminBadge({ type = 'neutral', children, style }) {
  const t = {
    neutral: { bg: 'var(--admin-muted-5,#F2F4F5)', color: 'var(--admin-muted-1,#727273)' },
    success: { bg: 'var(--admin-success-faded,#EAFCE3)', color: 'var(--admin-success-text,#79B03A)' },
    danger: { bg: 'var(--admin-danger-faded,#FFE6E6)', color: 'var(--admin-danger,#FF4C4C)' },
    warning: { bg: 'var(--admin-warning-faded,#FFF6E0)', color: 'var(--admin-warning-text,#E19D00)' },
  }[type];
  return <span style={{ display: 'inline-block', background: t.bg, color: t.color, fontFamily: 'var(--font-admin)', fontSize: 12, fontWeight: 600, padding: '3px 10px', borderRadius: 999, ...style }}>{children}</span>;
}
