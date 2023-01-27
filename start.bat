for /f "tokens=5" %%p in (' netstat -ano ^| find "LISTENING" ^| find "3000" ') do taskkill /F /PID %%p > NUL
IF NOT ERRORLEVEL 1 (
	ECHO NOT START PROJECT.
	yarn dev
) ELSE (
	ECHO PROJECT KILL OK.
	start yarn dev
)

:END



Exit 0
