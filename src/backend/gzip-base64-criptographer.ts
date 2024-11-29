import { writeFileSync, readFileSync } from "fs";
import { deflateSync, inflateSync } from "zlib";

export const encoder = (inputFile: string, outputFile: string) => {
  writeFileSync(
    outputFile,
    deflateSync(readFileSync(inputFile, "utf-8")).toString("base64"),
    "utf-8"
  );
};

export const decoder = (encoded: string) => {
  return inflateSync(Buffer.from(encoded, "base64")).toString("utf-8");
};
