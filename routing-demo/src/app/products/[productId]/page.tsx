export default async function ProductList({ params }: {
    params: Promise<{productId: string}>
}) {
    const productId = (await params).productId

    return <div>
        <h1>Details about product {productId} </h1>
    </div>
}
  