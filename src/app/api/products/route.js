import clientPromise from "../../../../lib/mongodb";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    // connect to Mongo
    const client = await clientPromise;

    // select db
    const db = client.db("caffinity");

    // get all products
    const products = await db.collection("products").find({}).toArray();

    // return json
    return NextResponse.json(products);
  } catch (error) {
    console.error("Erreur api/products:", error);
    // return error if problem
    return NextResponse.json({ error: "Impossible de récupérer les produits" }, { status: 500 });
  }
}
