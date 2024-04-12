def get_llm_response(llm_client, text, source_lang, target_lang):
    prompt = f"""You will be provided with a sentence in {source_lang}, and your task is to translate it into {target_lang}. Remember to only give the translated sentence with no additional information. Also add emojis to the text according to the emotion of the text. DO NOT GIVE ADD ANY OTHER ADDITIONAL INFORMATION."""
    completion = llm_client.chat.completions.create(
            model="gpt-3.5-turbo",  
            messages=[
                {"role": "system", "content": prompt},
                {"role": "user", "content": text}
                
            ],
            temperature=0.7,
            top_p=1
        )

    return completion.choices[0].message.content

