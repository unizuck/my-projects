import csv
import root_path

try:
    with open(root_path / " user.csv", "w",encoding="utf-8") as arquivo:
         escritor = csv.writer(arquivo)
         escritor.writerow(["id", "nome"])
         escritor.writerow(["1", "xulan"])
         escritor.writerow(["69", "picael"])
except IOError as exc:
    print(f"erro ao criar {exc}")