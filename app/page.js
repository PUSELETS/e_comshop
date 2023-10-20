import fetch from 'node-fetch';
import Home from './home';

export const getAllAdminProducts = async () => {
  try {
    const res = await fetch("https://PUSELETS.github.io/e_comshop/api/admin/all-product", {
      method: "GET",
      cache: "no-store",
    });

    const data = await res.json();
   

    return data;
  } catch (error) {
    console.log(error);
  }
};

export default async function AdminAllProducts() {

  const allAdminProducts = await getAllAdminProducts()

  return <Home data={allAdminProducts && allAdminProducts.data} />
}