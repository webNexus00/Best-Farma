export const CONTROLLED_KEYWORDS = [
  'amoxicilina',
  'azitromicina',
  'antibiotico',
  'antibiótico',
  'clonazepam',
  'rivotril',
  'zolpidem',
  'fluoxetina',
  'sertralina',
  'roacutan',
  'isotretinoina',
  'isotretinoína',
  'ritalina',
  'metilfenidato',
  'venvanse',
  'morfina',
  'tramadol',
  'codeina',
  'codeína',
  'tarja preta',
  'tarja vermelha',
  'controlado',
  'remédio controlado',
  'remedio controlado',
  'receita',
  'prescricao',
  'prescrição',
  'calmante',
  'ansiolitico',
  'ansiolítico',
  'antidepressivo',
  'corticoide',
  'prednisona',
  'dexametasona',
];

export function isPrescriptionSearch(query: string): boolean {
  if (!query) return false;
  const normalized = query
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .trim();

  return CONTROLLED_KEYWORDS.some((kw) => {
    const normalizedKw = kw
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '');
    return normalized.includes(normalizedKw) || normalizedKw.includes(normalized);
  });
}
