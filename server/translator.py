
def get_llm_response(llm_client, text, source_lang, target_lang):
    prompt = f"""Translate the following sentence into {target_lang} from {source_lang} while preserving the emotional tone and context. Emojis should be added appropriately to convey the emotions effectively. Ensure the translation sounds smooth and maintains a conversational tone.

Original Sentence: "{text}"


Instructions for GPT-3.5:

1. Translate the sentence into {target_lang} while keeping the emotional tone and context intact.
2. Add suitable emojis to express the emotions conveyed in the original sentence.
3. Ensure the translated text sounds natural and maintains a conversational tone.
4. Return only the translated text without any additional comments and content. Do not include "Translated Text" heading.
5. Do not format the result."""
    
    completion = llm_client.chat.completions.create(
            model="gpt-3.5-turbo",  
            messages=[
                {"role": "user", "content": prompt}
            ],
            temperature=0
        )
    return completion.choices[0].message.content

