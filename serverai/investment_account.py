class InvestmentAccount:
    def __init__(self, initialBalance):
        self.balance = initialBalance
        self.initialBalance = initialBalance

    def get_balance(self):
        return self.balancer

    def get_initial_balance(self):
        return self.initialBalance

    def deposit(self, amount):
        self.balance += amount

    def withdraw(self, amount):
        self.balance -= amount

    def get_transaction_history(self):
        return []

    # def buyOrder(self, symbol, volume):
    #   self.balance -= volume * price

    # Research actions that can be performed on an investment account
