
"use client";

import {
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  getFilteredRowModel,
  useReactTable,
  type ColumnDef,
  type OnChangeFn,
  type PaginationState,
  type RowSelectionState,
  type SortingState,
  type VisibilityState,
} from "@tanstack/react-table";

import {
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

import {
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
  Columns3,
} from "lucide-react";

import { Button } from "@/components/ui/button";

import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface IndeterminateCheckboxProps {
  checked: boolean;
  indeterminate?: boolean;
  onChange: (checked: boolean) => void;
  ariaLabel: string;
}

function IndeterminateCheckbox({
  checked,
  indeterminate = false,
  onChange,
  ariaLabel,
}: IndeterminateCheckboxProps) {
  return (
    <input
      type="checkbox"
      checked={checked}
      ref={(element) => {
        if (element) {
          element.indeterminate = indeterminate;
        }
      }}
      onChange={(event) => onChange(event.target.checked)}
      aria-label={ariaLabel}
      className="h-4 w-4 cursor-pointer rounded border-input accent-primary"
    />
  );
}

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
  loading?: boolean;
  emptyState?: ReactNode;
  toolbar?: ReactNode;
  enableRowSelection?: boolean;
  enableColumnVisibility?: boolean;
  renderBulkActions?: (selectedRows: TData[]) => ReactNode;
  getRowId?: (originalRow: TData, index: number) => string;
  initialPageSize?: number;
  pageSizeOptions?: number[];
  manualPagination?: boolean;
  pageCount?: number;
  pagination?: PaginationState;
  onPaginationChange?: OnChangeFn<PaginationState>;
  rowSelection?: RowSelectionState;
  onRowSelectionChange?: OnChangeFn<RowSelectionState>;
}

export function DataTable<TData, TValue>({
  columns,
  data,
  loading = false,
  emptyState,
  toolbar,
  enableRowSelection = false,
  enableColumnVisibility = true,
  renderBulkActions,
  getRowId,
  initialPageSize = 10,
  pageSizeOptions = [10, 20, 30, 40, 50],
  manualPagination = false,
  pageCount,
  pagination,
  onPaginationChange,
  rowSelection,
  onRowSelectionChange,
}: DataTableProps<TData, TValue>) {
  const [sorting, setSorting] = useState<SortingState>([]);
  const [columnVisibility, setColumnVisibility] =
    useState<VisibilityState>({});

  const [internalPagination, setInternalPagination] =
    useState<PaginationState>({
      pageIndex: 0,
      pageSize: initialPageSize,
    });

  const [internalRowSelection, setInternalRowSelection] =
    useState<RowSelectionState>({});

  const currentPagination = pagination ?? internalPagination;
  const currentRowSelection = rowSelection ?? internalRowSelection;

  const tableColumns = useMemo<ColumnDef<TData, TValue>[]>(
    () => {
      if (!enableRowSelection) {
        return columns;
      }

      const selectionColumn: ColumnDef<TData, TValue> = {
        id: "select",
        enableSorting: false,
        enableHiding: false,
        header: ({ table }) => (
          <IndeterminateCheckbox
            checked={table.getIsAllPageRowsSelected()}
            indeterminate={
              table.getIsSomePageRowsSelected() &&
              !table.getIsAllPageRowsSelected()
            }
            onChange={(checked) =>
              table.toggleAllPageRowsSelected(checked)
            }
            ariaLabel="Select all rows on this page"
          />
        ),
        cell: ({ row }) => (
          <IndeterminateCheckbox
            checked={row.getIsSelected()}
            indeterminate={row.getIsSomeSelected()}
            onChange={(checked) => row.toggleSelected(checked)}
            ariaLabel="Select row"
          />
        ),
      };

      return [selectionColumn, ...columns];
    },
    [columns, enableRowSelection]
  );

  const table = useReactTable({
    data,
    columns: tableColumns,
    state: {
      sorting,
      pagination: currentPagination,
      columnVisibility,
      rowSelection: currentRowSelection,
    },
    onSortingChange: setSorting,
    onColumnVisibilityChange: setColumnVisibility,
    onPaginationChange: (updater) => {
      if (onPaginationChange) {
        onPaginationChange(updater);
      } else {
        setInternalPagination(updater);
      }
    },
    onRowSelectionChange: (updater) => {
      if (onRowSelectionChange) {
        onRowSelectionChange(updater);
      } else {
        setInternalRowSelection(updater);
      }
    },
    enableRowSelection,
    getRowId,
    manualPagination,
    pageCount,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  });

  const selectedRows = table
    .getSelectedRowModel()
    .rows.map((row) => row.original);

  const visibleColumns = table
    .getAllColumns()
    .filter((column) => column.getCanHide());

  const pageCountValue = table.getPageCount();
  const showPagination = pageCountValue > 1;

  useEffect(() => {
    if (manualPagination) {
      return;
    }

    const lastPageIndex = Math.max(0, table.getPageCount() - 1);

    if (currentPagination.pageIndex > lastPageIndex) {
      table.setPageIndex(lastPageIndex);
    }
  }, [
    data.length,
    manualPagination,
    currentPagination.pageIndex,
    currentPagination.pageSize,
    table,
  ]);

  return (
    <div className="space-y-4">
      {(toolbar || enableColumnVisibility || selectedRows.length > 0) && (
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap items-center gap-2">
            {toolbar}

            {selectedRows.length > 0 && renderBulkActions && (
              <>
                <span className="text-sm text-muted-foreground">
                  {selectedRows.length} selected
                </span>

                {renderBulkActions(selectedRows)}
              </>
            )}
          </div>

          {enableColumnVisibility && visibleColumns.length > 0 && (
            <DropdownMenu>
              <DropdownMenuTrigger
                render={
                  <Button variant="outline" size="sm">
                    <Columns3 className="mr-2 h-4 w-4" />
                    Columns
                    <ChevronDown className="ml-2 h-4 w-4" />
                  </Button>
                }
              />

              <DropdownMenuContent align="end">
                <DropdownMenuSeparator />

                <DropdownMenuGroup>
                  <DropdownMenuLabel>
                    Toggle columns
                  </DropdownMenuLabel>

                  {visibleColumns.map((column) => {
                    const meta = column.columnDef.meta as
                      | { label?: string }
                      | undefined;

                    const label =
                      meta?.label ??
                      (typeof column.columnDef.header === "string"
                        ? column.columnDef.header
                        : column.id);

                    return (
                      <DropdownMenuCheckboxItem
                        key={column.id}
                        checked={column.getIsVisible()}
                        onCheckedChange={(checked) =>
                          column.toggleVisibility(checked)
                        }
                      >
                        {label}
                      </DropdownMenuCheckboxItem>
                    );
                  })}
                </DropdownMenuGroup>
              </DropdownMenuContent>
            </DropdownMenu>
          )}
        </div>
      )}

      <div className="overflow-hidden rounded-2xl border bg-white shadow-sm">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((group) => (
              <TableRow key={group.id}>
                {group.headers.map((header) => (
                  <TableHead key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </TableHead>
                ))}
              </TableRow>
            ))}
          </TableHeader>

          <TableBody>
            {loading ? (
              <TableRow>
                <TableCell
                  colSpan={table.getVisibleLeafColumns().length}
                  className="h-32 text-center text-muted-foreground"
                >
                  Loading...
                </TableCell>
              </TableRow>
            ) : table.getRowModel().rows.length > 0 ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={
                    row.getIsSelected() ? "selected" : undefined
                  }
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={table.getVisibleLeafColumns().length}
                  className="h-32 text-center text-muted-foreground"
                >
                  {emptyState ?? "No data found."}
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>

      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-muted-foreground">
          {enableRowSelection && selectedRows.length > 0
            ? `${selectedRows.length} row(s) selected. `
            : ""}
          Page {currentPagination.pageIndex + 1}
          {pageCountValue > 0 ? ` of ${pageCountValue}` : ""}
        </p>

        <div className="flex flex-wrap items-center gap-2">
          <div className="flex items-center gap-2">
            <span className="text-sm text-muted-foreground">
              Rows per page
            </span>

            <select
              value={currentPagination.pageSize}
              onChange={(event) =>
                table.setPageSize(Number(event.target.value))
              }
              className="h-8 rounded-md border border-input bg-background px-2 text-sm"
              aria-label="Rows per page"
            >
              {pageSizeOptions.map((size) => (
                <option key={size} value={size}>
                  {size}
                </option>
              ))}
            </select>
          </div>

          {showPagination && (
            <div className="flex items-center gap-1">
              <Button
                variant="outline"
                size="icon-sm"
                onClick={() => table.setPageIndex(0)}
                disabled={!table.getCanPreviousPage()}
                aria-label="First page"
              >
                <ChevronsLeft className="h-4 w-4" />
              </Button>

              <Button
                variant="outline"
                size="icon-sm"
                onClick={() => table.previousPage()}
                disabled={!table.getCanPreviousPage()}
                aria-label="Previous page"
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>

              <Button
                variant="outline"
                size="icon-sm"
                onClick={() => table.nextPage()}
                disabled={!table.getCanNextPage()}
                aria-label="Next page"
              >
                <ChevronRight className="h-4 w-4" />
              </Button>

              <Button
                variant="outline"
                size="icon-sm"
                onClick={() =>
                  table.setPageIndex(table.getPageCount() - 1)
                }
                disabled={!table.getCanNextPage()}
                aria-label="Last page"
              >
                <ChevronsRight className="h-4 w-4" />
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}