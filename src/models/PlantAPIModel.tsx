export type PlantAPIModel = {
    data: Array<{
        id: number
        common_name?: string
        slug: string
        scientific_name: string
        year: number
        bibliography: string
        author: string
        status: string
        rank: string
        family_common_name: any
        genus_id: number
        image_url?: string
        synonyms: Array<string>
        genus: string
        family: string
        links: {
            self: string
            plant: string
            genus: string
        }
    }>
    links: {
        self: string
        first: string
        last: string
    }
    meta: {
        total: number
    }
}
