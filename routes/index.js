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
  Dog.findById(req.params.dogid)
    .then((dbdogid) => {
      const newDogData = Object.assign(dbdogid, req.body);
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
