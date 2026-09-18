import React from 'react';
export function AdminInput({ label, placeholder, value, onChange, helper, error, style }) {
  return (
    <label style={{ display: 'block', fontFamily: 'var(--font-admin)', fontSize: 14, color: 'var(--admin-text-base,#3F3F40)', ...style }}>
      {label && <span style={{ display: 'block', fontWeight: 600, marginBottom: 4 }}>{label}</span>}
      <input placeholder={placeholder} value={value} onChange={onChange} style={{ width: '100%', boxSizing: 'border-box', padding: '10px 12px', fontSize: 14, fontFamily: 'inherit', color: 'inherit', background: '#fff', border: '1px solid ' + (error ? 'var(--admin-danger,#FF4C4C)' : 'var(--admin-muted-3,#CACBCC)'), borderRadius: 'var(--admin-radius,4px)', outline: 'none' }} />
      {(error || helper) && <span style={{ display: 'block', fontSize: 12, marginTop: 4, color: error ? 'var(--admin-danger,#FF4C4C)' : 'var(--admin-text-muted,#979899)' }}>{error || helper}</span>}
    </label>
  );
}
