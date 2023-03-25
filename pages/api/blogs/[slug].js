// http://localhost:3000/api/blogs/{slug}

import * as fs from 'fs'
import clientPromise from "../../../lib/mongo";


// export default function handler(req, res) {
//     fs.readFile(`blogs/${req.query.slug}.json`, 'utf-8', (err, data) => {
//         if (err) {
//             res.status(500).json("No such blog found!")
//         }
//         res.status(200).json(JSON.parse(data))
//     })
// }


export default async (req, res) => {
    const client = await clientPromise;
    const db = client.db("blogs");

    const blog = await db
        .collection("blogs")
        .findOne({ slug: req?.query?.slug })

    if (blog !== null) {
        res.status(200).json(blog)
    } else {
        res.status(500).json("No such blog found!")
    }

};