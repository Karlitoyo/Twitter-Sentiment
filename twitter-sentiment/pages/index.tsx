import Link from 'next/link'
import Layout from '../components/Layout'
import { useEffect, useState } from "react"
import axios from 'axios'
import positive from '/public/positive.svg';
import negative from '/public/negative.svg';
import neutral from '/public/neutral.svg';
import Image from 'next/image'

type Sentiment = 1 | 0 | -1

function Emoji({ sentiment }: { sentiment: Sentiment }) {
  if (sentiment === 1) {
    return <Image src={positive} className="emoji" alt='pos' />
  }
  if (sentiment === 0) {
    return <Image src={neutral} className="emoji" alt='neu' />
  }

  return <Image src={negative} className="emoji" alt='neg' />
}

const IndexPage = () => {
  const [comment, setComment] = useState("");
  const [sentiment, setSentiment] = useState<Sentiment>(0);

  useEffect(() => {
    async function fetchSentiment(comment: string) {
      const result = await axios.post('http://localhost:4000/api/sentiment', {
        data: comment
      }).then((res) => res.data);

      setSentiment(result.sentiment)
    }

    fetchSentiment(comment);
  }, [comment]);

  return (
    <Layout title="Home | Next.js + TypeScript Example">
      <textarea
        placeholder='What do you think'
        value={comment}
        onChange={(e) => setComment(e.target.value)} />

      <Emoji sentiment={sentiment} />
      <p>
        <Link href="/about">
          <a>About</a>
        </Link>
      </p>
    </Layout>
  )
}

export default IndexPage
