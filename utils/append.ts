import { appendFile, readFile } from "fs/promises";

(async function (): Promise<void> {
  try {
    const { updated, renewing, name } = (await import("minimist")).default(
      process.argv.slice(2)
    );

    const key = String(name).toUpperCase();

    const value = Buffer.from(await readFile(renewing, "utf-8")).toString(
      "base64"
    );

    await appendFile(updated, `\r${key}="${value}"\r`);
  } catch (error) {
    throw new Error(String(error));
  }
})();