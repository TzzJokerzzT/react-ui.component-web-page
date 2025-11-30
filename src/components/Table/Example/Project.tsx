import { Button } from "@/components/Button";
import tableData from "../../../data/tableData.json";
import { projectColumns } from "../constant/constant";
import Table from "../Table";
import TableBody from "../TableBody";
import TableHeader from "../TableHeader";

export const ProjectsTableExample: React.FC = () => {
  const projects = tableData.projects as any[];

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
      <Table
        columns={projectColumns}
        items={projects}
        color="success"
        isStriped
        topContent={
          <div className="flex justify-between items-center p-4">
            <div>
              <h4 className="text-lg font-semibold">Portfolio de Proyectos</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Seguimiento de proyectos activos
              </p>
            </div>
            <Button color="success">Nuevo Proyecto</Button>
          </div>
        }
        bottomContent={
          <div className="p-4">
            <div className="grid grid-cols-4 gap-4 text-center">
              <div>
                <div className="text-2xl font-bold text-green-600">
                  {projects.filter((p: any) => p.status === "completed").length}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  Completados
                </div>
              </div>
              <div>
                <div className="text-2xl font-bold text-blue-600">
                  {
                    projects.filter((p: any) => p.status === "in_progress")
                      .length
                  }
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  En Progreso
                </div>
              </div>
              <div>
                <div className="text-2xl font-bold text-yellow-600">
                  {projects.filter((p: any) => p.status === "planning").length}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  Planificación
                </div>
              </div>
              <div>
                <div className="text-2xl font-bold text-red-600">
                  {projects.filter((p: any) => p.status === "on_hold").length}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  En Pausa
                </div>
              </div>
            </div>
          </div>
        }
      >
        <TableHeader columns={projectColumns} />
        <TableBody items={projects} />
      </Table>
    </div>
  );
};
