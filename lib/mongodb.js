import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI;
let client;
let clientPromise;

if (!process.env.MONGODB_URI) {
  throw new Error("MONGODB_URI not defined in .env.local");
}

if (process.env.NODE_ENV === "development") {
  // En dev, on garde une connexion globale pour éviter de recréer un client à chaque hot reload
  if (!global._mongoClientPromise) {
    client = new MongoClient(uri);
    global._mongoClientPromise = client.connect();
  }
  clientPromise = global._mongoClientPromise;
} else {
  // En prod, on crée une nouvelle connexion normale
  client = new MongoClient(uri);
  clientPromise = client.connect();
}

export default clientPromise;
