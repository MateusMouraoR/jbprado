import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: "https://jbpradopostepadrao.com.br", lastModified: new Date() },
    { url: "https://jbpradopostepadrao.com.br/sobre", lastModified: new Date() },
    { url: "https://jbpradopostepadrao.com.br/produtos", lastModified: new Date() },
    { url: "https://jbpradopostepadrao.com.br/contato", lastModified: new Date() },
  ];
}
