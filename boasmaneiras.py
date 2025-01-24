from pathlib import path

root_path = path(__file__).parent

with open(root_path / "lorem.txt", "r") as arquivo:
    print(arquivo.read())

try:
    with open(root_path / "arquivo-utf-8.txt", "w", encoding="utf-8") as arquivo:
        arquivo.write("aula1")
except IOError as exc:
    print(f"error ao abrir o arquivo{exc}")

try:
    with open(root_path / "arquivo-utf-8.txt", "w", encoding="ascii") as arquivo:
        print(arquivo.read)
except IOError as exc:
    print(f"error ao abrir o arquivo{exc}")
except UnicodeDecodeError as exc:
    print(exc)