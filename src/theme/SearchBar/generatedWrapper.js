const lunr = require("@cmfcmf/docusaurus-search-local/lib/lunr");
// @ts-expect-error
import * as data from "./generated.js";
export const tokenize = data.tokenize;
export const mylunr = data.mylunr;
