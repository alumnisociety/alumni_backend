const Alumni = require("../models/alumniModel");

// get all Alumni
exports.getAllAlumnis = async (req, res) => {
  try {
    const queryObj = {...req.query};
    const excludeFields = ['page' , 'sort' , 'limit','fields']
    excludeFields.forEach(el => delete queryObj[el])

    const query =  Alumni.find(queryObj);
    const alumni = await query;

    // SEND RESPONSE
    res.status(200).json({
      status: "success",
      results: alumni.length,
      data: {
        alumni,
      },
    });
  } catch (err) {
    res.status(500).json({ mas: "some server error" });
  }
};

// get Alumni
exports.getAlumni = async (req, res) => {
  try {
    const alumni = await Alumni.findById(req.params.id);

    if (alumni == null) {
      res.status(404).json({
        mas: "Alumni not found",
        sucess: false,
      });
    }

    res.status(200).json({
      alumni,
      sucess: true,
      authUser: req.userId,
    });
  } catch (err) {
    res.status(500).json({ mas: "some server error" });
  }
};

// add Alumni
exports.addAlumni = async (req, res) => {
  try {
    const newdata = req.body;
    const alumni = await Alumni.create(newdata);
    res.status(201).json(alumni);
  } catch (err) {
    res.status(500).json({ mas: "some server error" });
  }
};

// update Alumni
exports.updateAlumni = async (req, res) => {
  try {
    const newdata = req.body;
    const alumni = await Alumni.updateOne({ _id: req.params.id }, newdata);
    res.status(204).json(alumni);
  } catch (err) {
    res.status(500).json({ mas: "some server error" });
  }
};

// delete Alumni
exports.deleteAlumni = async (req, res) => {
  try {
    const alumni = await Alumni.deleteOne({ _id: req.params.id });
    res.status(202).json(alumni);
  } catch (err) {
    res.status(500).json({ mas: "some server error" });
  }
};
