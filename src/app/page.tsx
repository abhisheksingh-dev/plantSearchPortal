'use client'

import { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { useRouter } from 'next/navigation'
import { AlertTriangleIcon, Loader2 } from 'lucide-react'
import { toast } from 'sonner'

export default function Home() {
  const [loading, setLoading] = useState(false)
  const [search, setSearch] = useState('')
  const router = useRouter()

  function handleSearch() {
    if (search === '') {
      toast(<div className='flex'>
        <AlertTriangleIcon className='mr-2 text-red-500' />
        <span className='self-center'>Please enter a search term before searching</span>
      </div>)
      return
    }
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 4000)
    router.push(`/search/?q=${search}`)
  }

  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center h-screen">
      <Card>
        <CardHeader>
          <CardTitle>Search for any plant</CardTitle>
          <CardDescription>Search for any plant and spices and get detailed information about them.</CardDescription>
        </CardHeader>
        <CardContent className='w-full'>
          <label htmlFor="search" className="sr-only">
            Search
          </label>
          <Input type="search" name="search" id="search" placeholder="Search" className='mb-5' value={search} onChange={(e) => setSearch(e.target.value)} />
          <Button onClick={handleSearch} type='submit' disabled={loading} className='flex'>
            {loading && <Loader2 className='animate-spin mr-2' />}
            <span>Search</span>
          </Button>
        </CardContent>
      </Card>
    </section>
  )
}
