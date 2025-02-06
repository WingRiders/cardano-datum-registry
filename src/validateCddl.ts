import * as fs from 'node:fs'
import path from 'node:path'
import {validateCddl} from '@wingriders/datum-explorer-lib'
import fg from 'fast-glob'
import {isLowerCamelCaseCddlFileName} from './helpers'

const main = async () => {
  console.log('🔍 Searching for CDDL files...')

  const allFiles = await fg('projects/**/*', {dot: false, onlyFiles: true})

  if (allFiles.length === 0) {
    console.log('❗ No files found in projects/ folder.')
    return
  }

  for (const file of allFiles) {
    if (!isLowerCamelCaseCddlFileName(path.basename(file))) {
      console.error(
        `❌ File name should be in lowerCamelCase format, with .cddl extension: "${file}"`,
      )
      process.exit(1)
    }
    const rawCddl = await fs.promises.readFile(file, 'utf-8')
    try {
      await validateCddl(rawCddl)
      console.log(`✅ ${file}: Valid`)
    } catch (e) {
      console.error(`❌ Error in ${file}`, e)
      process.exit(1)
    }
  }

  console.log('🎉 All CDDL files validated!')
}

main()
