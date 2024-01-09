export default function findEvolutions(data, evolutions = []) {
  const keys = Object.keys(data);
  for (const obj of keys) {
    if (obj === "chain") {
      findEvolutions(data[obj], evolutions);
    }

    if (obj === "evolves_to" && Array.isArray(data[obj])) {
      evolutions.push(data);
      for (const evolution of data[obj]) {
        findEvolutions(evolution, evolutions);
      }
    }
  }

  return evolutions;
}