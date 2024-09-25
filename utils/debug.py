import random
from colorama import Fore, Style, init

init(autoreset=True)

colors = [
    Fore.RED, Fore.GREEN, Fore.YELLOW, Fore.BLUE, Fore.MAGENTA, Fore.CYAN, Fore.WHITE
]

def print_with_color(text: str):
    color = random.choice(colors)
    print(f"{color}{text}{Style.RESET_ALL}")

# print_with_color("Hello, World!")