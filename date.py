from datetime import datetime, timedelta, timezone

data_osolo = datetime.now(timezone(timedelta(hours=2)))
data_São_paulo = datetime.now(timezone(timedelta(hours=-3)))

print(data_osolo)
print(data_São_paulo)