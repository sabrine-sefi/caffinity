import clientPromise from "../../../../lib/mongodb";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db("caffinity"); // nom de ta base (tu peux choisir)
    const products = await db.collection("products").find({}).toArray();

    return NextResponse.json(products);
  } catch (error) {
    console.error("❌ Erreur API /products :", error);
    return NextResponse.json({ error: "Impossible de récupérer les produits" }, { status: 500 });
  }
}
