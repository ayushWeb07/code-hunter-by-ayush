// http://localhost:3000/api/blogs/

import clientPromise from "../../../lib/mongo";

export default async (req, res) => {
  try {
    const client = await clientPromise;
    const db = client.db("blogs");

    const blogs = await db
      .collection("blogs")
      .find({})
      .sort({ metacritic: -1 })
      .limit(10)
      .toArray();

    res.status(200).json(blogs);
  } catch (e) {
    res.status(500).json({ message: 'Internal server error' });
  }
};