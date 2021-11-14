# from data import get_stock_data, get_gainers
# import time
# from datetime import datetime
# from termcolor import cprint, colored
# import json
import yfinance as yf
from history import update_buy_history, update_sell_history

# ticker = yf.Ticker("AAPL")
# Download data from Yahoo Finance and cache it for 1m
# Cache historical data for a stock so there aren't constant API calls


def get_stock_price(symbol):
    data = yf.download(symbol, period="1d", interval="1m")
    current_stock_price = data.iloc[-1]["Adj Close"]

    return current_stock_price


def buy_share(symbol, quantity):
    stock_price = get_stock_price(symbol)

    update_buy_history(symbol, stock_price, quantity)


def sell_share(symbol, sell_quantity):
    stock_price = get_stock_price(symbol)
    
    update_sell_history(symbol, stock_price, sell_quantity)


buy_share("AAPL", 400)
buy_share("TSLA", 500)
sell_share("TSLA", 200)


# """
# - If a stock is bought then print the bought stock in BLUE
# - If stock is sold then print the sold stock in BLUE
#     - If the stock is sold at a loss then print the stock in RED
#     - If the stock is sold at a gain then print the stock in GREEN
# """
# """
# 5 steps to place a trade

# 1. The Trade Setup
# 2. The Trade Trigger
# 3. The Stop Loss
# 4. The Price Target
# 5. The Reward-To-Risk
# """
