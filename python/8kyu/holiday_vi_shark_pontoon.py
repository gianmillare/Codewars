def shark(pontoon_distance, shark_distance, you_speed, shark_speed, dolphin):
    if dolphin:
        shark_time = shark_distance / (shark_speed / 2)
    else:
        shark_time = shark_distance/shark_speed
        
    my_time = pontoon_distance/you_speed
    
    if my_time < shark_time:
        return "Alive!"
    else:
        return "Shark Bait!"
    


shark(12, 50, 4, 8, True)