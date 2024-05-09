import React from "react";
import "../../styles/menuStyles/menuStyle.css";
import burger from "../../assets/Burger.avif";

export default function Burger() {
  return (
    <div className="container">
      <div className="border">
        <h1 className="heading">Homemade Burger Recipe</h1>
        <div className="image-container">
          <img src={burger} alt="Burger" className="img" />
        </div>
        <p className="first-heading">
          <h2 className="sub-heading">Ingredients:</h2>
          <ul className="list">
            <li>1 pound ground beef</li>
            <li>4 hamburger buns</li>
            <li>Lettuce leaves</li>
            <li>Sliced tomatoes</li>
            <li>Sliced onions</li>
            <li>Sliced cheese (optional)</li>
            <li>Ketchup</li>
            <li>Mustard</li>
            <li>Mayonnaise</li>
            <li>Salt and pepper to taste</li>
          </ul>
          <h2 className="sub-heading">Time to Prepare:</h2>
          <ul className="list">
            <li>Preparation Time: 10 minutes</li>
            <li>Cooking Time: 10 minutes</li>
            <li>Total Time: Approximately 20 minutes</li>
          </ul>
          <h2 className="sub-heading">Instructions:</h2>
          <ol className="list">
            <li>
              <b>Prepare Burger Patties:</b> Divide the ground beef into four
              equal portions and shape into patties. Season with salt and
              pepper.
            </li>
            <li>
              <b>Cook Patties:</b> Heat a grill or skillet over medium-high
              heat. Cook the patties for about 4-5 minutes on each side, or
              until cooked to your desired level of doneness.
            </li>
            <li>
              <b>Assemble Burgers:</b> Toast the hamburger buns lightly. Place a
              lettuce leaf on the bottom half of each bun, followed by a burger
              patty, sliced tomatoes, onions, and cheese (if using). Spread
              ketchup, mustard, and mayonnaise on the top half of the buns.
              Place the top half of the bun over the filling to assemble the
              burgers.
            </li>
            <li>
              <b>Serve:</b> Serve the homemade burgers immediately with your
              favorite side dishes. Enjoy!
            </li>
          </ol>
        </p>
        <h5 className="end">generated by ChatGPT</h5>
      </div>
    </div>
  );
}
