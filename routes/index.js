const express = require("express");
const router = express.Router();
const { Dog } = require("../models");

router.get("/dogs/:dogid", (req, res) => {
  Dog.findById(req.params.dogid)
    .then((result) => {
      res.status(200).send(result);
    })
    .catch((err) => {
      res.status(404).send(err);
    });
});

router.get("/dogs", (req, res) => {
  Dog.find()
    .then((result) => {
      res.status(200).send(result);
    })
    .catch((err) => {
      res.status(404).send(err);
    });
});

router.post("/dogs", (req, res) => {
  const newDog = new Dog(req.body);
  newDog
    .save()
    .then((result) => {
      res.status(201).send(result);
    })
    .catch((err) => {
      res.status(409).send(err);
    });
});

router.put("/dogs/:dogid", (req, res) => {
  const { name, breed, image, color, age, favoriteToy, personality, bio } =
    req.body;
  let data = {};

  if (age !== undefined && age !== null && age !== "") {
    try {
      const parsedValue = parseInt(age);
      if (isNaN(parsedValue)) {
        res.status(304).send("Invalid number");
      }
      data["age"] = parsedValue;
    } catch (error) {
      res.status(304).send(error);
    }
  }
  if (name !== undefined && name !== null && name !== "") {
    data["name"] = name;
  }
  if (breed !== undefined && breed !== null && breed !== "") {
    data["breed"] = breed;
  }
  if (image !== undefined && image !== null && image !== "") {
    data["image"] = image;
  }
  if (color !== undefined && color !== null && color !== "") {
    data["color"] = color;
  }
  if (favoriteToy !== undefined && favoriteToy !== null && favoriteToy !== "") {
    data["favoriteToy"] = favoriteToy;
  }
  if (personality !== undefined && personality !== null && personality !== "") {
    data["personality"] = personality;
  }
  if (bio !== undefined && bio !== null && bio !== "") {
    data["bio"] = bio;
  }

  Dog.findById(req.params.dogid)
    .then((dbdogid) => {
      const newDogData = Object.assign(dbdogid, data);
      return newDogData.save();
    })
    .then((result) => {
      res.status(200).send(result);
    })
    .catch((err) => {
      res.status(304).send(err);
    });
});

router.delete("/dogs/:dogid", (req, res) => {
  Dog.findByIdAndDelete(req.params.dogid)
    .then((result) => {
      res.status(200).send({ message: "Dog eliminado" });
    })
    .catch((err) => {
      res.status(404).send({ message: "Dog no encontrado" });
    });
});

module.exports = router;
