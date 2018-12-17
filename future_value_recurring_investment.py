def main():
    print("This program is calculating value of investment after given number of years, paid fixed investment every year and APR.")
    invest = eval(input("Please enter fixed amount of investment you would like to recuringly place every year in dollars: "))
    apr = eval(input("Please enter annual interest of investment in decimal form. For example: 3% you should enter as 0.03: "))
    years = eval(input("Please enter for how many years you would like to place investment: "))
    principal = 0

    for i in range(years):
        principal = (principal + invest)*(1 + apr)
        

    print("The value of investement after",years ,"years will be: ", principal)

main()
input()

