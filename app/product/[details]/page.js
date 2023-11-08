import ProductDetails from "@/components/ProductDetails";



export const productById = async (id) => {
    try {
      const res = await fetch(
        `https://e-comshop.vercel.app/api/admin/product-by-id?id=${id}`,
        {
          method: "GET",
          next: {revalidate: 1},
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
      });
  
      const data = await res.json();
     
  
      return data;
    } catch (error) {
      console.log(error);
    }
  };

export const revalidate = 2 ;

export default async function ProductDetail({params}) {

    const productDetailsData = await productById(params.details)
    const productz = await getAllAdminProducts()

    return <ProductDetails dataC={ productDetailsData && productDetailsData.data } dataA={productz && productz.data} />
}