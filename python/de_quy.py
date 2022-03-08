'''
Loop -> CPU
Đệ quy -> RAM

1. Xác định điểm dừng
2. Logic handle => Tạo ra điểm dừng
'''

# ví dụ 1
def chao(i):
    if i < 0:
        return
    print('hello  ' + str(i))
    chao(i - 1)

chao(10)

# ví dụ 2
def chao(start , end):
    if start > end:
        return
    print('hello  ' +  str(start))
    chao(start + 1 , end)

chao(0 , 10)

# ví dụ 3
def giaithua(n):
    if n == 1:
       return 1
    else:
        return (n * giaithua(n-1))

print(f"6! = " , giaithua(6))