'''
Biến toàn cục (global), biến cục bộ (local), biến nonlocal
'''

x1 = "Biến toàn cục" #khai báo biến x

#Gọi x từ trong hàm vidu()
def vidu():
    global x1
    x1 = x1 + " 4"
    print("x trong hàm vidu() :", x1)


vidu()

#Gọi x ngoài hàm vidu()
print("x ngoài hàm vidu() : ", x1)

# def vidu():
#    y = "Biến cục bộ"
#    return y
#
# vidu()
#
# print(vidu())

# x = 5
#
# def vidu():
#    # global x
#    x = 10
#    print("Biến x cục bộ:", x)
#
# vidu()
#
# print("Biến x toàn cục:", x)

def ham_ngoai():
   x = "Biến cục bộ"

   def ham_trong():
      nonlocal x
      x = "Biến nonlocal"
      print("Bên trong:", x)

   ham_trong()
   print("Bên ngoài:", x)

ham_ngoai()