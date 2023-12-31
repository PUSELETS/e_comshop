import ProductDetails from "@/components/ProductDetails";

export const fetchCache = 'force-no-store';
export const dynamic = "force-dynamic";

export const productById = async (id) => {
    try {
      const res = await fetch(
        `https://e-comshop.vercel.app/api/admin/product-by-id?id=${id}`,
        {
          method: "GET",
          cache: 'no-store',
        }
      );
      const data = await res.json();
  
      return data;
    } catch (e) {
      console.log(e);
    }
  };   

  export const getAllAdminProducts = async () => {
    try {
      const res = await fetch("https://e-comshop.vercel.app/api/admin/all-product", {
        method: "GET",
        cache: 'no-store'
      });
  
      const data = await res.json();
     
  
      return data;
    } catch (error) {
      console.log(error);
    }
  };

export default async function ProductDetail({params}) {

    const productDetailsData = await productById(params.details)
    const productz = await getAllAdminProducts()

    return <ProductDetails dataC={ productDetailsData && productDetailsData.data } dataA={productz && productz.data} />
}