import g4f
from undetected_chromedriver import Chrome, ChromeOptions

options = ChromeOptions()
options.add_argument("--incognito")
webdriver = Chrome(options=options, headless=True)

def strip_answer(text, tag=""):
    text = text.strip()
    if tag!="":
        start = text.find(f"<{tag}>")
        end = text.find(f"</{tag}>")
        text = text[start+len(f"<{tag}>"):end].strip()
        text = text.replace("*", "")
    return text

def get_llm_response(llm_client, text, source_lang, target_lang):
    prompt = f"""You are given a block of text in {source_lang}, understand and translate the text and the sentence in {target_lang} preserving the semantics of {target_lang}, ensure that the output is grammatically coherent. Please emojis to the translated text based on the detected emotion. Enclose ONLY the translated text within <Text> </Text> tags. DO NOT give any extra text or response. The text is given below:"""
    completion = llm_client.chat.completions.create(
            model="gpt-3.5-turbo",  
            messages=[
                {"role": "system", "content": prompt},
                {"role": "user", "content": text}
                
            ],
            temperature=0.7,
            top_p=0.1
        )
    
    result = strip_answer(completion.choices[0].message.content,"Text")
    return result
