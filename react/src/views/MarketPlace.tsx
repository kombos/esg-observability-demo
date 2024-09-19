import React, { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Revealer from "../components/marketplace/Revealer";

export default function MarketPlace() {
  const [CurrentImage, setCurrentImage] = useState(0);
  const [CurrentSize, setCurrentSize] = useState(0);
  const [CurrentColor, setCurrentColor] = useState(0);
  const [AddedModal, setAddedModal] = useState(false);

  const [Loading, setLoading] = useState(false);

  const [Zoomed, setZoomed] = useState(false);
  const [ZoomPosition, setZoomPosition] = useState({ x: 0, y: 0 });

  const [GalModalOpenState, setGalModalOpenState] = useState(false);

  const [data, setData] = useState({
    sizes: [7, 8, 9, 10, 11],
    material: "some data",
    options: {
      silver: {
        name: "silver",
        options: {
          "7": {
            size: 7,
            color: "silver",
            quantity: 4,
            price: 440,
          },
          "8": {
            color: "silver",
            quantity: 4,
            size: 8,
            price: 440,
          },
          "9": {
            color: "silver",
            price: 440,
            quantity: 4,
            size: 9,
          },
          "10": {
            quantity: 3,
            price: 440,
            size: 10,
            color: "silver",
          },
        },
        sizes: [7, 8, 9, 10],
      },
      gold: {
        sizes: [11],
        name: "gold",
        options: {
          "11": {
            size: 11,
            quantity: 2,
            price: 440,
            color: "gold",
          },
        },
      },
    },
    category: ["a", "b", "c"],
    description:
      "Introducing our Stainless Steel Striped Pattern Ring—a sleek and sophisticated accessory that adds a touch of modern elegance to your style. Crafted with precision, this ring features a stylish striped pattern that exudes contemporary charm. Made from high-quality stainless steel, it offers durability and resistance to tarnishing, ensuring long-lasting wear. The polished finish enhances the ring's visual appeal, making it a versatile choice for both casual and formal occasions. Elevate your look with this minimalist yet eye-catching Stainless Steel Striped Pattern Ring, a perfect blend of timeless design and enduring quality.\n",
    reviews: [],
    status: "active",
    UpdateLog: ["Mon Mar 18 2024 14:03:47 GMT+0600 (Bangladesh Standard Time) ---by saad.thebridge@gmail.com"],
    minPrice: 440,
    homeCategory: "hot-sale",
    tm: 3,
    widths: [null],
    id: "0A9WY7IL1710748784125sa",
    gender: "male",
    title: "striped pattern ring",
    images: ["/media/marketplace.webp"],
    type: "ring",
    colors: ["silver", "gold"],
    soldThisMonth: 0,
    specifications: ["stainless steel", ""],
  });

  const coverImage = useRef();

  const handleMouseMove = (e) => {
    const { left, top, width, height } = e.target.getBoundingClientRect();
    const x = ((e.pageX - left) / width) * 100;
    const y = ((e.pageY - top) / height) * 100;
    setZoomPosition({
      x: x < 0 ? 0 : x > 100 ? 100 : x,
      y: y < 0 ? 0 : y > 100 ? 100 : y,
    });
  };

  return (
    <>
      <div className="am-esg-marketplace">
        <div className="prod">
          <section className="prod-image">
            <div
              className="prod-image-cover"
              ref={coverImage}
              // role="button"
              // onClick={() => setGalModalOpenState(true)}
              onMouseMove={handleMouseMove}
              onMouseEnter={() => setZoomed(true)}
              onMouseLeave={() => setZoomed(false)}
            >
              <img src={data?.images && data.images[CurrentImage]} alt={data?.title} />
            </div>
            <div className="prod-images">
              <div className="prod-images-con">
                {data?.images &&
                  Array.isArray(data.images) &&
                  data.images.length > 0 &&
                  React.Children.toArray(
                    data.images.map((item, index) => (
                      <button
                        className={`${CurrentImage === index ? "active" : ""}`}
                        onClick={() => setCurrentImage(index)}
                      >
                        <img src={item} alt={`${data?.id} visual ${index + 1}`} />
                      </button>
                    )),
                  )}
              </div>
            </div>
          </section>
          <section className="prod-data">
            <h1>{data?.title}</h1>
            <div className="pAndR">
              <h2>
                {data?.discount && !isNaN(data?.discount) ? (
                  <>
                    &#2547;
                    {data?.options &&
                      data.options?.[data?.colors[CurrentColor]]?.options?.[
                        data.options?.[data?.colors[CurrentColor]]?.sizes[CurrentSize]
                      ]?.price - data.discount}
                    <br />
                    <span>
                      &#2547;
                      {data?.options &&
                        data.options?.[data?.colors[CurrentColor]]?.options?.[
                          data.options?.[data?.colors[CurrentColor]]?.sizes[CurrentSize]
                        ]?.price}
                    </span>
                  </>
                ) : (
                  <>
                    &#2547;
                    {data?.options &&
                      data.options?.[data?.colors[CurrentColor]]?.options?.[
                        data.options?.[data?.colors[CurrentColor]]?.sizes[CurrentSize]
                      ]?.price}
                  </>
                )}
              </h2>
              <div className="ratings"></div>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus rem illum incidunt tempore possimus
              tenetur.
            </p>
            <h3>Colors:</h3>
            <div className="prod-data-colors">
              {data?.colors &&
                Array.isArray(data.colors) &&
                data.colors.length > 0 &&
                React.Children.toArray(
                  data.colors.map((item, index) => (
                    <button
                      className={`${CurrentColor === index ? "active" : ""}`}
                      onClick={() => setCurrentColor(index)}
                    >
                      {item}
                    </button>
                  )),
                )}
            </div>
            {data?.options &&
            data.options?.[data?.colors[CurrentColor]]?.options?.[
              data.options?.[data?.colors[CurrentColor]]?.sizes[CurrentSize]
            ]?.width ? (
              <h3>
                Width:{" "}
                {
                  data.options?.[data?.colors[CurrentColor]]?.options?.[
                    data.options?.[data?.colors[CurrentColor]]?.sizes[CurrentSize]
                  ]?.width
                }
              </h3>
            ) : (
              ""
            )}
            <h3>Sizes:</h3>
            <div className="prod-data-sizes">
              {data?.options &&
                data.options?.[data?.colors[CurrentColor]]?.sizes &&
                Array.isArray(data?.options && data.options?.[data?.colors[CurrentColor]]?.sizes) &&
                data?.options &&
                data.options?.[data?.colors[CurrentColor]]?.sizes.length > 0 &&
                React.Children.toArray(
                  data?.options &&
                    data.options?.[data?.colors[CurrentColor]]?.sizes.map((item, index) => (
                      <button
                        className={`${CurrentSize === index ? "active" : ""}`}
                        onClick={() => setCurrentSize(index)}
                      >
                        {!isNaN(item) ? Math.floor(item) : item}
                      </button>
                    )),
                )}
            </div>
            {(data?.options
              ? data.options?.[data?.colors[CurrentColor]]?.options?.[
                  data.options?.[data?.colors[CurrentColor]]?.sizes[CurrentSize]
                ]?.quantity -
                data.options?.[data?.colors[CurrentColor]]?.options?.[
                  data.options?.[data?.colors[CurrentColor]]?.sizes[CurrentSize]
                ]?.sold -
                data.options?.[data?.colors[CurrentColor]]?.options?.[
                  data.options?.[data?.colors[CurrentColor]]?.sizes[CurrentSize]
                ]?.reserved
              : 0) < 1 && (
              <div className="aj-error-chip" style={{ marginRight: "auto" }}>
                Sold Out
              </div>
            )}
            <button className="prod-data-addToCart">Add To Cart</button>
            <div className="revelers">
              <Revealer summary={<strong>Product Details</strong>}>{data?.description}</Revealer>
              <Revealer summary={<strong>Specification</strong>}>
                {data?.specifications &&
                  Array.isArray(data.specifications) &&
                  data.specifications.length > 0 &&
                  React.Children.toArray(data.specifications.map((item) => <p style={{ margin: "8px 0" }}>{item}</p>))}
              </Revealer>
              <Revealer summary={<strong>Product Material</strong>}>{data?.material}</Revealer>
            </div>
            {Zoomed && (
              <div
                className="zoom-canvas"
                style={{
                  transition: "backgroundPosition 0ms ease",
                  backgroundImage: `url('${data?.images && data.images[CurrentImage]}')`,
                  backgroundPosition: `${ZoomPosition?.x ? ZoomPosition.x : "0"}% ${
                    ZoomPosition?.y ? ZoomPosition.y : "0"
                  }%`,
                }}
              ></div>
            )}
          </section>
        </div>
      </div>
    </>
  );
}
