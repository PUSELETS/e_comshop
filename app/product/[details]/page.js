import ProductDetails from "@/components/ProductDetails";
import { data } from "autoprefixer";

export const productById = async (id) => {
    try {
      const res = await fetch(
        `https://e-comshop.vercel.app/admin/product-by-id?id=${id}`,
        {
          method: "GET",
          cache: "no-store",
        }
      );
  
      const data = await res.json();
  
      return data;
    } catch (e) {
      console.log(e);
    }
  };

    

export default async function ProductDetail({params}) {

    const productDetailsData = await productById(params.details)

    return <ProductDetails data={ productDetailsData && productDetailsData.data } />
}