import { AgendaCategory } from "@/config/types";

export function formatPath(path: string) {
  const replacedString = path
    .replace(/%20/g, " ")
    .replace(/%2C/g, ",")
    .replace(/%3A/g, ":")
    .replace(/([a-z])([A-Z])/g, "$1$2");

  return replacedString;
}
