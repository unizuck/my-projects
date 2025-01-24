from pathlib  import Path

try:
  arquivo = open("myarquivo.py")
except filenoterror as exc:
  print("erro")

root_path = path(__file__). parent

try:
    arquivo = open(root_path / "new-direct")
except filenoterror as exc:
     print("arquivo não encontrado!")
     print(exc)
