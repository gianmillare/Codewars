# Human Readable Duration Format
# https://www.codewars.com/kata/52742f58faf5485cae000b9a/train/python

# Solution 1: Functions on top of 
def format_duration(time):
    # Declare the varaibles based on seconds
    minutes = 60
    hours = 3600
    days = 86400
    years = 31536000
    human_format = {
      "years": 0,
      "days": 0,
      "hours": 0,
      "minutes": 0,
      "seconds": 0
    }
    # if time is zero, return now
    if time == 0:
        return "now"
    
    # if time is 1, return 1 second
    elif time == 1:
        return str(time) + " second"
    
    # if time is less than 60 but more than 1, return time concatenate minutes
    elif 1 < time < 60:
      return str(time) + " seconds"
    
    # if time is not zero and more than 1, run function decrement
    else:
      if time > years:
        human_format["years"] = year_calc(time)
        time -= years
      if days <= time < years:
        human_format["days"] = day_calc(time)
        time -= days
      if hours <= time < days:
        human_format["hours"] = hour_calc(time)
        time -= hours
    
    return human_format, time

# Calculate years
def year_calc(time):
  ans = int(time / years)
  return ans

# Calculate days
def day_calc(time):
  ans = int(time / days)
  return ans

# Calculate hours
def hour_calc(time):
  ans = int(time / hours)
  return ans

      
    

print(format_duration(31536001))
print(format_duration(0))
print(format_duration(1))
print(format_duration(62))
print(format_duration(120))
print(format_duration(3600))
print(format_duration(3662))