import type { Metadata } from 'next'


export const metadata: Metadata = {
  title: 'Editorial mingeneros',
  description: 'Editorial mingeneros',
}

export default function ArticleLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
    {children}
    </>
  )
}
