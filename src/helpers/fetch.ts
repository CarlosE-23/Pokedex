export default async function pFetch(url: string, signal: AbortSignal) {
  try {
    const res = await fetch(url, { signal });
    if (!res.ok)
      throw new Error(
        `Error ${res.status}: ${
          res.statusText || "error when making the request"
        }`
      );
    const json = await res.json();
    return json;
  } catch (err) {
    return err;
  }
}
