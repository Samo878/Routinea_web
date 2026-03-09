export function AnalyticsConfig() {
  const payload = {
    site: "routinea",
    env: "local",
    version: "1.0.0",
    routeHints: ["/", "/for-schools", "/workshops", "/about", "/contact"],
  };

  return (
    <script
      id="routinea-analytics-config"
      type="application/json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(payload) }}
    />
  );
}
