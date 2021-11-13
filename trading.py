from data import get_stock_data, get_gainers
import time
from datetime import datetime
from termcolor import cprint, colored
import json
import yfinance as yf
from history import update_buy_history

# ticker = yf.Ticker("AAPL")
# Download data from Yahoo Finance and cache it for 1m
# Cache historical data for a stock so there aren't constant API calls

current_holdings = {}


def get_stock_price(symbol):
    data = yf.download(symbol, period="1d", interval="1m")
    current_stock_price = data.iloc[-1]["Adj Close"]

    return current_stock_price


def buy_share(symbol, quantity):
    time = datetime.today().strftime("%Y-%m-%d-%H:%M:%S")
    stock_price = get_stock_price(symbol)

    update_buy_history(symbol, stock_price, quantity)

    return (
        f"BUY {quantity} shares of {symbol} at {time} for the price of ${stock_price}"
    )


def sell_share(symbol, sell_quantity):
    if symbol in current_holdings:
        current_holdings_quantity = current_holdings[symbol]["quantity"]

        if current_holdings_quantity >= sell_quantity:
            time = datetime.today().strftime("%Y-%m-%d-%H:%M:%S")

            stock_price = get_stock_price(symbol)
            buy_price = current_holdings[symbol]["buy_price"]

            gain_or_loss = (stock_price - buy_price) * sell_quantity

            if current_holdings_quantity == sell_quantity:
                del current_holdings[symbol]
            else:
                current_holdings[symbol]["quantity"] -= sell_quantity

            return f"SELL {sell_quantity} shares of {symbol} at {time}. Gained {gain_or_loss}"
    else:
        return f"{symbol} not in current holdings"


buy_share("AAPL", 400)
buy_share("TSLA", 500)
# print(sell_share("TSLA", 200))
# print(current_holdings)


# import schedule
# import threading

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

# # From https://schedule.readthedocs.io/en/stable/background-execution.html
# def run_continuously(interval=1):
#     cease_continuous_run = threading.Event()

#     class ScheduleThread(threading.Thread):
#         @classmethod
#         def run(cls):
#             while not cease_continuous_run.is_set():
#                 schedule.run_pending()
#                 time.sleep(interval)

#     continuous_thread = ScheduleThread()
#     continuous_thread.start()
#     return cease_continuous_run


# # Prints the top 25 gainers every 30 minutes from 9:30AM to 4:00PM
# gainers = []


# def print_gainers():
#     time = datetime.today().strftime("%Y-%m-%d-%H:%M:%S")
#     gainers = get_gainers()
#     print(f"Top 25 gainers as of {time}")
#     for i in range(len(gainers)):
#         cprint(gainers[i], "red")


# def print_every_thirty_minutes():
#     schedule.every(30).minutes.until("16:00").do(print_gainers)


# schedule.every().day.at("09:30").do(print_gainers)
# schedule.every().day.at("09:30").do(print_every_thirty_minutes)

# # Start the background thread
# stop_run_continuously = run_continuously()
