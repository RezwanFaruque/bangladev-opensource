import { connectToDatabase } from '../../utils/database.js';



export default async function handler(req, res) {

  if(req.method == 'GET'){
    const {db} = await connectToDatabase();

    const data = await db.collection("listingsAndReviews").find({}).limit(20).toArray();
  
    res.json(data);
  }


}
