from datetime import datetime
import json


class StockTradeData:
    def __init__(self, symbol, price, quantity):
        self.symbol = symbol
        self.price = price
        self.quantity = quantity


"""
Buy at specific price
"""

date = datetime.today().strftime("%Y-%m-%d")


def update_history(price, quantity, isBuy):
    data = {}
    timestamp = datetime.today().strftime("%Y-%m-%d-%H:%M:%S")

    if isBuy:

        data = {"price": price, "quantity": quantity, "timestamp": timestamp}

    with open(f"history/{date}.json", "w") as f:
        # pretty print
        json_object = json.dumps(data, indent=4, sort_keys=True)
        f.write(json_object)
