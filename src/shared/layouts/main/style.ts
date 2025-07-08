export const parantLayoutStyle: React.CSSProperties = {
  minHeight: "100vh",
};

export const siderStyle: React.CSSProperties = {
  overflow: "auto",
  height: "100vh",
  position: "fixed",
  insetInlineStart: 0,
  left: 0,
  top: 0,
  bottom: 0,
  scrollbarWidth: "thin",
  scrollbarGutter: "stable",
  border: "none",
  transition: "all .2s",
  // backgroundColor: "#ffffff", // white
  boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.06)",
};

export const siderLogoStyle: React.CSSProperties = {
  height: "64px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

export const headerStyle = (collapsed: boolean): React.CSSProperties => ({
  marginLeft: collapsed ? 0 : "200px",
  padding: "0 2rem 0 0",
  backgroundColor: "#ffffff", // white
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  position: "sticky",
  top: 0,
  zIndex: 1,
  gap: 8,
  transition: "all .25s",
});

export const footerStyle = (collapsed: boolean): React.CSSProperties => ({
  textAlign: "center",
  marginLeft: collapsed ? 0 : "200px",
  paddingTop: "1rem",
  paddingBottom: "1rem",
  transition: "all .25s",
});
