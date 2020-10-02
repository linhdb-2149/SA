from flask import Flask, render_template, request, jsonify
from sentiment_infer import sentiment
from db_utils import tfidf_search
import joblib

app = Flask(__name__)


@app.route("/")
def index():
    return render_template('index.html')


@app.route("/search", methods=["POST"])
def search():
    search_text = request.form.get("search_query")
    results = []
    texts = tfidf_search(search_text, vectorizer)
    for text in texts:
        tmp = text.split(':')
        polarity = 1 if int(tmp[0]) == 0 else -1
        if polarity > 0:
            text = "Positive: " + tmp[1]
        else:
            text = "Negative: " + tmp[1]
        results.append([text, polarity])

    return jsonify({"success": True, "tweets": results})


@app.route("/sentiment", methods=["POST"])
def sentiment_f():
    search_text = request.form.get("search_query")
    print(search_text)
    polarity = sentiment(search_text, vectorizer, classifier)
    polarity = 1 if polarity == 0 else -1
    if polarity > 0:
        text = "Positive: " + search_text
    else:
        text = "Negative: " + search_text
    results = [[text, polarity]]

    return jsonify({"success": True, "tweets": results})


if __name__ == '__main__':
    vectorizer = joblib.load('./pre-trained/tf_idf.model')
    classifier = joblib.load('./pre-trained/vsentiment.model')
    app.run(debug=True, host='0.0.0.0')
