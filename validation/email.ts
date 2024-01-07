const emailRegExp = new RegExp(/^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i)

export function isEmail(email: string):boolean {
  return emailRegExp.test(email)
}