import { objectType } from "@nexus/schema";
import { differenceInYears, differenceInMonths } from "date-fns";

export const Position = objectType({
  name: "Position",
  definition(t) {
    t.id("id");
    t.string("title");
    t.string("company");
    t.date("startDate", (position) => new Date(position.startDate));
    t.date("endDate", {
      nullable: true,
      resolve: (position) =>
        position.endDate ? new Date(position.startDate) : null,
    });
    t.int("years", ({ endDate, startDate }) =>
      differenceInYears(
        endDate ? new Date(endDate) : new Date(),
        new Date(startDate)
      )
    );

    //achievements
  },
});
