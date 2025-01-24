from datetime import datetime

import pytz

data = datetime.now(pytz.timezone("Europe/Oslo"))

print(data)