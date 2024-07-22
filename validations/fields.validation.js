export function validateFields(body, tableFields) {
  const fields = Object.keys(body);
  const hasValidField = fields.some(field => tableFields.includes(field));

  return hasValidField;
}
