Grouping container clustering related DiagramNodes (e.g. "VTEX Marketplace Account", "Client Systems").

```jsx
<DiagramGroup label="VTEX Marketplace Account">
  <DiagramNode kind="native" label="Catalog" />
  <DiagramNode kind="native" label="Checkout" />
</DiagramGroup>
<DiagramGroup label="Client / External Systems" external>
  <DiagramNode kind="external" label="ERP" />
</DiagramGroup>
```

Pink border for VTEX-side groupings, black (`external`) for external-system groupings. Children lay out on an auto-fit grid.
