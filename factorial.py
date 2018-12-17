#factorial.py
# A program which calculates factorial of a number given by user.
# Program is illustrating use of a accumulator variable



def main():
    print("This program finds the factorial of a number given by user.")
    print()

    factor = int(input("Enter a number: "))
    factorial = 1

    for i in range(factor):
        factorial = factorial * factor
        print(factorial)
        factor = factor - 1

    
    
    print()
    print("The factor of a number ", factor, "is: ", factorial)


main()
input("Press Enter to exit")
    
