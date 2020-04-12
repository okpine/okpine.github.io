**Command**: `D:\Program\avrdude-6.3-mingw32\avrdude.exe`

**Arguments**: `-C "D:\Program\avrdude-6.3-mingw32\avrdude.conf"  -p atmega328p -c arduino -P COM3 -b 115200 -D -v -v -v -v -U flash:w:"$(TargetDir)$(TargetName).hex":i`
