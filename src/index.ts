import * as fs from 'fs'
import * as path from 'path'

function wrapLog(){
	const logFilePath = path.resolve(__dirname,'../log/log.txt')

	if(!fs.existsSync(path.resolve(__dirname,'../log'))){
		fs.mkdirSync(path.resolve(__dirname,'../log'))
	}

	if(!fs.existsSync(logFilePath)){
		fs.writeFileSync(logFilePath,'')
	}

	let logFileStream = fs.createWriteStream(logFilePath,{flags:'a'})

	process.stdout.write = process.stderr.write = logFileStream.write.bind(logFileStream);

}

wrapLog()

console.log('little juli')