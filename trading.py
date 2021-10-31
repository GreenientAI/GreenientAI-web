from data import get_stock_data, get_gainers
import time
from datetime import datetime
from termcolor import cprint, colored
import schedule
import threading

# From https://schedule.readthedocs.io/en/stable/background-execution.html
def run_continuously(interval=1):
    cease_continuous_run = threading.Event()

    class ScheduleThread(threading.Thread):
        @classmethod
        def run(cls):
            while not cease_continuous_run.is_set():
                schedule.run_pending()
                time.sleep(interval)

    continuous_thread = ScheduleThread()
    continuous_thread.start()
    return cease_continuous_run


# Prints the top 25 gainers every 30 minutes from 9:30AM to 4:00PM
gainers = []
def print_gainers():
  time = datetime.today().strftime('%Y-%m-%d-%H:%M:%S')
  gainers = get_gainers()
  print(f"Top 25 gainers as of {time}")
  for i in range(len(gainers)):
    cprint(gainers[i], 'red')

def print_every_thirty_minutes():
  schedule.every(30).minutes.until("16:00").do(print_gainers)

schedule.every().day.at("09:30").do(print_gainers)
schedule.every().day.at("09:30").do(print_every_thirty_minutes)

# Start the background thread
stop_run_continuously = run_continuously()

'''
- If a stock is bought then print the bought stock in BLUE
- If stock is sold then print the sold stock in BLUE
  - If the stock is sold at a loss then print the stock in RED
  - If the stock is sold at a gain then print the stock in GREEN
'''

def buy_share(symbol, quantity, price):
  cprint("BUY 400 shares of TEST at 10:21:31AM for the price of $0.50", 'blue', attrs=['bold'])

def sell_share(symbol):
  cprint("SELL 400 shares of TEST at 11:34:43AM for the price of $0.71", 'blue', attrs=['reverse', 'bold'])
  cprint("GAIN from TEST: $84", 'green', attrs=['bold'])
  
'''
5 steps to place a trade

1. 
2. 
3. 
4. 
5. 
'''