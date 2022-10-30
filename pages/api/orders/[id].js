import dbConnect from "../../../lib/DbConnect";
import Order from "../../../models/Order";

const handler = async (req, res) => {
  const {
    method,
    query: { id },
  } = req;

  await dbConnect();

  if (method === "GET") {
    const order = await Order.findById(id);
    res.status(200).json(order);
    try {
    } catch (error) {
      res.status(500).json(error);
    }
  }

  if (method === "PUT") {
  }
  if (method === "DELETE") {
  }
};

export default handler;
