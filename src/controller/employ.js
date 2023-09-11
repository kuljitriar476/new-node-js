const mongoose = require("mongoose");
const employModel = require("../model/employ");
const { ObjectId } = require("mongoose").Types;

const createEmploy = async function (req, res) {
  try {
    const data = req.body;
    const { allData } = data;

    let employData;

    for (let x = 0; x <= allData.length - 1; x++) {
      console.log(allData[x]);

      employData = await employModel.create({
        name: allData[x]?.name,
        lastName: allData[x]?.lastName,
        email: allData[x]?.email,
        mobileNo: allData[x]?.mobileNo,
        password: allData[x]?.password,
        address: allData[x]?.address,
        role: allData[x]?.role,
      });
    }

    res.status(200).send({
      message: "employ data created successfully",
      data: employData,
    });
  } catch (erroreee) {
    console.log(erroreee);
  }
};

// const createEmploy = async function (req, res) {
//   try {
//     let employData;
//     const data = req.body;
//     const { allData } = data;
//     for (let x of allData) {
//       employData = await employModel.create({
// name: x?.name,
// lastName: x?.lastName,
// email: x?.email,
// mobileNo: x?.mobileNo,
// password: x?.password,
// address: x?.address,
// role: x?.role,
//       });
//     }
//     res.status(200).send({
//       message: "employ data created successfully",
//       data: employData,
//     });
//   } catch (error) {
//     console.log(error);
//   }
// };

module.exports = {
  createEmploy,
};
