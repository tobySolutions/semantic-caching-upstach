import { SemanticCache } from "@upstash/semantic-cache";
import { Index } from "@upstash/vector";
import { DBConfig } from "./config";

// 👇 your vector database
const index = new Index(DBConfig);

// 👇 your semantic cache
const semanticCache = new SemanticCache({ index, minProximity: 0.85 });

async function runCache() {
  // Basic Semantic Retrieval
  //   await semanticCache.set("Capital of Turkey", "Ankara");

  // Handling Synonyms
  //   await semanticCache.set("largest city in USA by population", "New York");

  // Multilingual Queries
  //   await semanticCache.set("German Chancellor", "Olaf Scholz");

  // Complex Queries
  //   await semanticCache.set("year in which the Berlin wall fell", "1989");

  // Different Contexts
  //   await semanticCache.set("the chemical formula for water", "H2O");
  //   await semanticCache.set("the healthiest drink on a hot day", "water");

  await delay(1000);

  // 👇 outputs: "Ankara"
  //   const result = await semanticCache.get("Capital in Turkey");

  // 👇 outputs "New York"
  // const result = await semanticCache.get("which is the most populated city in the USA?");

  // 👇 "Who is the chancellor of Germany?" -> outputs "Olaf Scholz"
  //   const result = await semanticCache.get(
  //     "Wer ist der Bundeskanzler von Deutschland?"
  //   );

  // 👇 outputs "1989"
  //   const result = await semanticCache.get(
  //     "what's the year the Berlin wall destroyed?"
  //   );

  // 👇 outputs "water"
  const result = await semanticCache.get(
    "what should i drink when it's hot outside?"
  );

  // 👇 outputs "H2O"
  const OtherResult = await semanticCache.get(
    "tell me water's chemical formula"
  );
  console.log(result, OtherResult);
}

function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

runCache();
