from newsapi import NewsApiClient
from azure.core.credentials import AzureKeyCredential
from azure.ai.textanalytics import TextAnalyticsClient
from bs4 import BeautifulSoup
import os
import requests
from dotenv import load_dotenv
from datetime import datetime, timedelta

load_dotenv()

"""Gets the article content by webscraping the article and searching for <p></p> tags"""
def get_article_content(url):
    source = requests.get(url).text
    soup = BeautifulSoup(source, "lxml")
    tags = soup.find_all("p")
    sentences = [x.string for x in tags if x.string is not None]

    content = " ".join(sentences)

    return content


NEWSAPI_API_KEY = os.getenv("NEWSAPI_API_KEY")
AZURE_TEXT_ANALYTICS_API_KEY = os.getenv("AZURE_TEXT_ANALYTICS_API_KEY")

text_analytics_credential = AzureKeyCredential(AZURE_TEXT_ANALYTICS_API_KEY)
newsapi = NewsApiClient(api_key=NEWSAPI_API_KEY)

microsoft_endpoint = "https://eastus.api.cognitive.microsoft.com/"
text_analytics_client = TextAnalyticsClient(
    microsoft_endpoint, text_analytics_credential
)

"""Gets all the articles (only on the first page), sorted by relevancy, from today to a week ago"""
def get_all_articles(topic):
    today_date = datetime.today().strftime("%Y-%m-%d")
    week_ago_date = (datetime.today() - timedelta(days=7)).strftime("%Y-%m-%d")
    all_articles = newsapi.get_everything(
        qintitle=topic,
        from_param=week_ago_date,
        to=today_date,
        language="en",
        sort_by="relevancy",
    )

    return all_articles


"""Gets the overall sentiment and sentiment score of the articles"""
def get_articles_sentiment(topic):
    all_articles = get_all_articles(topic)
    articlesCount = len(all_articles["articles"])

    results = []

    for i in range(articlesCount):
        url = all_articles["articles"][i]["url"]
        content = [get_article_content(url)]
        response = text_analytics_client.analyze_sentiment(content, language="en")
        results += [doc for doc in response if not doc.is_error]

    sentiments = {
        "positive": [],
        "neutral": [],
        "negative": [],
        "overallPositive": 0,
        "overallNeutral": 0,
        "overallNegative": 0,
    }

    print(f"Number of articles: {articlesCount}")
    for doc in results:
        # print(f"Overall sentiment: {doc.sentiment}")
        score = doc.confidence_scores
        sentiments["positive"].append(score.positive)
        sentiments["negative"].append(score.negative)
        sentiments["neutral"].append(score.neutral)

    resultsLength = len(results)

    # Round each to a max of 5 decimal places
    sentiments["overallPositive"] = "{:.5f}".format(
        sum(sentiments["positive"]) / resultsLength
    )
    sentiments["overallNegative"] = "{:.5f}".format(
        sum(sentiments["negative"]) / resultsLength
    )
    sentiments["overallNeutral"] = "{:.5f}".format(
        sum(sentiments["neutral"]) / resultsLength
    )

    return sentiments


# Sample
topic = "tesla"
print(get_articles_sentiment(topic))
