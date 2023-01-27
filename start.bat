taskkill /f /im node.exe > NUL
IF NOT ERRORLEVEL 1 (
	ECHO NOT START PROJECT.
	yarn dev
) ELSE (
	ECHO PROJECT KILL OK.
	start yarn dev
)

:END



Exit 0
