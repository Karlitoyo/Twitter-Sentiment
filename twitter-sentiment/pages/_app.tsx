// import '../styles/globals.css'
// import '../styles/app.css'
// import 'tailwindcss/tailwind.css'

import { useState } from "react"

type Sentiment = 1 | 0 | -1


function MyApp({ Component, pageProps }) {
    const [comment, setComment] = useState("");
    const [sentiment, setSentiment] = useState<Sentiment>(0);

    return <>

        <Component {...pageProps} />

    </>
}

export default MyApp