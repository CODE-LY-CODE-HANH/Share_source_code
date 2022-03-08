'''
link tham khảo
https://quantrimang.com/ham-de-quy-trong-python-145807#:~:text=V%C3%AD%20d%E1%BB%A5%20v%E1%BB%81%20h%C3%A0m%20%C4%91%E1%BB%87%20quy%20trong%20Python&text=l%C3%A0%201*2*3*4*5%3D%20120.&text=Ph%C3%A9p%20%C4%91%E1%BB%87%20quy%20tr%C3%AAn%20k%E1%BA%BFt,t%E1%BB%B1%20g%E1%BB%8Di%20m%C3%A3i%20%C4%91%E1%BA%BFn%20n%C3%B3.

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