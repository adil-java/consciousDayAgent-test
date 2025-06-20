import React from 'react';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";


type JournalEntry = {
  morningJournal: string;
  dream: string;
  intention: string;
  priorities: string;
  aiResponse?: string;
};

type HistoryProps = {
  data: Record<string, JournalEntry>;
};

export default function History({ data }: HistoryProps) {
  const entries = Object.entries(data);

  return (
    <div className='bg-white rounded-lg'>
      <Table>
        <TableCaption>Morning Reflection History</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Date</TableHead>
            <TableHead>Morning Journal</TableHead>
            <TableHead>Intention</TableHead>
            <TableHead className="text-right">Top Priorities</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {entries.length === 0 ? (
            <TableRow>
              <TableCell colSpan={4} className="text-center text-gray-500">
                No entries found.
              </TableCell>
            </TableRow>
          ) : (
            entries.map(([date, entry]) => (
              <TableRow key={date}>
                <TableCell>{date}</TableCell>
                <TableCell>{entry.morningJournal || "-"}</TableCell>
                <TableCell>{entry.intention || "-"}</TableCell>
                <TableCell className="text-right">{entry.priorities || "-"}</TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </div>
  );
}
