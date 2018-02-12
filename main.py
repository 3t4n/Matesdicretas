from flask import Flask, url_for, request, send_from_directory,render_template
import boolean

app = Flask(__name__, static_url_path='')
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

@app.route('/<string:page_name>/')
def static_page(page_name):
    return render_template('%s.html' % page_name)

@app.route('/js/<path:path>')
def sendjs(path):
    return send_from_directory('js', path)

@app.route('/imgs/<path:path>')
def sendimgs(path):
    return send_from_directory('imgs', path)

@app.route('/css/<path:path>')
def sendcss(path):
    return send_from_directory('css', path)

if __name__ == '__main__':
    app.run()

