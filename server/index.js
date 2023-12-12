import express from "express";
import cors from "cors"
const app = express();
const port = 4000;

app.use(express.json());
app.use(cors())

let products = [
  {
    id: 1,
    name: "Premium Coffee Blend",
    price: 12.99,
    info: "A rich and flavorful coffee blend sourced from the finest beans around the world.",
    image: "https://images.unsplash.com/photo-1649056747314-74345cf99a9c?q=80&w=1960&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2,
    name: "Organic Green Tea",
    price: 9.99,
    info: "High-quality organic green tea leaves for a refreshing and healthy beverage.",
    image: "https://images.unsplash.com/photo-1615205597144-5c7c885291d2?q=80&w=1908&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 3,
    name: "Gourmet Chocolate Bar",
    price: 7.49,
    info: "Indulge in the smooth and velvety taste of our gourmet chocolate bar.",
    image: "https://images.unsplash.com/photo-1623000850293-0cbbc517c719?q=80&w=1915&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 4,
    name: "Fresh Squeezed Orange Juice",
    price: 5.99,
    info: "Experience the goodness of freshly squeezed oranges in every sip.",
    image: "https://images.unsplash.com/photo-1600271886742-f049cd451bba?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 5,
    name: "Artisanal Cheese Selection",
    price: 19.99,
    info: "A curated selection of artisanal cheeses for the connoisseur's palate.",
    image: "https://images.unsplash.com/photo-1561339429-d5da4e6e9105?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 6,
    name: "Exotic Fruit Basket",
    price: 29.99,
    info: "An assortment of exotic fruits to tantalize your taste buds.",
    image: "https://images.unsplash.com/photo-1485962093642-5f4386e84429?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 7,
    name: "Artisanal Honey Jar",
    price: 14.49,
    info: "Pure and natural artisanal honey, perfect for sweetening your favorite dishes.",
    image: "https://images.unsplash.com/photo-1471943311424-646960669fbc?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 8,
    name: "Premium Olive Oil",
    price: 16.99,
    info: "Cold-pressed premium olive oil for a touch of Mediterranean excellence.",
    image: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?q=80&w=1918&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 9,
    name: "Art Deco Ceramic Mug",
    price: 8.99,
    info: "Sip your favorite beverages in style with our art deco-inspired ceramic mug.",
    image: "https://images.unsplash.com/photo-1536936812504-0e77dc3f0b40?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 10,
    name: "Mixed Nuts Assortment",
    price: 11.99,
    info: "A crunchy blend of assorted nuts for a wholesome and satisfying snack.",
    image: "https://plus.unsplash.com/premium_photo-1663840074648-f4b6fa2803e8?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

let productIdCount = 11;

app.get("/products", (req, res) => {
  res.send(products);
});

app.get("/products/:id", (req, res) => {
  const id = req.params.id;
  const selectedProduct = products.find((x) => x.id === +id);
  if (selectedProduct) {
    res.status(200).send(selectedProduct);
  } else {
    res.status(400).json({ message: "Product not found" });
  }
});

app.post("/products", (req, res) => {
  if (!req.body.name || !req.body.price || !req.body.info || !req.body.image) {
    return res.status(400).json({ message: "All fields must be completed" });
  }
  const newProduct = {
    id: productIdCount++,
    name: req.body.name,
    price: +req.body.price,
    info: req.body.info,
    image: req.body.image,
  };
  products.push(newProduct);
  res.status(200).send(products);
});

app.put("/products/:id", (req, res) => {
  const id = req.params.id;
  const productIndex = products.findIndex(item=>item.id === +id)
  if (productIndex !== -1) {
      products[productIndex] = {
        ...products[productIndex],
        name: req.body.name,
        price: req.body.price,
        info: req.body.info,
        image: req.body.image,
      }
      res.status(200).send(products[productIndex]);
  }
  else{
    res.status(400).json({message:"Product not found"})
  }
});

app.delete("/products/:id", (req, res) => {
  const id = req.params.id;
  const product = products.find((item) => item.id === +id);
  if (product) {
    products = products.filter((product) => product.id !== +id);
    res.status(200).send(products);
  } else {
    res.status(400).json({ message: "Product not found" });
  }
});

app.listen(port, () => {
  console.log("Server is running");
});
