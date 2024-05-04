import { createContext, useState } from "react";
import ItemList from "./components/ItemList";


export const ItemContext = createContext();

const App = () => {
  const [products, setProducts] = useState([
    {
      id: 1,
      title: "iPhone 12",
      description: "The iPhone 12, released in 2020, boasts a sleek flat-edge design and powerful A14 Bionic chip, delivering high performance and a vibrant Super Retina XDR display. With its advanced dual-camera system and support for 5G connectivity, the iPhone 12 offers an enhanced photography experience and faster download speeds. Its Ceramic Shield front cover provides improved durability, while MagSafe technology enables seamless attachment of accessories. The iPhone 12 is available in a range of stunning colors and sizes, catering to various preferences and lifestyles.",
      price: 549,
      discountPercentage: 12.96,
      rating: 4.69,
      stock: 94,
      brand: "Apple",
      category: "smartphones",
      thumbnail: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-13-select-2021?wid=940&hei=1112&fmt=jpeg&qlt=80&.v=1631768766000",
      images: [
        "https://i.dummyjson.com/data/products/1/1.jpg",
        "https://i.dummyjson.com/data/products/1/2.jpg",
        "https://i.dummyjson.com/data/products/1/3.jpg",
        "https://i.dummyjson.com/data/products/1/4.jpg",
        "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
      ],
    }
    
  ]);


  const increaseQuantity = (id, quantity) => {
    const updatedProducts = products.map((product) => {
      if (product.id === id) {
        const originalQuantity = product.quantity || 1; // default to 1 if original quantity is not set or is 0
        product.quantity = quantity;
        const newPrice = (product.price / originalQuantity) * quantity;
        product.price = isNaN(newPrice) ? product.price : newPrice;
      }
      return product;
    });
    setProducts(updatedProducts);
  };
  
  
  
  
  




  return (
    
    <ItemContext.Provider value={{ products, increaseQuantity }}>
      <div>
       
       
        <ItemList />
        
      </div>
    </ItemContext.Provider>
  
  );
};

export default App;
