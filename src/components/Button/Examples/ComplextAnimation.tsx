import Table, { TableBody, TableHeader } from "@/components/Table";
import { Button } from "../button";
import { colors } from "./helper";

export const ComplexAnimationButtons = () => {
  // Definir los efectos de animación disponibles
  const effects = [
    "scale",
    "bounce",
    "ripple",
    "press",
    "punch",
    "wiggle",
    "none",
  ];

  // const colors = [
  //   "default",
  //   "primary",
  //   "secondary",
  //   "success",
  //   "warning",
  //   "danger",
  // ];

  // Definir las columnas de la tabla
  const columns = [
    {
      key: "hover",
      label: "Hover ↓ / Click →",
      allowsSorting: false,
      align: "start" as const,
    },
    ...effects.map((effect) => ({
      key: effect,
      label: effect.charAt(0).toUpperCase() + effect.slice(1),
      allowsSorting: false,
      align: "center" as const,
    })),
  ];

  // Generar contenido dinámicamente para la tabla
  const hoverEffects = [
    "Scale",
    "Bounce",
    "Ripple",
    "Press",
    "Punch",
    "Wiggle",
    "None",
  ];

  const content = hoverEffects.map((hoverEffect, index) => {
    const hoverAnimation =
      hoverEffect.toLowerCase() === "none"
        ? undefined
        : (hoverEffect.toLowerCase() as any);

    // Crear un objeto base para la fila
    const rowData: any = {
      id: index + 1,
      key: hoverEffect.toLowerCase(),
      hover: hoverEffect,
    };

    // Generar un botón para cada combinación de hover + click animation
    effects.forEach((clickEffect) => {
      const clickAnimation =
        clickEffect === "none" ? undefined : (clickEffect as any);

      rowData[clickEffect] = (
        <Button
          key={`${hoverEffect}-${clickEffect}`}
          hoverAnimation={hoverAnimation}
          clickAnimation={clickAnimation}
          color={colors[index % colors.length] as any}
          size="sm"
          className="w-full"
        >
          Test
        </Button>
      );
    });

    return rowData;
  });

  return (
    <Table centerHeaderText columns={columns} items={content}>
      <TableHeader columns={columns} />
      <TableBody items={content} />
    </Table>
  );
};
