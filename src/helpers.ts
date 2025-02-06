export const isLowerCamelCaseCddlFileName = (filename: string): boolean =>
  /^[a-z][a-zA-Z0-9]*\.cddl$/.test(filename)
