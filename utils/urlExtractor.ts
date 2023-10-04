export default function urlExtractor(url: string): [string, string] {
  const urlText = url.split('">')[1].split("</a>")[0];
  const urlLink = url.split('">')[0].split('href="')[1];
  return [urlText, urlLink];
}
