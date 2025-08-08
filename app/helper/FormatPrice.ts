export function formatPriceFromString(value: string): string {
  const amount = parseFloat(value);

  if (isNaN(amount)) return value; 

  const hasDecimals = amount % 1 !== 0;

  return amount.toLocaleString("en-US", {
    minimumFractionDigits: hasDecimals ? 2 : 0,
    maximumFractionDigits: hasDecimals ? 2 : 0,
  });
}
