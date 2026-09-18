import React from 'react';
export function DiagramGroup({ label, external = false, children, style }) {
  const c = external ? '#142032' : '#F71963';
  const borderC = external ? '#14203280' : '#F7196366';
  return (
    <div style={{ position: 'relative', border: '1.5px solid ' + borderC, borderRadius: 12, padding: '24px 16px 16px', margin: '20px 0 12px', fontFamily: 'var(--font-brand)', ...style }}>
      <div style={{ position: 'absolute', top: -12, left: 16, background: '#FFFFFF', padding: '0 8px', fontWeight: 500, fontSize: 14, color: c }}>{label}</div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: 10 }}>{children}</div>
    </div>
  );
}
