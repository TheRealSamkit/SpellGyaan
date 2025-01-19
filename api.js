const apiKey = "MsdGU/2fCdNC+r6rIExaHQ==NLsJaoXtMqa2dmXm";

// Function to fetch a random word
const fetchRandomWord = async () => {
  try {
    const response = await fetch(
      "https://api.api-ninjas.com/v1/randomword?type=noun",
      {
        headers: { "X-Api-Key": apiKey },
      }
    );

    // Parse the response
    const { word: randomWord } = await response.json(); // Assuming the response contains { word: "example" }
    console.log("Random word:", randomWord);

    // Fetch the definition for the word
    const definition = await fetchDefinition(randomWord);
    return { randomWord, definition };
  } catch (error) {
    console.error("Error fetching random word:", error);
    throw error; // Propagate the error for higher-level handling
  }
};

// Function to fetch the definition of a word
const fetchDefinition = async (word) => {
  try {
    const response = await fetch(
      "https://api.api-ninjas.com/v1/dictionary?word=" + word,
      {
        headers: { "X-Api-Key": apiKey },
      }
    );

    // Parse the response
    const data = await response.json();

    if (data.definition) {
      console.log("Definition:", data.definition);
      return data.definition;
    } else {
      console.warn("No definition found for:", word);
      return null; // Return null if no definition is found
    }
  } catch (error) {
    console.error("Error fetching definition:", error);
    throw error; // Propagate the error for higher-level handling
  }
};

export { fetchRandomWord };
