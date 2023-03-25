// http://localhost:3000/api/blogs/{slug}

import * as fs from 'fs'

export default function handler(req, res) {
    fs.readFile(`blogs/${req.query.slug}.json`, 'utf-8', (err, data) => {
        if (err) {
            res.status(500).json("No such blog found!")
        }
        res.status(200).json(JSON.parse(data))
    })
}
