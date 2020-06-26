import math

def duty_free(price, discount, holiday_cost):
    true_price = price * (discount / 100)
    print(math.trunc(holiday_cost / true_price))

duty_free(17, 10, 500)