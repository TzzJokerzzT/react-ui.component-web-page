// Función para formatear moneda
export const formatCurrency = (amount: number) => {
  return new Intl.NumberFormat("es-ES", {
    style: "currency",
    currency: "EUR",
  }).format(amount);
};

// Función para formatear fecha
export const formatDate = (dateString: string) => {
  return new Date(dateString).toLocaleDateString("es-ES");
};
