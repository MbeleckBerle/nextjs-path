import { Metadata } from "next";



type Props = {
    params: Promise<{ productId: string }>;
};


export const generateMetadata = async ({ params }: Props): Promise<Metadata> => {
    const id = (await params).productId;

    const title = await new Promise((resolve) => {
        setTimeout(() => {
            resolve(`iPhone ${id}`)
        }, 100)
    })
    return {title: `Product ${id}`}
}



export default async function ProductList({ params }: {
    params: Promise<{productId: string}>
}) {
    const productId = (await params).productId

    return <div>
        <h1>Details about product {productId} </h1>
    </div>
}
  