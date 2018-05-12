for run:

jjs.exe --language=es6 .\src\test_runner.js -cp .\src\lib\Siebel.jar;.\src\lib\SiebelJI_enu.jar

for testin with eScript
jjs.exe --language=es6 .\src\eScript_engine\eScript.js -cp .\src\lib\Siebel.jar;.\src\lib\SiebelJI_enu.jar
jjs.exe --language=es6 .\src\eScript_engine\test_eScriptEngine.js -cp .\src\lib\Siebel.jar;.\src\lib\SiebelJI_enu.jar