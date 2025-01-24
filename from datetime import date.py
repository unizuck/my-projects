from datetime import datetime, timedelta

tipo_carro = "p"
tempo_pequeno = 30
tempo_medio = 45
tempo_grande = 60
data_atual = datetime.now()

if tipo_carro == "m":
    data_estimada = data_atual + timedelta(minutes=tempo_pequeno)
    print(f"o carro chegou: {data_atual} e ficara pronto as {data_estimada}")
elif tipo_carro == "m":
    data_estimada = data_atual + timedelta(minutes=tempo_medio)
    print(f"o carro chegou: {data_atual} e ficara pronto as {data_estimada}")
else:
    data_estimada = data_atual + timedelta(minutes=tempo_grande)
    print(f"o carro chegou: {data_atual} e ficara pronto as {data_estimada}")

resultado = datetime(2025, 20, 1) - timedelta(hours=1)
print(resultado.time())
print(datetime.now().date())