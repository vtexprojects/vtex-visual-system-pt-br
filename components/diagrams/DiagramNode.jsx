import React from 'react';
const kinds = {
  native:   { background: '#FFC4DD80', border: '1.5px solid var(--diagram-native-border,#F71963)', color: '#142032' },
  custom:   { background: 'var(--diagram-custom-fill,#F6F7F9)', border: '1px solid var(--diagram-custom-border,#14203233)', color: '#142032' },
  external: { background: 'var(--diagram-external-fill,#5B6E84)', border: 'none', color: '#FFFFFF' },
  middleware: { background: 'var(--diagram-middleware-fill,#2C4872)', border: 'none', color: '#FFFFFF' },
};
export function DiagramNode({ kind = 'native', label, sublabel, style }) {
  const k = kinds[kind] || kinds.native;
  const mid = kind === 'middleware';
  return (
    <div style={{ borderRadius: 8, padding: mid ? '18px 12px' : '14px 12px', textAlign: 'center', fontWeight: 500, fontFamily: 'var(--font-brand)', fontSize: 14, gridColumn: mid ? '1 / -1' : undefined, ...k, ...style }}>
      {label}
      {sublabel && <span style={{ display: 'block', fontWeight: 400, fontSize: 12, marginTop: 2, opacity: 0.85 }}>{sublabel}</span>}
    </div>
  );
}
