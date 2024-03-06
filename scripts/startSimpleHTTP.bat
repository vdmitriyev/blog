@echo off
cd ..
SET PATH=C:\Compilers\Python10\Scripts\;C:\Compilers\Python10\;%PATH%
set PYTHONUTF8=1
set PYTHONDONTWRITEBYTECODE=1
call .venv\Scripts\activate.bat
REM python -m http.server 5151 --bind 127.0.0.1
pelican --listen
pushd .