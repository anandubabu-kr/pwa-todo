export const manifesto = {
  name: "todo PWA by AnB",
  short_name: "todo PWA",
  description: "An app that for todo .",
  icons: [
    {
      src: "logo.svg",
      sizes: "192x192",
      type: "image/png",
    },
    {
      src: "logo.svg",
      sizes: "512x512",
      type: "image/png",
    },
    {
      src: "logo.svg",
      sizes: "180x180",
      type: "image/png",
      purpose: "apple touch icon",
    },
    {
      src: "logo.svg",
      sizes: "225x225",
      type: "image/png",
      purpose: "any maskable",
    },
  ],
  theme_color: "#1a1a1a",
  background_color: "#1a1a1a",
  display: "standalone",
  scope: "/",
  start_url: "/",
  orientation: "portrait",
};
