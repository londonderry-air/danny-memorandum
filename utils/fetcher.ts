export const fetcher = (url: string) => fetch(url)
    .then(r => r.json())
    .catch(_ => null)