import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "inTrigo Gelateria Bern" },
      { name: "description", content: "Authentisches hausgemachtes Gelato seit 2019. Bümplizstrasse 116, Bern. Täglich 11–21 Uhr." },
      { property: "og:title", content: "inTrigo Gelateria Bern" },
      { property: "og:description", content: "Authentisches hausgemachtes Gelato seit 2019 in Bern-Bümpliz." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <iframe
      src="/intrigo.html"
      title="inTrigo Gelateria Bern"
      className="fixed inset-0 h-screen w-screen border-0"
    />
  );
}
