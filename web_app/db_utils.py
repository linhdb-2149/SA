import pysparnn.cluster_index as ci
from sentiment_infer import normalize_text
import joblib


data_transform, data = joblib.load('./pre-trained/data.db')
data = [str(x[0]) + ':' + x[1] for x in data]
cp = ci.MultiClusterIndex(data_transform, data)


def tfidf_search(text, vectorizer, k=50):
    text = normalize_text(text)
    search_features_vec = vectorizer.transform([text])
    search_results = cp.search(
                            search_features_vec,
                            k_clusters=2, k=k,
                            return_distance=False
                        )

    return search_results[0]
