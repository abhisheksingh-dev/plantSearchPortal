'use client'

import { PlantAPIModel } from "@/models/PlantAPIModel"
import { Loader2 } from "lucide-react"
import Image from "next/image"
import { useSearchParams } from "next/navigation"
import { useEffect, useState } from "react"

const SearchPage: React.FC = () => {
    const params = useSearchParams()
    const searchQuery = params.get('q')
    const [loading, setLoading] = useState(true)
    const [searchResults, setSearchResults] = useState<PlantAPIModel | null>(null)

    useEffect(() => {
        getSearchResults()
    }, [])

    async function getSearchResults() {
        const res = await fetch(`/api/get_plant_details?searchQuery=${searchQuery}`)
        const data = await res.json()
        setLoading(false)
        if (data.data.length > 0) setSearchResults(data)
        return data
    }

    return (
        <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col my-10">
            <h1 className="text-3xl font-bold text-start-gray-900">Search Results</h1>
            <span className="mb-10">Search Query: {searchQuery}</span>
            {loading ? <div className="flex">
                <span>Loading</span>
                <Loader2 className="animate-spin ml-2" />
            </div> : searchResults !== null ? <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                {
                    searchResults.data.map((e, i) => <div key={e.id} className="rounded-lg shadow-lg bg-white max-w-sm">
                        {e.image_url !== null ? <div className="relative h-[200px] w-full ">
                            <Image src={e.image_url!} alt={e.common_name ?? "No name"} layout={"fill"} objectFit={"cover"} fill={true} className="rounded-lg" />
                        </div> : <div className="center_div h-[200px] w-ful bg-slate-500 rounded-lg">[NO IMAGE PROVIDED]</div>}
                        <div className="px-6 py-4">
                            <div className="font-bold text-xl mb-2">#{i + 1} {e.common_name ?? "No name"}</div>
                            <p className="text-gray-700 text-base">
                                {e.scientific_name ?? "No scientific name"}
                            </p>
                        </div>
                    </div>)
                }
            </div> : <div>No results found</div>}
        </section>
    )
}

export default SearchPage