@echo off
title 360 Creative Agency - Dev Server
echo.
echo  =======================================
echo   360 Creative Agency - Starting Server
echo  =======================================
echo.
echo  Server will run at: http://127.0.0.1:8000
echo  Press Ctrl+C to stop the server.
echo.
"%USERPROFILE%\php82\php.exe" artisan serve --host=127.0.0.1 --port=8000
pause
