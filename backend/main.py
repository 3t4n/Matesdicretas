from flask import Flask, url_for
import boolean

app = Flask(__name__)
algebra = boolean.BooleanAlgebra()

@app.route('/<varsb>/<expression>')
def booleansimplification(varsb,expression):
    tempvar = list(varsb)
    str1 = ""
    str2 = ""
    for element in tempvar:
        str1 += element+","
        str2 += "\"" +element+"\","
    exec(str1+"=algebra.symbols("+str2+")")
    exec("ret = str(("+expression+").simplify())")
    return ret

