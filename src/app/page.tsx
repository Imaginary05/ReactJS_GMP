'use client'

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
import Movies from './movies/page';
import { useRouter } from 'next/navigation';

export default function Home () {
  const router = useRouter()

  router.push('movies')
  // eslint-disable-next-line react/react-in-jsx-scope
  return <Movies/>
}
