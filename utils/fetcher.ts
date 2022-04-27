export const fetcher = (url: string) => fetch(url)
    .then(r => {
        try {
            return r.json()
        } catch(e) {
            return null
        }
    })
    .catch(_ => null)