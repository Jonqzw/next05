type Result = {
    pageId: string,
    title: string,
    extract: string,
    thumbmail?: {
        source: string,
        width: number,
        height: number
    }
}

type SearchResult = {
    query?: {
        pages?: Result[],
    },
}