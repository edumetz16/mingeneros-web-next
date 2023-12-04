import Breadcrumb from "@/components/breadcrumb"
import { getArticles } from "@/services/firestore"
import Image from 'next/image'
import Link from "next/link";



async function getData() {
  const articles = await getArticles();
  return articles;
}

export default async function Home() {
  const breadcrumbParts = [{
    url: '/',
    name: 'Editorial Mingeneros'
  }]
  const articles = await getData();
  return (
    <>
      <Breadcrumb parts={breadcrumbParts}></Breadcrumb>
      <div className="container mt-8">

      <h2 className="text-2xl font-bold">Ultimas publicaciones</h2>
      {articles.map((article,i) => 
      <div key={i} className="my-4">
        <Link className="font-bold text-[#9283be]" href={`/articles/${article.originalId}`}>{article.title}</Link>
        <p>{article.description}</p>
      </div>
      )}
      </div>
    </>
  )
}
