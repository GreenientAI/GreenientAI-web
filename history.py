from datetime import datetime
import json
from pathlib import Path


class StockTradeData:
    def __init__(self, symbol, price, quantity):
        self.symbol = symbol
        self.price = price
        self.quantity = quantity




def update_history(symbol, price, quantity, total_investment, isBuy):
    data = {}
    timestamp = datetime.today().strftime("%Y-%m-%d-%H:%M:%S")
    date = datetime.today().strftime("%Y-%m-%d")
    file_path = f"history/{date}.json"

    # if file exists, read it
    # stats come from opening and investment account - leave blank for now
    if not Path(file_path).is_file():
        initial_data = {
            "buy": {

            },
            "sell": {

            },
            "stats": {

            }
        }
        with open(file_path, "w") as f:
            initial_data_object = json.dumps(
                initial_data, indent=4, sort_keys=True)
            f.write(initial_data_object)

    if isBuy:
        data = {
            "price": price,
            "quantity": quantity,
            "total_investment": total_investment,
            "timestamp": timestamp
        }

        with open(file_path, "r+") as f:
            read_data = f.read()

            # start at the beginning of the file so the file is completely overwritten
            f.seek(0)
            json_data = json.loads(read_data)

            json_data["buy"][symbol] = data

            # pretty print
            json_object = json.dumps(json_data, indent=4, sort_keys=True)
            f.write(json_object)
    else:
        # history when selling a stock
        pass
