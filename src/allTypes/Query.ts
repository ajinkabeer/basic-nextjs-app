import { queryType } from "@nexus/schema";

export const Query = queryType({
  definition(t) {
    t.string("name", () => "Ajin");
  },
});
