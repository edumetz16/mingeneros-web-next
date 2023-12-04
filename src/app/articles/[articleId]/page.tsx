import Breadcrumb from "@/components/breadcrumb"
import { getArticle } from "@/services/firestore"
import Image from 'next/image'
import Link from "next/link";



async function getData(articleId: string) {
  const articles = await getArticle(articleId);
  return articles;
}

export default async function Article({params:{articleId}}: {params:{articleId:string}}) {
  const breadcrumbParts = [{
    url: '/',
    name: 'Editorial Mingeneros'
  }]
  const article = await getData(articleId);
  return (
    <>
      {/* <Breadcrumb parts={breadcrumbParts}></Breadcrumb> */}
      <div className="container mt-8 grid grid-cols-12">

      <div className="col-span-12 md:col-span-6">

      <h1 className="text-2xl font-bold">{article.title}</h1>
      <div className="my-4">
        <p>{article.description}</p>
      </div>
      <div className="my-4">
        <h3 className="font-bold text-lg">Descargar</h3>
        {article.attachmentsExpanded.map((attachment: any,i:number) => 
        <div key={i} className="my-4 block p-4 bg-[#9283be] rounded flex items-center gap-4">
          <i className="download w-1/12"></i>
          <Link className="text-white w-11/12" href={attachment.url}>{attachment.name}</Link>
        </div>)}
      </div>
      </div>
      </div>

    </>
  )
}
