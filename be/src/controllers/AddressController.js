const addressService = require('../services/AddressService');

class AddressController {
  async getAllAddresss(req, res) {
    try {
      const addresss = await addressService.getAll(req);

      return res.json({
        success: true,
        addresss,
      });
    }
    catch {
      return res.json({
        success: false,
        error: "Address not found",
      });
    }
  }

  async getAllAddresssByUser(req, res) {
    try {
      req.query.userID = req.params.user;
      // console.log(req.query.userID);
      const addresss = await addressService.getAll(req, req.query);

      return res.json({
        success: true,
        addresss,
      });
    }
    catch {
      return res.json({
        success: false,
        error: "Address not found",
      });
    }
  }

  async addAddress(req, res) {
    const errors = addressService.validate(req);

    if (errors.length > 0) {
      return res.json({
        success: false,
        errors,
      });
    }

    const address = await addressService.create(req.body);

    return res.json({
      success: true,
      address,
    });
  }

  async updateAddress(req, res) {
    const errors = addressService.validate(req);

    if (errors.length > 0) {
      return res.json({
        success: false,
        errors,
      });
    }

    try {
      if (!addressService.isExist(req.params.id)) {
        return res.json({
          success: false,
          error: "Address not found",
        });
      }

      const address = await addressService.update(req.params.id, req.body);

      return res.json({
        success: true,
        address,
      });
    }
    catch {
      return res.json({
        success: false,
        error: "Address not found",
      });
    }
  }

  async deleteAddress(req, res) {
    try {
      if (!addressService.isExist(req.params.id)) {
        return res.json({
          success: false,
          error: "User not found",
        });
      }

      await addressService.deleteById(req.params.id);

      return res.json({
        success: true,
      });
    }
    catch {
      return res.json({
        success: false,
        error: "Address not found",
      });
    }
  }
}

module.exports = new AddressController();