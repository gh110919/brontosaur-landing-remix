import { config } from "dotenv";

(async function (): Promise<void> {
  try {
    const { env } = (await import("minimist")).default(process.argv.slice(2));

    const parsed = config({ path: env }).parsed!;

    const { GH_TOKEN, GH_USER, PROJECT } = parsed;

    const url = `https://api.github.com/repos/${GH_USER}/${PROJECT}/actions/secrets`;

    const sodium = (await import("libsodium-wrappers")).default;

    await sodium.ready;

    const {
      base64_variants,
      crypto_box_seal,
      from_base64,
      from_string,
      to_base64,
    } = sodium;

    const encryptSecret = async (secret: string) => {
      try {
        const { key, key_id } = await (
          await fetch(`${url}/public-key`, {
            headers: {
              Authorization: `Bearer ${GH_TOKEN}`,
              Accept: "application/vnd.github.v3+json",
            },
          })
        ).json();

        const { ORIGINAL } = base64_variants;

        return {
          encrypted_value: to_base64(
            crypto_box_seal(from_string(secret), from_base64(key, ORIGINAL)),
            ORIGINAL
          ),
          key_id,
        };
      } catch (error) {
        throw new Error(String(error));
      }
    };

    const addSecret = async (name: string, value: string) => {
      const { encrypted_value, key_id } = await encryptSecret(value);

      const { json, ok, statusText } = await fetch(`${url}/${name}`, {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${GH_TOKEN}`,
          Accept: "application/vnd.github.v3+json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          encrypted_value,
          key_id,
        }),
      });

      if (ok) {
        console.warn(`Secret ${name} added successfully.`);
      } else {
        console.error(`Error adding secret ${name}:`, statusText, await json());
      }
    };

    for (const [name, value] of Object.entries(parsed)) {
      await addSecret(name, value);
    }
  } catch (error) {
    throw new Error(String(error));
  }
})();
