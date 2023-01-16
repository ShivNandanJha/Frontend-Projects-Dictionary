const url = "https://api.dictionaryapi.dev/api/v2/entries/en/";
const result = document.getElementById("result");
const sound = document.getElementById("sound");
const btn = document.getElementById("search-btn");
btn.addEventListener("click", () => {
  let inpWord = document.getElementById("input-word").value;
  fetch(`${url}${inpWord}`)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      result.innerHTML = `
          <div class="word">
          <h3>${inpWord}</h3>
          <button onclick="playSound()"><i class="fa fa-volume-up"></i></button>
        </div>
        <div class="defination">
          <p>${data[0].meanings[0].partOfSpeech}</p>
          <p>${data[0].phonetic}</p>
        </div>
        <p class="word-meaning">
         ${data[0].meanings[0].definitions[0].definition} </p>
        <p class="word-meaning">
         ${data[0].meanings[0].definitions[1].definition} </p>
        <p class="word-example"> Example:
         ${data[0].meanings[0].definitions[0].example || ""} </p>
        <p class="word-synonyms"> Synonyms:
         ${data[0].meanings[0].synonyms[0] || ""} ,  ${data[0].meanings[0].synonyms[1] || ""},  ${data[0].meanings[0].synonyms[2] || ""} </p>
         <hr class="line">
         <div class="defination2">
          <p >${data[0].meanings[1].partOfSpeech}</p>
        </div>
        <p class="word-meaning">
         ${data[0].meanings[1].definitions[0].definition} </p>
        <p class="word-example"> Example:
         ${data[0].meanings[1].definitions[0].example || ""} </p>
        </div>   `;
      sound.setAttribute("src", `${data[0].phonetics[0].audio}`);
      console.log(sound);
    })
    .catch(() => {
      result.innerHTML = `<h2 class="error"> Couldn't find the word</h2>`;
    });
 
});
const playSound = () => {
  sound.play();
};
