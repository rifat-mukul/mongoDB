const { MongoClient } = require("mongodb")

const uri = "mongodb://localhost:27017"
const client = new MongoClient(uri)

async function main() {
  try {
    await client.connect()
    console.log("Connected to MongoDB")

    const database = client.db("ecommerce")
    const collection = database.collection("products")
    console.log("Database and collection created")

    const result = await collection.insertMany([
        {
            name: "Laptop",
            price: 999.99,
            category: "Electronics",
            stock: 50,
            ratings: 4.7,
            tags: ["computer", "technology", "portable"],
            createdAt: new Date()
        },
        {
            name: "Smartphone",
            price: 699.99,
            category: "Electronics",
            stock: 150,
            ratings: 4.5,
            tags: ["phone", "technology", "mobile"],
            createdAt: new Date()   
        }
    ])
    console.log(`${result.insertedCount} documents were inserted`);
}   catch (err) {
    console.error("An error occurred:", err)
    } finally {
    await client.close()
    console.log("Connection to MongoDB closed")
    }
}

main().catch(console.error)