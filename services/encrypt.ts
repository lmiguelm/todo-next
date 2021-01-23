import bcrypt from 'bcrypt'

export async function encrypt(valueClear: string): Promise<string> {
  const salt = bcrypt.genSaltSync();
  const valueEncrypted = await bcrypt.hash(valueClear, salt);
  return valueEncrypted;
}

export function compare(valueClear: string, valueEncrypted: string) {
  return bcrypt.compareSync(valueClear, valueEncrypted);
}