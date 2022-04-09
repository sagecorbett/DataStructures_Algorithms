# LINK: https://www.codewars.com/kata/552c028c030765286c00007d/train/
def iq_test(numbers):
#   Convert the string of numbers into an array of Ints  
    numbers = list(map(int, numbers.split()))
    
#   This solution I am only expecting one out of place number.
#   So it really just boils down to either my string of numbers is 
#   odd and my an even number is out of place OR vice versa
    odd = []
    even = []
    for i in range(len(numbers)):
        if(numbers[i] % 2 == 0):
            even.append(i+1)
        else: 
            odd.append(i+1)
        

    if(len(odd) > len(even)):
        return even[0]
    
    return odd[0]
