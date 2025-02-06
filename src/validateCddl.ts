import * as fs from 'node:fs'
import {validateCddl} from '@wingriders/datum-explorer-lib'
import fg from 'fast-glob'

const main = async () => {
  console.log('🔍 Searching for CDDL files...')

  const cddlFiles = await fg('projects/**/*.cddl')

  if (cddlFiles.length === 0) {
    console.log('❗ No CDDL files found.')
    return
  }

  for (const cddlFile of cddlFiles) {
    const rawCddl = await fs.promises.readFile(cddlFile, 'utf-8')
    try {
      await validateCddl(rawCddl)
      console.log(`✅ ${cddlFile}: Valid`)
    } catch (e) {
      console.error(`❌ Error in ${cddlFile}`, e)
      process.exit(1)
    }
  }

  console.log('🎉 All CDDL files validated!')
}

main()
