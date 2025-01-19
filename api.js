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
    fetchAudio(randomWord);
    return randomWord;
  } catch (error) {
    console.error("Error fetching random word:", error);
    throw error;
  }
};

const fetchAudio = async (word) => {
  try {
    const response = await fetch(
      `${base_url}${word}/audio?limit=50&${wordNikapikey}`
    );
    console.log("Response:", response);
    const [{ fileUrl }] = await response.json();
    console.log("Audio URL:", fileUrl);
    return fileUrl;
  } catch (error) {
    console.error("Error fetching audio:", error);
    throw error;
  }
};
export { fetchRandomWord };
