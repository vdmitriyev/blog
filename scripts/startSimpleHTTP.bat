@echo off
REM @author Viktor Dmitriyev
cd ../..
popd .
python -m http.server 5151 --bind 127.0.0.1
pushd .