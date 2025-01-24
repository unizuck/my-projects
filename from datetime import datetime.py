from datetime import datetime

data_hora_atual = datetime.now()
data_hora_str = "2025-20-1 10:20"
mask_br = "%d/%M/%Y %a"
mask_en = "%Y-%M-%D %H:%M"

print(data_hora_str.strftime(mask_br))

data_convertida = datetime.strptime
print(datetime.strptime(data_hora_str, ))