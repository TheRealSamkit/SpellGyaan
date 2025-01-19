const apiKey = "MsdGU/2fCdNC+r6rIExaHQ==NLsJaoXtMqa2dmXm";
const wordNikapikey =
  "api_key=69wp35r1f05w1jj3qrefvfip1a1as4ctvkx6i2njeb93mfs5z";
const base_url = `https://api.wordnik.com/v4/word.json/`;

const fetchRandomWord = async () => {
  try {
    const response = await fetch(
      "https://api.api-ninjas.com/v1/randomword?type=noun",
      {
        headers: { "X-Api-Key": apiKey },
      }
    );
    const {
      word: [randomWord],
    } = await response.json();
    console.log("Random word:", randomWord);
    const definition = await fetchDefinition(randomWord);
    return { randomWord, definition };
  } catch (error) {
    console.error("Error fetching random word:", error);
    throw error;
  }
};

const fetchDefinition = async (word) => {
  try {
    const response = await fetch(
      "https://api.api-ninjas.com/v1/dictionary?word=" + word,
      {
        headers: { "X-Api-Key": apiKey },
      }
    );
    const definition = await response.json();
    console.log("Definition:", definition.definition);
    return definition.definition;
  } catch (error) {
    console.error("Error fetching definition:", error);
    throw error;
  }
};
export { fetchRandomWord };
