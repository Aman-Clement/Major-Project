document.addEventListener("DOMContentLoaded", function () {
    const selectedSourceLanguage = document.getElementById("source_language");
    const selectedTargetLanguage = document.getElementById("target_language");
    const sourceText = document.getElementById("source_text");
    const translatedText = document.getElementById("translated_text");
    const sourceEmotions = document.getElementById("source_emotions");
    const translatedEmotions = document.getElementById("translated_emotions");
    const similarityScore = document.getElementById("similarity_score");
    const attemptsCount = document.getElementById("attempts_count");
    const translateButton = document.getElementById("translate_button");
    const switchButton = document.getElementById("switch_button");
    const copyButton = document.getElementById("copy_button");

    let switchingLanguages = false;

    function handleLanguageChange(languageType, event) {
        if (languageType === "source") {
            selectedSourceLanguage.value = event.target.value;
            translatedText.value = "";
            similarityScore.textContent = "Similarity Score: 0%";
            attemptsCount.textContent = "Number of Attempts: 0";
            sourceEmotions.innerHTML = "";
            translatedEmotions.innerHTML = "";
        } else {
            selectedTargetLanguage.value = event.target.value;
            translatedText.value = "";
            similarityScore.textContent = "Similarity Score: 0%";
            attemptsCount.textContent = "Number of Attempts: 0";
            sourceEmotions.innerHTML = "";
            translatedEmotions.innerHTML = "";
        }
    }

    async function AtoB() {
        translatedText.value = "";
        sourceEmotions.innerHTML = "";
        translatedEmotions.innerHTML = "";
        similarityScore.textContent = "Similarity Score: 0%";
        attemptsCount.textContent = "Number of Attempts: 0";

        const response = await fetch(`http://127.0.0.1:5000/translate/${selectedSourceLanguage.value}/to/${selectedTargetLanguage.value}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ text: sourceText.value }),
        });

        if (response.ok) {
            const data = await response.json();
            detectEmotion(sourceText.value, setSourceEmotion, selectedSourceLanguage.value);
            detectEmotion(data.response, setTranslatedEmotion, selectedTargetLanguage.value);
            translatedText.value = data.response;
            similarityScore.textContent = `Similarity Score: ${data.score}%`;
            attemptsCount.textContent = `Number of Attempts: ${data.attempts}`;
        } else {
            console.error("Failed to fetch translation:", response.statusText);
        }
    }

    function switchLanguages() {
        const tempLanguage = selectedSourceLanguage.value;
        selectedSourceLanguage.value = selectedTargetLanguage.value;
        selectedTargetLanguage.value = tempLanguage;
        switchingLanguages = true;
    }

    async function detectEmotion(text, setEmotion, language) {
        const response = await fetch(`http://127.0.0.1:5000/detect-emotions/${language}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ text }),
        });

        if (response.ok) {
            const data = await response.json();
            setEmotion(data);
        } else {
            console.error("Failed to detect emotion:", response.statusText);
        }
    }

    function copyTranslatedText() {
        translatedText.select();
        document.execCommand("copy");
        alert("Text copied to clipboard!");
    }

    function renderEmotion(emotion, container) {
        container.innerHTML = emotion.map(item => `
            <div class="flex items-center mt-2">
                <span class="mr-2">${item.emoji}</span>
                <span class="mr-2">${item.label}</span>
                <span>${item.score}</span>
            </div>
        `).join("");
    }

    selectedSourceLanguage.addEventListener("change", handleLanguageChange.bind(null, "source"));
    selectedTargetLanguage.addEventListener("change", handleLanguageChange.bind(null, "target"));
    translateButton.addEventListener("click", AtoB);
    switchButton.addEventListener("click", switchLanguages);
    copyButton.addEventListener("click", copyTranslatedText);
});
