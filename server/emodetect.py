from transformers import RobertaTokenizerFast, TFRobertaForSequenceClassification, pipeline
from sklearn.metrics.pairwise import cosine_similarity
import numpy as np

tokenizer = RobertaTokenizerFast.from_pretrained("arpanghoshal/EmoRoBERTa")
model = TFRobertaForSequenceClassification.from_pretrained("arpanghoshal/EmoRoBERTa")

emotion = pipeline("sentiment-analysis", 
                    model="arpanghoshal/EmoRoBERTa",
                    return_all_scores= True)

emotion_to_emoji = {
    "love": "❤️",
    "admiration": "😊",
    "joy": "😄",
    "approval": "👍",
    "caring": "🤗",
    "excitement": "😃",
    "amusement": "😆",
    "gratitude": "🙏",
    "desire": "😍",
    "anger": "😡",
    "optimism": "🌟",
    "disapproval": "👎",
    "grief": "😢",
    "annoyance": "😠",
    "pride": "🦁",
    "curiosity": "🤔",
    "neutral": "😐",
    "disgust": "🤢",
    "disappointment": "😞",
    "realization": "😲",
    "fear": "😨",
    "relief": "😌",
    "confusion": "😕",
    "remorse": "😔",
    "embarrassment": "😳",
    "surprise": "😮",
    "sadness": "😔",
    "nervousness": "😰"
}

def get_emotion(text):
    emotions = emotion(text)[0]
    sorted_emotions = sorted(emotions, key=lambda x: x["score"], reverse=True)
    prominent_emotions = sorted_emotions[:3]
    for item in prominent_emotions:
        emoji = emotion_to_emoji.get(item["label"], None)
        item["emoji"] = emoji
        item["score"] = round(item['score']) * 100
        item["label"] = item["label"].capitalize()
    return prominent_emotions

def is_similar(original_emotion, translated_emotion):
    all_labels = set()
    for emotion_dict in original_emotion + translated_emotion:
        all_labels.add(emotion_dict["label"])
    
    original_vector = []
    translated_vector = []
    for label in all_labels:
        original_score = next((emotion_dict["score"] for emotion_dict in original_emotion if emotion_dict["label"] == label), 0)
        translated_score = next((emotion_dict["score"] for emotion_dict in translated_emotion if emotion_dict["label"] == label), 0)
        original_vector.append(original_score)
        translated_vector.append(translated_score)

    original_vector = np.array([original_vector])
    translated_vector = np.array([translated_vector])
    similarity = cosine_similarity(original_vector, translated_vector)[0][0]

    return similarity