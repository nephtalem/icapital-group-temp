export function getStrapiImageUrl(url: string): string {
  if (!url) return "";
  return url.startsWith("http") ? url : `${"http://localhost:1337"}${url}`;
}
