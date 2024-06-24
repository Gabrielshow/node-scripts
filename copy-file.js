// import glob from 'glob';
// import fs from 'fs-extra';
// import path from 'path';
// install fs-extra
// to work on terminating process!!!

const fs = require('fs-extra');
const path = require('path');
const glob = require('glob');

function copyFile(srcRoot, dstRoot){
glob(`${srcRoot}/**/*.*`, {ignore: '*.bck' }, (err, files) => {
	if (err) {
		console.log(err);
	} else {
		for (const srcName of files) {
			fs.stat(srcName, (err, stats) => {
				if (err) {
					console.error(err);
				}else if (stats.isFile()) {
					const dstName = srcName.replace(srcRoot, dstRoot)
					const dstDir = path.dirname(dstName)
					fs.ensureDir(dstDir, (err) => {
						if (err) {
							console.error(err);
							console.error("It seems fs-extra is not installed, try running npm install fs-extra");
						}else {
							fs.copy(srcName, dstName, (err) => {
								if (err) {
									console.error(err);
								}else {
									console.log
								}
							}
							)
						}
					})
				}
			})
		}
	}
})	
}	


const args = process.argv.slice(2);

if (args.length !== 2 ) {
	console.error('Usage: node copy-file srcName dstName');
process.exit(1);
}

const [srcRoot, dstRoot ] = args;
copyFile(srcRoot, dstRoot)