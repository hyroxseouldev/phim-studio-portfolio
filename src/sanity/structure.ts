import type { StructureResolver } from "sanity/structure";

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
  S.list()
    .title("Phim Studio Portfolio")
    .items([
      S.documentTypeListItem("works").title("Works"),
      S.documentTypeListItem("project").title("Projects"),
      S.documentTypeListItem("author").title("Authors"),
      S.divider(),
      ...S.documentTypeListItems().filter(
        (item) =>
          item.getId() &&
          !["works", "project", "author"].includes(item.getId()!)
      ),
    ]);
