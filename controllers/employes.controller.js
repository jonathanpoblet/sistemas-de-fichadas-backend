export async function controllerGetEmployes(req, res, next) {
  try {
    const employes = [];
    res.json({ employes });
  } catch (error) {
    res.status(500).send('Error al procesar el pago');
  }
}
