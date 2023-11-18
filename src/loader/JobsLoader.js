
const cartLoader = async () => { 
    const loadedProducts = await fetch('https://json.extendsclass.com/bin/41aada01111b');
    const products = await loadedProducts.json(); 
    return products;
}
export default cartLoader;