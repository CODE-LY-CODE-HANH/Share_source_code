list_Name = ["hong", "hanh", "hang", "ha", "ngoc"]
list_Diem = [8, 2, 10, 9, 5]
sum = 0

for i in range(len(list_Name)):

    sum += list_Diem[i]
    if list_Diem[i] > 5:
        print(f"Điểm của {list_Name[i]} là {list_Diem[i]} . Chúc Mừng")
    else:
        print(f"Điểm của {list_Name[i]} là {list_Diem[i]} . Chia Buồn")

