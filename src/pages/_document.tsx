import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
// router.post("url/$id", (req, res) => {
//     res.send(req.params.id);
// };


// const addProduct = (product) => {
//   categories.find((category) => category.id === product.category).products.push(product);
// }
const product = {
  id: "1",
  name: "Product 1",
  description: "Product 1 description",
  img: "https://picsum.photos/200/300",
  price: 100,
  category: "1",
  //   addons: [
  //     {
  //       id: "1",
  //       name: "Addon 1",
  //       description: "Addon 1 description",
  //       img: "https://picsum.photos/200/300",
  //       price: 100,
  //       product: "1",
  //     },
  //     {
  //       id: "2",
  //       name: "Addon 2",
  //       description: "Addon 2 description",
  //       img: "https://picsum.photos/200/300",
  //       price: 200,
  //       product: "1",
  //     },
  //   ],
};

const categories = [
  {
    id: "1",
    name: "Category 1",
    description: "Category 1 description",
    img: "https://picsum.photos/200/300",
    products: [
      {
        id: "1",
        name: "Product 1",
        description: "Product 1 description",
        img: "https://picsum.photos/200/300",
        price: 100,
        category: "1",
      },
    ],
  },
  {
    id: "2",
    name: "Category 2",
    description: "Category 2 description",
    img: "https://picsum.photos/200/300",
  },
  {
    id: "3",
    name: "Category 3",
    description: "Category 3 description",
    img: "https://picsum.photos/200/300",
  },
  {
    id: "4",
    name: "Category 4",
    description: "Category 4 description",
    img: "https://picsum.photos/200/300",
  },
];

const CategoryResponse = {
  id: "1",
  name: "Category 1",
  description: "Category 1 description",
  img: "https://picsum.photos/200/300",
  products: [
    {
      id: "1",
      name: "Product 1",
      description: "Product 1 description",
      img: "https://picsum.photos/200/300",
      price: 100,
      category: "1",
      addons: [
        {
          id: "1",
          name: "Addon 1",
          description: "Addon 1 description",
          img: "https://picsum.photos/200/300",
          price: 100,
          product: "1",
        },
        {
          id: "2",
          name: "Addon 2",
          description: "Addon 2 description",
          img: "https://picsum.photos/200/300",
          price: 200,
          product: "1",
        },
      ],
    },
    {
      id: "2",
      name: "Product 2",
      description: "Product 2 description",
      img: "https://picsum.photos/200/300",
      price: 200,
      category: "1",
    },
    {
      id: "3",
      name: "Product 3",
      description: "Product 3 description",
      img: "https://picsum.photos/200/300",
      price: 300,
      category: "1",
    },
  ],
};