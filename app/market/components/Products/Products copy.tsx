// "use client";
// import CartFilterSection from "./CartOrFilter/CartFilterSection";
// import Items from "./items/Items";
// import styles from "./Products.module.scss";
// import { useState, useEffect } from "react";
// import { Product, CartItem } from "@/app/types";
// import productsData from "../../../data";

// export default function Products() {
//   const [products, setProducts] = useState<Product[]>([]);
//   const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
//   const [activeFilter, setActiveFilter] = useState<string>("All Skins");
//   const [cartItems, setCartItems] = useState<CartItem[]>([]); // Use CartItem[] for cart

//   useEffect(() => {
//     setProducts(productsData);
//     setFilteredProducts(productsData);
//   }, []);

//   const handleFilterChange = (filter: string) => {
//     if (filter === activeFilter) return;
//     if (filter === "All Skins") {
//       setActiveFilter("All Skins");
//       setFilteredProducts(products);
//     } else {
//       const productType = filter as Product["type"];
//       if (
//         ["Pistols", "Mid-Tier", "Rifles", "Knives", "Gloves", "Cases"].includes(
//           productType
//         )
//       ) {
//         setActiveFilter(productType);
//         setFilteredProducts(
//           products.filter((product) => product.type === productType)
//         );
        
//         console.log(`Filtered products by type: ${productType} ${filteredProducts.length}`);
//       } else {
//         console.warn(`Unknown filter label: ${filter}`);
//       }
//     }
//   };

//   const addToCart = (productToAdd: Product) => {
//     setCartItems((prevItems) => {
//       const existingItem = prevItems.find(
//         (item) => item.id === productToAdd.id
//       );
//       if (existingItem) {
//         return prevItems.map((item) =>
//           item.id === productToAdd.id
//             ? { ...item, quantity: item.quantity + 1 }
//             : item
//         );
//       }

//       return [...prevItems, { ...productToAdd, quantity: 1 }];
//     });
//   };

//   // Remove from Cart Logic
//   const removeFromCart = (productId: string) => {
//     setCartItems((prevItems) =>
//       prevItems.filter((item) => item.id !== productId)
//     );
//   };

//   const removeAllFromCart = () => setCartItems([]);

  // return (
  //   <div className={styles.productsMain}>
  //     <Items
  //       products={filteredProducts}
  //       handleFilterChange={handleFilterChange}
  //       addToCart={addToCart}
  //       removeFromCart={removeFromCart}
  //       activeFilter={activeFilter}
  //       cartItems={cartItems}
  //     />
  //     <CartFilterSection
  //       cartItems={cartItems}
  //       removeFromCart={removeFromCart}
  //       removeAllFromCart={removeAllFromCart}
  //     />
  //   </div>
  // );
// }
