const express = require('express');
const router = express.Router();
const restaurants = require('../data');


router.get('/', (req, res) => {
    res.send('<h1>Hello Restaurant API</h1>');
});


router.get("/restaurants", (req, res) => {
    res.json(restaurants);
});

router.get("/restaurants/:id", (req, res) => {
    const restaurantId = Number.parseInt(req.params.id, 10);
    const restaurant = restaurants.find((restaurant) => restaurant.id === restaurantId);
    res.json(restaurant);
});


router.post("/restaurants", (req, res) => {
    const newRestaurant = {
      ...req.body
    };
    restaurants.push(newRestaurant);
    res.json(newRestaurant);
  });
  
  router.put("/restaurants/:id", (req, res) => {
    const restaurantId = Number.parseInt(req.params.id,10);
    const restaurantIndex = restaurants.findIndex((restaurant) => restaurant.id === restaurantId);
    const updatedRestaurant = {
      id:restaurantId,
      ...req.body
    };
    restaurants[restaurantIndex] = updatedRestaurant;
    res.json(updatedRestaurant);
  });
  

router.delete("/restaurants/:id", (req, res) => {
    const restaurantId = Number.parseInt(req.params.id, 10);
    const restaurantIndex = restaurants.findIndex((restaurant) => restaurant.id === restaurantId);
    restaurants.splice(restaurantIndex, 1);
    res.sendStatus(204);
});


module.exports = router;