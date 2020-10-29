# Human Readable Duration Format
# https://www.codewars.com/kata/52742f58faf5485cae000b9a/train/python

# def format_duration(time):
#     # if the time is equal to zero, return now
#     if time == 0:
#         return "now"
    
#     # if the time is less than 60 seconds, return time as a string and concatenate the word "seconds"
#     if time == 1:
#         return str(time) + " second"
#     elif 1 < time < 60:
#         return str(time) + " seconds" 

# Another solution: Using division
def format_duration(time):
    if time == 0:
        return "now"
    
    if time == 1:
        return str(time) + " second"
    
    if 1 < time < 60:
        return str(time) + " seconds"
    
    if time >= 60:
        min = time / 60
        seconds = time % 60
    


print(format_duration(1))
# print(format_duration(62))
# print(format_duration(120))
# print(format_duration(3600))
# print(format_duration(3662))