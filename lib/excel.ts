import fs from 'fs';
import path from 'path';
import * as XLSX from 'xlsx';

export type Lead = {
  name: string;
  email: string;
  phone: string;
  broker: string;
  message?: string;
  timestamp?: string;
};

const DATA_DIR = path.join(process.cwd(), 'data');
const LEADS_PATH = path.join(DATA_DIR, 'leads.xlsx');

export function appendLead(lead: Lead): void {
  if (!fs.existsSync(DATA_DIR)) {
    fs.mkdirSync(DATA_DIR, { recursive: true });
  }

  let workbook: XLSX.WorkBook;
  let worksheet: XLSX.WorkSheet;

  if (fs.existsSync(LEADS_PATH)) {
    workbook = XLSX.readFile(LEADS_PATH);
    const sheetName = workbook.SheetNames[0];
    worksheet = workbook.Sheets[sheetName];
  } else {
    workbook = XLSX.utils.book_new();
    const header = [['Name', 'Email', 'Phone', 'Broker', 'Message', 'Timestamp']];
    worksheet = XLSX.utils.aoa_to_sheet(header);
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Leads');
  }

  const existingData = XLSX.utils.sheet_to_json<(string | number)[]>(worksheet, { header: 1 });
  const rows = Array.isArray(existingData) ? existingData : [];

  const timestamp = lead.timestamp ?? new Date().toISOString();

  const newRow = [
    lead.name,
    lead.email,
    lead.phone,
    lead.broker,
    lead.message ?? '',
    timestamp
  ];

  rows.push(newRow);
  const updatedSheet = XLSX.utils.aoa_to_sheet(rows);
  workbook.Sheets[workbook.SheetNames[0]] = updatedSheet;

  XLSX.writeFile(workbook, LEADS_PATH);
}

