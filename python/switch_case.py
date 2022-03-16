def hello():
    return "hello"

def week(i):
    switcher = {
        0: 'Sunday',
        1: 'Monday',
        2: 'Tuesday',
        3: 'Wednesday',
        4: 'Thursday',
        5: 'Friday',
        6: 'Saturday',
        7 : hello()
    }
    print(switcher)
    return switcher.get(i, "Invalid day of week")

print(week(7))