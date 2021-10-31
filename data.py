from bs4 import BeautifulSoup
import requests
import os
import json

def get_gainers():
  # Gets the top 25 gainers of the day
  url = "https://finance.yahoo.com/gainers/"
  source = requests.get(url).text

  # use lxml -- parses XML and HTML
  soup = BeautifulSoup(source, 'lxml')

  # Remove the first 6 stock indexes and the last 20 gainers to only get the top 5 gainers
  tags = soup.find_all('a', attrs={"class": "Fw(600)"})[6:11]

  gainers = [x.string for x in tags]
  
  return gainers


'''
1. Build trading bot
2. Develop bot
3. Backtest bot on previous data
4. Test during black swan events
5. Simulate trading in a real world scenario
'''

# Find API for stocks. -- AlphaVantage
# Find relevant stocks -- YahooFinance to find the top 5 stocks that change the most throughout the day
# Find trading strategy -- https://www.investopedia.com/articles/active-trading/090415/only-take-trade-if-it-passes-5step-test.asp

def get_stock_data(symbol):
  api_key = os.getenv('ALPHAVANTAGE_API_KEY')

  # Use alphavantage API to get stock data
  url = f"https://www.alphavantage.co/query?function=OVERVIEW&symbol={symbol}&apikey={api_key}"

  response = requests.get(url)

  data = response.json()
  formatted_data = json.dumps(data, indent=4, sort_keys=True)
  
  return formatted_data
