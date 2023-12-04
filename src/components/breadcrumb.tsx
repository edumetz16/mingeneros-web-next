import Link from "next/link";

type BreadcrumbPart = {
  url: string,
  name: string
}
const Breadcrumb = ({parts}: {parts: BreadcrumbPart[]}) =>{
  return <>
    <div className="bg-[#bce5f8] flex justify-center h-12 items-center">
    <div className="container">
      {parts.map(part => <>
        <Link className="text-black" href={part.url}>{part.name}</Link>
      </>)}
      </div>
    </div>
  </>
}

export default Breadcrumb;