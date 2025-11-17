import Table, { TableBody, TableHeader } from "@/components/Table";
import { Button } from "../button";
import { colors, variants } from "./helper";

export const VariantMatrix = () => {
  // Definir las columnas de la tabla - una para cada color
  const columns = [
    {
      key: "variant",
      label: "Variant ↓ / Color →",
      allowsSorting: false,
      align: "start" as const,
    },
    ...colors.map((color) => ({
      key: color,
      label: color.charAt(0).toUpperCase() + color.slice(1),
      allowsSorting: false,
      align: "center" as const,
    })),
  ];

  // Generar contenido dinámicamente para la tabla
  const content = variants.map((variant, index) => {
    // Crear un objeto base para la fila
    const rowData: any = {
      id: index + 1,
      key: variant,
      variant: variant.charAt(0).toUpperCase() + variant.slice(1),
    };

    // Generar un botón para cada combinación de variant + color
    colors.forEach((color) => {
      rowData[color] = (
        <Button
          key={`${variant}-${color}`}
          variant={variant}
          color={color}
          size="sm"
          className="w-full min-w-[80px]"
        >
          {variant}
        </Button>
      );
    });

    return rowData;
  });

  return (
    <div className="space-y-8">
      {/* Default colored table */}
      <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
        <h3 className="text-lg font-semibold my-4 ml-4">Default Theme</h3>
        <Table
          color="primary"
          centerHeaderText
          columns={columns}
          items={content}
          isStriped
        >
          <TableHeader columns={columns} />
          <TableBody items={content} />
        </Table>
      </div>

      {/* Custom colored table example */}
      <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
        <h3 className="text-lg font-semibold my-4 ml-4">Custom Purple Theme</h3>
        <Table
          color="primary"
          centerHeaderText
          columns={columns}
          items={content}
          isStriped
        >
          <TableHeader columns={columns} />
          <TableBody items={content} />
        </Table>
      </div>

      {/* Gradient background example */}
      <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
        <h3 className="text-lg font-semibold my-4 ml-4">Gradient Theme</h3>
        <Table
          color="primary"
          centerHeaderText
          columns={columns}
          items={content}
          isStriped
        >
          <TableHeader columns={columns} />
          <TableBody items={content} />
        </Table>
      </div>
    </div>
  );
};

