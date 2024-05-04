import { useContext } from "react";
import { ItemContext } from "../App";

const ItemList = () => {
  const { products, increaseQuantity } = useContext(ItemContext);

  return (
    <div style={{ marginTop: "20px", padding: "30px" }}>
      {products.map((product) => (
        <div
          key={product.id}
          style={{ alignItems: "center", marginBottom: "20px" }}
        >
          <div style={{ display: "flex", marginBottom: "120px" }}>
            
            <div style={{ marginRight: "40px" }}>
              <img
                src={product.thumbnail}
                alt={product.title}
                style={{ width: "300px", height: "300px", objectFit: "cover" }}
              />
            </div>
           
            <div style={{ flex: "1" }}>
              <h3>{product.title}</h3>
              <p
                style={{
                  maxHeight: "300px",
                  maxWidth: "500px",
                  overflow: "hidden",
                }}
              >
                {product.description}
              </p>
            </div>
           
            <div
              style={{
                display: "flex",
                alignItems: "center",
                marginRight: "0px",
              }}
            >
              <select
                onChange={(e) =>
                  increaseQuantity(product.id, parseInt(e.target.value))
                }
              >
                {[...Array(product.stock).keys()].map((quantity) => (
                  <option
                    key={quantity + 1}
                    value={quantity + 1}
                    style={{ color: "blue" }}
                  >
                    {quantity + 1}
                  </option>
                ))}
              </select>
            </div>
           
            <div style={{ marginRight: "30px" }}></div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                marginRight: "50px",
              }}
            >
              <p style={{fontSize: "20px" }}>
                Price: <b>${product.price}</b>
              </p>
            </div>
          </div>
          <hr></hr>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginTop: "10px",
            }}
          >
            <p style={{ marginRight: "10px" }}>
              <b>SUBTOTAL:</b>{" "}
            </p>
            <p style={{ marginRight: "40px", fontSize: "20px" }}>
              <b>${product.price}</b>
            </p>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <p style={{ marginRight: "10px" }}>
              <b>SHIPPING:</b>{" "}
            </p>
            <p style={{ marginRight: "40px", fontSize: "20px"  }}>
              <b>FREE</b>
            </p>
          </div>

          <hr></hr>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <p style={{ marginRight: "10px", fontSize: "25px" }}>
              <strong>TOTAL</strong>:{" "}
            </p>
            <p style={{ marginRight: "40px", fontSize: "25px" }}>
              <b>${product.price}</b>
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
