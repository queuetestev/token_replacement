import * as glob from '@actions/glob';

const patterns = ['**/*.yaml', '**/.json']
const globber = await glob.create(patterns.join('\n'))


process.env.version = "4.0"

const replacements = {
    version : process.env.version
}

for await (const file of globber.globGenerator()) {
    console.log(file)
    console.log(replacements)
  }
