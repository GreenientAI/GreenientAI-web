from datetime import datetime
import json
from pathlib import Path

class StockTradeData:
    def __init__(self, symbol, price, quantity):
        self.symbol = symbol
        self.price = price
        self.quantity = quantity

def check_file_exists_or_is_empty(file_path):
    # if file exists, read it
    # stats come from opening and investment account - leave blank for now
    if not Path(file_path).is_file() or Path(file_path).stat().st_size == 0:
        initial_data = {"buy": {}, "sell": {}, "stats": {}}
        with open(file_path, "w") as f:
            initial_data_object = json.dumps(
                initial_data, indent=4, sort_keys=True)
            f.write(initial_data_object)

def write_to_file(file_path, data, symbol, buy_sell):
    check_file_exists_or_is_empty(file_path)
    with open(file_path, "r+") as f:
        read_data = f.read()

        f.seek(0)
        json_data = json.loads(read_data)

        json_data[buy_sell][symbol] = data

        # pretty print
        json_object = json.dumps(json_data, indent=4, sort_keys=True)
        f.write(json_object)

def get_file_path():
    date = datetime.today().strftime("%Y-%m-%d")
    file_path = f"history/{date}.json"
    return file_path

def read_from_file(file_path, symbol, buy_sell):
    check_file_exists_or_is_empty(file_path)
    
    try:
        with open(file_path, "r") as f:
            read_data = f.read()
            json_data = json.loads(read_data)
            return json_data[buy_sell][symbol]
    except:
        return f"You do not own {symbol}"

def update_buy_history(symbol, price, quantity):
    data = {}
    timestamp = datetime.today().strftime("%Y-%m-%d-%H:%M:%S")
    file_path = get_file_path()
    total_investment = price * quantity
    
    data = {
        "price": price,
        "quantity": quantity,
        "total_investment": total_investment,
        "timestamp": timestamp,
    }
    
    write_to_file(file_path, data, symbol, "buy")


def update_sell_history(symbol, price, sell_quantity):
    file_path = get_file_path()
    buy_data = read_from_file(file_path, symbol, "buy")
    
    quantity = buy_data["quantity"]
    buy_price = buy_data["price"]
    if quantity > sell_quantity:
        quantity -= sell_quantity
        total_investment = buy_data["total_investment"]
        total_investment -= price * sell_quantity
        timestamp = datetime.today().strftime("%Y-%m-%d-%H:%M:%S")
        gain_or_loss = (price - buy_price) * sell_quantity
        data = {
            "price": price,
            "sell_quantity": sell_quantity,
            "total_investment": total_investment,
            "timestamp": timestamp,
            "profit": gain_or_loss,
            "remainingQuantity": quantity
        }
        write_to_file(file_path, data, symbol, "sell")
    else:
        return f"You own {quantity} of shares but are trying to sell {sell_quantity}"
        