def points(games):
    total = []
    for game in games:
        game = list(game)
        x = game[0]
        y = game[-1]
    
        if x > y:
          total.append(3)
        elif x == y:
            total.append(1)
    
    return sum(total)