const url = "https://purpleschool.ru/course/javascript";

function getUrlParts(url) {
  if (typeof url !== "string") return;
  if (!(url.startsWith("http://") || url.startsWith("https://"))) return;
  if (url.indexOf(".") === -1) return; // если точки нет — некорректный хост

  const [protocolRaw, _, host, ...pathParts] = url.split("/");
  const protocol = protocolRaw.split(":")[0];
  const path = pathParts; // массив сегментов пути

  return [protocol, host, path];
}

const parts = getUrlParts(url);
if (!parts) {
  console.error("Неверный URL");
} else {
  const [protocol, host, path] = parts;
  console.log(protocol); // "https"
  console.log(host); // "purpleschool.ru"
  console.log(path); // ["course", "javascript"]
}
