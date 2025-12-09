import React, { useState } from "react";
import Table from "../Table";
import TableBody from "../TableBody";
import TableHeader from "../TableHeader";
import tableData from "../../../data/tableData.json";
import { Button } from "@/components/Button";

export const LoadingStateTable = () => {
  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState<any[]>([]);

  const loadingColumns = [
    { key: "name", label: "Name", allowsSorting: true },
    { key: "email", label: "Email", allowsSorting: true },
    { key: "role", label: "Role", allowsSorting: true },
    { key: "department", label: "Department", allowsSorting: true },
  ];

  // Simulate loading data
  React.useEffect(() => {
    const timer = setTimeout(() => {
      setUsers(tableData.users.slice(0, 3)); // Load first 3 users
      setLoading(false);
    }, 3000); // 3 seconds loading time

    return () => clearTimeout(timer);
  }, []);

  const handleReload = () => {
    setLoading(true);
    setUsers([]);
    setTimeout(() => {
      setUsers(tableData.users.slice(0, 3));
      setLoading(false);
    }, 2000);
  };

  return (
    <section className="space-y-4">
      <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
        🔄 Loading State Example
      </h3>
      <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
        <Table
          columns={loadingColumns}
          items={users}
          loading={loading} // Loading state prop
          topContent={
            <div className="flex justify-between items-center p-4">
              <div>
                <h4 className="text-lg font-semibold">Users Table (Loading)</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {loading ? "Fetching users..." : "Users loaded successfully"}
                </p>
              </div>
              <Button onClick={handleReload} disabled={loading} color="primary">
                {loading ? "Loading..." : "Reload Data"}
              </Button>
            </div>
          }
        >
          <TableHeader columns={loadingColumns} />
          <TableBody items={users} />
        </Table>
      </div>
    </section>
  );
};
