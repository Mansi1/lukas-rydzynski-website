import packagejson from "../../package.json"

export const getRouterBaseName = () => {
  const [, part] = packagejson.homepage.split("//")
  return part.substring(part.indexOf("/"))
}
