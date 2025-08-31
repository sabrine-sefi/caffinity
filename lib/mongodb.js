// pour eslint: ne rale pas => ici c’est du code serveur!!!
/* eslint-disable no-undef */

import { MongoClient } from "mongodb";

// get url from .env.local
const uri = process.env.MONGODB_URI;

let client;
let clientPromise;

// stop if no URI
if (!process.env.MONGODB_URI) {
  throw new Error("MONGODB_URI not defined in .env.local");
}

// en dev Next recharge souvent => on garde 1 seule connexion dans global
if (process.env.NODE_ENV === "development") {
  if (!global._mongoClientPromise) {
    client = new MongoClient(uri);
    global._mongoClientPromise = client.connect();
  }
  clientPromise = global._mongoClientPromise;
} else {
  // en prod: connexion simple à chaque fois
  client = new MongoClient(uri);
  clientPromise = client.connect();
}

export default clientPromise;
