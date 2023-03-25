// http://localhost:3000/api/blogs/

import * as fs from 'fs'
import * as util from 'util'


const readdir = util.promisify(fs.readdir);
const readFile = util.promisify(fs.readFile);

export default async function handler(req, res) {

  try {

    const files = await readdir('blogs');
    const promises = files.map(async (file) => {
      const blog = await readFile(`blogs/${file}`, 'utf-8');
      return JSON.parse(blog);
    });
    const allBlogs = await Promise.all(promises);
    res.status(200).json(allBlogs);

  } catch (err) {
    res.status(500).json({ message: 'Internal server error' });
  }

}
