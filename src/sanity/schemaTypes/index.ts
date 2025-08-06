import { type SchemaTypeDefinition } from "sanity";

import { blockContentType } from "./blockContentType";
import { worksType } from "./worksType";
import { projectType } from "./projectType";
import { authorType } from "./authorType";
import { estimateType } from "./estimateType";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [blockContentType, worksType, projectType, authorType, estimateType],
};
