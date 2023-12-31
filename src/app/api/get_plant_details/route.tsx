export async function GET(req: Request) {
    const searchQuery = req.url.split('?')[1].split('=')[1]
    if (searchQuery !== null) {
        const result = await fetch(`https://trefle.io/api/v1/plants/search?token=${process.env.PUBLIC_NEXT_API_KEY}&q=${searchQuery}`)
        const data = await result.json()
        const plants = data
        return new Response(JSON.stringify(plants), {
            headers: {
                'Content-Type': 'application/json'
            }
        })
    }
}