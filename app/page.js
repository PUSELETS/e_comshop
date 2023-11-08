import Home from './home';

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

export default async function AdminAllProducts() {
 
  const allAdminProducts = await getAllAdminProducts()

  return <Home data={allAdminProducts && allAdminProducts.data} />
}