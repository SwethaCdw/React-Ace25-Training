


export const fetchProductDetails = async (category) => {
    const response = await fetch(`https://jsonmockserver.vercel.app/api/shopping/furniture/products?category=${category}`);
    const data = await response.json();
    return data;
}