import re
import string
from unicodedata import normalize
from pyvi import ViTokenizer


def accent_normalizer(word):
    word = normalize('NFD', word)
    accent = re.findall(r'[\u0300\u0301\u0303\u0309\u0323]', word)
    if len(accent) == 0:
        return word
    else:
        word = re.sub(accent[0], '', word)
        span = re.match('.*([aăâeêioôơuưy])', word.lower()).end(1)
        word = word[:span] + accent[0] + word[span:]
        return normalize('NFC', word)


def normalize_text(text):
    text = re.sub(r'(\D)\1+', r'\1', text)
    text = text.lower()

    # text = ' '.join([accent_normalizer(t) for t in text.split()])

    text = text.translate(str.maketrans('', '', string.punctuation))

    text = ViTokenizer.tokenize(text)

    text = text.replace(u'"', u' ')
    text = text.replace(u'️', u'')
    text = text.replace('🏻', '')

    return text


def sentiment(text, vectorizer, classifier):
    text = normalize_text(text)
    x = vectorizer.transform([text])
    y_pred = classifier.predict(x)[0]

    return y_pred
