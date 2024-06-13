import React from "react";
import "./Card.css";
import { Link } from "react-router-dom";

export default function Card() {
  const cards = [
    {
      title: "Web Development Bootcamp",
      category: "Programming",
      location: "Online",
      price: 199.99,
      description:
        "Learn full-stack web development with the latest technologies.",
      image:
        "https://tse3.mm.bing.net/th?id=OIP.zYS7YDLrsJFyn1QpmI5cnwHaD4&pid=Api&P=0&h=220",
    },
    {
      title: "Data Science Essentials",
      category: "Data Science",
      location: "In-Person",
      description: "Master the fundamentals of data science and analysis.",
      image:
        "https://tse4.mm.bing.net/th?id=OIP.O0LhiSUD9RRL9_Anb-hkkAHaEo&pid=Api&P=0&h=220",
    },
    {
      title: "Graphic Design Fundamentals",
      category: "Design",
      location: "Online",
      price: 149.99,
      description:
        "Explore the basics of graphic design and visual communication.",
      image:
        "https://tse4.mm.bing.net/th?id=OIP.ljjkCXUdf4Ob5T4AQBC6PQHaE8&pid=Api&P=0&h=220",
    },
    {
      title: "Mobile App Development Workshop",
      category: "Programming",
      location: "In-Person",
      price: 249.99,
      description:
        "Build your first mobile app with hands-on guidance from experts.",
      image:
        "https://tse4.mm.bing.net/th?id=OIP.eSsAdCUevbptplcKvFQqMQHaE8&pid=Api&P=0&h=220",
    },
    {
      title: "Introduction to Machine Learning",
      category: "Data Science",
      location: "Online",
      price: 199.99,
      description: "Dive into the world of machine learning and AI.",
      image:
        "https://tse2.mm.bing.net/th?id=OIP.skLSi71M3pQg42uTS9vs7QHaE7&pid=Api&P=0&h=220",
    },
    {
      title: "Introduction to Machine Learning",
      category: "Data Science",
      location: "Online",
      price: 199.99,
      description: "Dive into the world of machine learning and AI.",
      image:
        "https://images.idgesg.net/images/article/2018/01/emerging-tech_ai_machine-learning-100748222-large.jpg",
    },
  ];
  return (
    <div className="Category">
      <h1 className="">FEATURED</h1>
      <div>
        <section>
          <div className="container">
            {cards.map((card, index) => (
              <div className="cards" key={index}>
                <div className="card">
                  <h3>
                    <img src={card.image} alt="" />
                    <p>{card.title}</p>
                    <p className="categorys">{card.category}</p>
                    <p>{card.location}</p>
                    <p>{card.description}</p>
                    <Link to="/details" className="btn6">
                      {" "}
                      Details{" "}
                    </Link>
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
