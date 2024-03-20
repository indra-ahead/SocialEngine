import { STATUS_CODE } from "../constants/constants.js";

export const errorHandler = (error, req, res, next) => {
    console.log("inside error handler", error);
    return res
      .status(STATUS_CODE.server_error)
      .json({ code: 500, message: "Unknown Error" });
  };
  