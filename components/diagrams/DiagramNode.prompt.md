One color-coded box in a VTEX architecture/solution diagram — every box must be exactly one of the four categories.

```jsx
<DiagramNode kind="native" label="Catalog" />
<DiagramNode kind="custom" label="Custom App" sublabel="VTEX IO" />
<DiagramNode kind="external" label="ERP" />
<DiagramNode kind="middleware" label="Integration Middleware" sublabel="Single integration path" />
```

Kinds: `native` (Bubble Gum fill, pink border), `custom` (white, black border), `external` (Serious Gray), `middleware` (Serious Black, spans full grid width — render as a banner, never a small box). Never invent a fifth category or use Action Blue.
