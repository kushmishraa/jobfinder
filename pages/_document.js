import { Html, Head, Main, NextScript } from 'next/document'
import { event } from '../component/utilfunction'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <script async src="https://www.googletagmanager.com/gtag/js?id=G-W8XKZKXB6S"></script>
      <script
        dangerouslySetInnerHTML={{
        __html: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-W8XKZKXB6S');
      `}}
      />

      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
  
}
