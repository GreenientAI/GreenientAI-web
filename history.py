from datetime import datetime
import json

class StockTradeData:
    def __init__(self, symbol, price, quantity):
        self.symbol = symbol
        self.price = price
        self.quantity = quantity

'''
Buy at specific price

'''

data = {
  "name": "test",
  "description": "test",
}

date = datetime.today().strftime('%Y-%m-%d')
dateTime = datetime.today().strftime('%Y-%m-%d-%H:%M:%S')

with open (f"history/{date}.json", "w") as f:
  # pretty print
  json_object = json.dumps(data, indent=4, sort_keys=True)
  f.write(json_object)